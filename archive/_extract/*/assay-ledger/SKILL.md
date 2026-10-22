---
name: assay-ledger
description: Run a rigorous claim-by-claim fact-check ("assay") on a manuscript, essay, thesis, or research project and maintain a living verification ledger. Use whenever the user wants claims verified, sources checked, a fact-check pass, a "assay," a verification ledger, confidence levels on citations, or asks "does this claim hold?" — and especially for nonfiction book projects, esoteric/historical research, or any writing where a keystone thesis depends on load-bearing factual claims. Also use when a source falls and a claim needs restructuring on the record.
---

# Assay Ledger

A discipline for verifying a work's factual claims one at a time, recording exactly what was checked, what would falsify it, and what happened — so the work's confidence is auditable and failures strengthen rather than embarrass it.

## Setup

1. **Extract the claims.** Walk the manuscript/outline and list every factual claim that carries weight. Skip rhetoric; capture anything the argument leans on.
2. **Tier them.**
   - **Tier 1 — load-bearing:** if this falls, a chapter or the keystone takes damage. Assay first, always.
   - **Tier 2 — supporting:** color, texture, secondary evidence. Queue with confirmation criteria.
   - **Tier 3 — incidental:** verify opportunistically or hedge in prose.
3. **Create the ledger** (one living markdown file). Every claim gets an entry BEFORE verification:

```
### CLAIM <id>: <the claim, stated plainly and falsifiably>
**Bears on:** <chapter/section; what depends on it>
**Would count as confirmation:** <named specifically — which primary source, what it must say>
**Would count as a fall:** <what evidence kills it>
**Status:** UNVERIFIED
```

## Verification rules

- **Primary scholarship only.** Peer-reviewed papers (get the DOI), critical editions, first-hand documents, museum/archive records. Aggregators, wikis, GitHub READMEs, and popular retellings are never sufficient — they generate leads, not verdicts.
- **Every verdict cites its exact source**: author, venue, year, DOI/URL, and the specific finding relied on.
- **Record the confidence level with the claim**, not just the citation. "Airtight" (e.g., materials analysis), "attributed" (e.g., 'associated with' via later annotation), "contested" (name who contests), "hypothesis" (mechanism claims especially).
- **Attribution precision matters**: distinguish what a source establishes from what tradition assumes (an object's provenance may be airtight while its famous ownership is only Walpole-era annotation). Never let the strong half of a claim launder the weak half.
- **Check the tempting simplifications**: coinages that postdate the thing named (and who coined them, and who contests it), pseudonymous authorship, translation lineage (which manuscript a famous translation actually used, and whether a better one exists), independent-invention claims (verify each leg independently — inheritance masquerades as convergence).

## Status vocabulary (verdicts)

- **HOLD** — claim verified as stated.
- **SOFTEN** — claim survives with reduced strength; rewrite to the supported version (softening can be *favorable*: the true version is often more interesting).
- **PARTIAL FALL → RESTRUCTURE** — a component fell; the claim rebuilds on what survived. Record BOTH states: the old claim, what killed it, the new claim. The correction is content.
- **FALL** — cut it. Record why, so it doesn't creep back.

## After the assay

- Summarize per tier: N claims, verdict distribution, keystone damage (yes/no).
- Promote the Tier-2 queue into the ledger with confirmation criteria so anyone can continue the work.
- The ledger ships with the project (handoffs, collaborators): it IS the work's honesty made inspectable.

## Standing posture

A fall is a gift — restructured claims are stronger and more interesting than the originals ("four independent derivations" becoming "three derivations and one documented inheritance" is a better story AND true). Never patch a falling claim with vaguer language to preserve its shape; restate it as what the evidence supports, on the record.
