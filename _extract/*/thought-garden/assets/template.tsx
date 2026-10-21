import React, { useState, useMemo } from "react";

// ---- the map of the session, as a tended tree ----
// EDIT: NODES only. Do not change KINDS, CUES, layout, or snapshot format.
const KINDS = {
  seed:       { label: "your seed",     hue: "#34d399", note: "something you brought / wanted to explore" },
  fill:       { label: "I filled",      hue: "#38bdf8", note: "vocabulary, mechanism, or derivation I supplied" },
  unlock:     { label: "unlock",        hue: "#a78bfa", note: "a reframe or law that opened things up" },
  correction: { label: "you steered",   hue: "#fbbf24", note: "where you pulled me back from drift / overbuilding" },
  open:       { label: "open edge",     hue: "#fb7185", note: "unresolved — a live fork or parked idea" },
  substrate:  { label: "fixed ground",  hue: "#94a3b8", note: "settled / locked / not under discussion" },
};

const CUES = {
  unreviewed: { label: "—",         accent: "#475569", dim: false },
  yup:        { label: "yup",       accent: "#22c55e", dim: false },
  good:       { label: "good",      accent: "#2dd4bf", dim: false },
  hold:       { label: "hold",      accent: "#fbbf24", dim: false },
  slow:       { label: "slow down", accent: "#fb923c", dim: false },
  nope:       { label: "nope",      accent: "#ef4444", dim: false },
  prune:      { label: "prune",     accent: "#3f3f46", dim: true  },
};
const CUE_ORDER = ["yup", "good", "hold", "slow", "nope", "prune"];

// EDIT THIS: root must be an unlock stating what the session resolved into.
// 3-6 top-level branches; corrections near-verbatim; every parked fork = open node.
const NODES = [
  { id: "root", parent: null, kind: "unlock", title: "SESSION TITLE — one line",
    essence: "One sentence: what the whole session resolved into.",
    detail: "One paragraph: the arc of the session, start to landing." },

  { id: "A", parent: "root", kind: "seed", title: "First branch",
    essence: "One sentence claim.",
    detail: "1-3 sentences of the working: numbers, reasoning, exact resolution." },
];

export default function ThoughtGarden() {
  const [status, setStatus] = useState({});
  const [notes, setNotes] = useState({});
  const [openId, setOpenId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hidePruned, setHidePruned] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const childrenOf = useMemo(() => {
    const m = {};
    NODES.forEach((n) => { (m[n.parent] = m[n.parent] || []).push(n); });
    return m;
  }, []);

  const st = (id) => status[id] || "unreviewed";
  const cycleHidden = (id) => hidePruned && st(id) === "prune";

  const setCue = (id, cue) =>
    setStatus((s) => ({ ...s, [id]: s[id] === cue ? "unreviewed" : cue }));

  const counts = useMemo(() => {
    const c = { yup: 0, good: 0, hold: 0, slow: 0, nope: 0, prune: 0, open: 0, unreviewed: 0 };
    NODES.forEach((n) => {
      c[st(n.id)]++;
      if (n.kind === "open" && st(n.id) !== "prune") c.open++;
    });
    return c;
  }, [status]);

  const flatFilter = filter !== "all" && filter !== "flagged";
  const matches = (n) => {
    if (cycleHidden(n.id)) return false;
    if (filter === "all") return true;
    if (filter === "flagged") return ["hold", "slow", "nope"].includes(st(n.id));
    return n.kind === filter;
  };

  const buildSnapshot = () => {
    const line = (n) => {
      const tweak = notes[n.id] ? `  \u2192 tweak: ${notes[n.id]}` : "";
      return `- [${CUES[st(n.id)].label}] ${n.title} \u2014 ${n.essence}${tweak}`;
    };
    const group = (title, pred) => {
      const items = NODES.filter(pred);
      return items.length ? `\n${title}\n${items.map(line).join("\n")}` : "";
    };
    const liveEdges = NODES.filter((n) => n.kind === "open" && st(n.id) !== "prune");
    return (
`SNAPSHOT TO SEND BACK TO CLAUDE \u2014 SESSION NAME, tended.

CONFIRMED (yup / good):${group("", (n) => ["yup", "good"].includes(st(n.id))) || "\n- (none yet)"}
${group("WATCH / CLARIFY (hold / slow down):", (n) => ["hold", "slow"].includes(st(n.id)))}
${group("WRONG (nope):", (n) => st(n.id) === "nope")}
${group("PRUNED (outdated, drop these):", (n) => st(n.id) === "prune")}

LIVE EDGES (where we actually are):
${liveEdges.length ? liveEdges.map((n) => `- ${n.title}: ${n.essence}`).join("\n") : "- (none flagged open)"}

\u2014 pick up from the live edge.`
    );
  };

  const snapshot = buildSnapshot();
  const copy = async () => {
    try { await navigator.clipboard.writeText(snapshot); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch { setCopied(false); }
  };

  const renderNode = (n, depth) => {
    const kind = KINDS[n.kind];
    const cue = CUES[st(n.id)];
    const isOpen = openId === n.id;
    const pruned = st(n.id) === "prune";
    return (
      <div key={n.id} style={{ marginLeft: flatFilter ? 0 : depth * 18 }}>
        <div
          onClick={() => setOpenId(isOpen ? null : n.id)}
          style={{
            display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
            borderLeft: `3px solid ${cue.accent}`,
            background: isOpen ? "#1e293b" : "#172033",
            opacity: pruned ? 0.45 : 1,
            padding: "9px 12px", marginBottom: 6, borderRadius: 6,
            transition: "background .15s",
          }}
        >
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: .4, textTransform: "uppercase",
            color: kind.hue, border: `1px solid ${kind.hue}55`, borderRadius: 4,
            padding: "2px 6px", whiteSpace: "nowrap", flexShrink: 0,
          }}>{kind.label}</span>
          <span style={{
            color: "#e2e8f0", fontSize: 14, fontWeight: 500,
            textDecoration: pruned ? "line-through" : "none",
          }}>{n.title}</span>
          {st(n.id) !== "unreviewed" && !pruned && (
            <span style={{ marginLeft: "auto", fontSize: 11, color: cue.accent, fontWeight: 600 }}>{cue.label}</span>
          )}
        </div>

        {isOpen && (
          <div style={{ margin: "0 0 10px 14px", padding: "10px 14px", background: "#0f172a", borderRadius: 6, border: "1px solid #1e293b" }}>
            <div style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.55, marginBottom: 4 }}>{n.essence}</div>
            <div style={{ color: "#94a3b8", fontSize: 12.5, lineHeight: 1.6, marginBottom: 12 }}>{n.detail}</div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {CUE_ORDER.map((c) => (
                <button key={c} onClick={(e) => { e.stopPropagation(); setCue(n.id, c); }}
                  style={{
                    fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 5, cursor: "pointer",
                    border: `1px solid ${st(n.id) === c ? CUES[c].accent : "#334155"}`,
                    background: st(n.id) === c ? CUES[c].accent : "transparent",
                    color: st(n.id) === c ? "#0f172a" : "#94a3b8",
                  }}>{CUES[c].label}</button>
              ))}
            </div>

            <input
              value={notes[n.id] || ""}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setNotes((s) => ({ ...s, [n.id]: e.target.value }))}
              placeholder="small change / clarification\u2026"
              style={{
                width: "100%", boxSizing: "border-box", fontSize: 12.5, padding: "7px 10px",
                background: "#172033", border: "1px solid #334155", borderRadius: 5, color: "#e2e8f0", outline: "none",
              }}
            />
          </div>
        )}

        {!flatFilter && (childrenOf[n.id] || []).map((c) => renderNode(c, depth + 1))}
      </div>
    );
  };

  const FilterBtn = ({ id, label, hue }) => (
    <button onClick={() => setFilter(id)}
      style={{
        fontSize: 11.5, fontWeight: 600, padding: "5px 10px", borderRadius: 5, cursor: "pointer",
        border: `1px solid ${filter === id ? (hue || "#64748b") : "#27344a"}`,
        background: filter === id ? (hue || "#64748b") : "transparent",
        color: filter === id ? "#0f172a" : "#94a3b8",
      }}>{label}</button>
  );

  return (
    <div style={{ minHeight: "100%", background: "#0b1120", padding: "22px 18px", fontFamily: "ui-sans-serif, system-ui, sans-serif", overscrollBehavior: "contain" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 6 }}>
          <h1 style={{ color: "#f1f5f9", fontSize: 20, fontWeight: 700, margin: 0 }}>MET\u2203OR \u2014 Thought-Garden: SESSION NAME</h1>
          <p style={{ color: "#64748b", fontSize: 13, margin: "4px 0 0" }}>
            This session, as a tended tree. Tap a node, set a cue, note any change. Then export the snapshot and hand it back.
          </p>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "14px 0 12px", fontSize: 12, color: "#94a3b8" }}>
          <span><b style={{ color: "#22c55e" }}>{counts.yup + counts.good}</b> kept</span>
          <span><b style={{ color: "#fbbf24" }}>{counts.hold + counts.slow}</b> flagged</span>
          <span><b style={{ color: "#ef4444" }}>{counts.nope}</b> wrong</span>
          <span><b style={{ color: "#64748b" }}>{counts.prune}</b> pruned</span>
          <span><b style={{ color: "#fb7185" }}>{counts.open}</b> open edges</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
          <FilterBtn id="all" label="whole tree" />
          <FilterBtn id="flagged" label="flagged only" hue="#fbbf24" />
          {Object.entries(KINDS).map(([k, v]) => <FilterBtn key={k} id={k} label={v.label} hue={v.hue} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0 16px" }}>
          <label style={{ fontSize: 12, color: "#64748b", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <input type="checkbox" checked={hidePruned} onChange={(e) => setHidePruned(e.target.checked)} />
            hide pruned
          </label>
          {flatFilter && <span style={{ fontSize: 11, color: "#475569" }}>(cross-cut view \u2014 one type, regardless of where it sits in the tree)</span>}
        </div>

        <div>
          {flatFilter
            ? NODES.filter(matches).map((n) => renderNode(n, 0))
            : renderNode(NODES[0], 0)}
        </div>

        <div style={{ marginTop: 18 }}>
          <button onClick={() => setExportOpen((o) => !o)}
            style={{ fontSize: 13, fontWeight: 600, padding: "9px 16px", borderRadius: 6, cursor: "pointer",
              border: "1px solid #38bdf8", background: "#38bdf8", color: "#0b1120" }}>
            {exportOpen ? "hide snapshot" : "export \u2192 snapshot for Claude"}
          </button>
          {exportOpen && (
            <div style={{ marginTop: 12 }}>
              <button onClick={copy}
                style={{ fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 5, cursor: "pointer",
                  border: "1px solid #334155", background: copied ? "#22c55e" : "#172033", color: copied ? "#0b1120" : "#94a3b8", marginBottom: 8 }}>
                {copied ? "copied" : "copy to clipboard"}
              </button>
              <pre style={{
                whiteSpace: "pre-wrap", fontSize: 12, lineHeight: 1.5, color: "#cbd5e1",
                background: "#0f172a", border: "1px solid #1e293b", borderRadius: 6, padding: 14, margin: 0,
                fontFamily: "ui-monospace, monospace",
              }}>{snapshot}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
