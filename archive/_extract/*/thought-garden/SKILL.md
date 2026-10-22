---
name: thought-garden
description: Build a "thought garden" — an interactive React tree that maps a conversation or project session as a tended tree of nodes the user reviews with cues (yup/good/hold/slow/nope/prune) and exports as a text snapshot to hand back to Claude in a future session. Use whenever the user says "make a thought garden," "garden this," "map this session," asks for a session/project state map, or hands back a garden SNAPSHOT to resume from. Also appropriate to offer at the end of long multi-thread working sessions.
---

# Thought Garden

A thought garden is a session-state instrument, not a summary. It renders the conversation as a tree of typed nodes; the user taps through, sets a review cue on each, adds small notes, then exports a plain-text snapshot that becomes the seed of the next session. The garden closes the loop: session → garden → tended snapshot → next session picks up from the live edges.

## Two modes

**BUILD** — the user asks for a garden of the current conversation/project. Harvest nodes, fill the template, ship the .tsx artifact.

**READ** — the user pastes a `SNAPSHOT TO SEND BACK TO CLAUDE` block. Do not summarize it back. Treat it as ground truth: honor every `nope` and `prune` (those items are dead — don't revive them unprompted), treat `hold`/`slow down` as flags to address before building on those items, and **start work from the LIVE EDGES section**. Tweaks noted on items are corrections to apply.

## Building a garden

### 1. Use the template

Copy `assets/template.tsx` and modify ONLY three things: the `NODES` array, the `<h1>` title, and the snapshot header line. Do not restyle, do not add features, do not change the KINDS/CUES taxonomies. Consistency across gardens is what makes them comparable over time. Ship it as a React artifact (single .tsx file, default export, no required props).

### 2. The node taxonomy (fixed)

| kind | meaning | harvest from |
|------|---------|--------------|
| `seed` | something the user brought / wanted to explore | their opening moves and new topics they introduced |
| `fill` | vocabulary, mechanism, math, or derivation Claude supplied | explanations, tables, calculations, technical notes |
| `unlock` | a reframe or law that opened things up | the moments the conversation pivoted on — either party's |
| `correction` | where the user steered Claude back from drift/overbuilding | pushback, "no that's not it," refocusing, challenges |
| `open` | unresolved — a live fork or parked idea | questions asked but never answered, decisions deferred, "before X, decide Y" items |
| `substrate` | settled / locked / not under discussion | decisions made, specs locked, existing facts |

Rules of harvest:
- **Corrections are sacred.** Capture every place the user redirected, near-verbatim in the title when possible (quoted fragments of their actual words). These are the highest-value nodes — they encode the user's judgment.
- **Open edges are the point.** The snapshot's LIVE EDGES section is what the next session resumes from. Every unanswered question and deferred decision gets an `open` node. Never let a parked fork disappear.
- **Root is an `unlock`** stating what the whole session resolved into, in one line + one paragraph.
- Group under 3–6 top-level branches (direct children of root), each a phase or thread of the session. Depth rarely exceeds 2 below root.
- 15–30 nodes total for a substantial session. Fewer for short ones. Every node must be independently meaningful — no filler.

### 3. Node voice

- `title`: short, specific, punchy. User's own phrases in quotes where they were load-bearing.
- `essence`: one sentence, the claim itself — readable in the snapshot without the detail.
- `detail`: 1–3 sentences of the working: the numbers, the reasoning, the exact resolution. This is what lets a future session reconstruct context without the original transcript.
- Write essences so the exported snapshot reads as a coherent briefing on its own — the snapshot only carries `title — essence`, never `detail`.

### 4. Do not change

- The CUES set (`yup/good/hold/slow down/nope/prune`) and their colors.
- The snapshot format (`SNAPSHOT TO SEND BACK TO CLAUDE …` with CONFIRMED / WATCH / WRONG / PRUNED / LIVE EDGES groups).
- The dark-slate visual language.
- No localStorage/sessionStorage — state is in-memory only (artifact constraint); the export button IS the persistence mechanism.

### 5. Naming

File: `<short-topic>-thought-garden.tsx`. Title: `MET∃OR — Thought-Garden: <Session Name>` (or the user's current project banner if they specify one).

## Quality bar

Before shipping, check: Would the exported snapshot alone — with every node marked `yup` — let a fresh Claude session resume the work accurately? If any decision, correction, or open fork from the session is missing from that snapshot, the harvest is incomplete.
