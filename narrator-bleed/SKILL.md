---
name: narrator-bleed
description: Eliminate narrator bleed — meta-commentary, framing, hedges, self-description, and interaction hints — from the surface of any user-facing artifact. Use this every time you create or revise anything a person will read or use outside the chat, including HTML pages, documents, briefings, one-pagers, cue cards, PDFs, slides, posters, dashboards, UI, printed sheets, or file deliverables of any kind, and run it as a final pass after any frontend-design or document-creation work. Also use it when the user says an artifact "sounds off," "has an outside voice," "reads like AI," calls surface text "graffiti" or "meta-commentary," or asks why the artifact is explaining itself.
---

# Narrator bleed

Bleed is surface text whose referent exists only because the artifact exists, and which carries no load.

## The machine

Run on every rendered text node, after content is complete, before delivery. Run silently.

- Step 0 — Name R. Write, as an explicit noun phrase, the entity this node predicates something about or directs action toward. Do not proceed with R unnamed.
- Q1 — World test. If the artifact had never been made, would R exist? Yes: subject text, done. No: go to Q2.
- Q2 — Load test. Delete the node. Can a reader still (a) reach every subject fact in the artifact and (b) operate every control? Yes: bleed — apply a disposition. No: load-bearing — go to Q3.
- Q3 — Form transfer. Can the load move into form — a glyph, layout, position, convention, or a control label of one or two words? Yes: move it, then delete the node. No: keep the minimal wording that carries the load; any wording beyond minimal is bleed.

## Dispositions

- D1: Delete.
- D2: If the node states a genuine caveat or provenance fact, move it verbatim to the chat message, then delete it from the surface.

## Derived results

These are outputs of the machine, recorded to prevent re-running them, not exceptions to it. Titles and headings: R is the artifact, but identification and navigation are load; Q3 keeps them minimal. Legends, axis labels, units, table headers: decoding load; kept minimal. Signature and byline lines in genres that authenticate (letters, memos, forms): authentication load. A one-or-two-word verb on a control: that label is the control's form, not text about it.

## Calibration set

Fixed at five rows. A new hard case replaces the least informative row; the set never grows.

| node | R | Q1 | Q2 | verdict |
|---|---|---|---|---|
| "23 readers operate across the metro" | the readers | exists | — | subject |
| "ten-minute read" | the act of reading this artifact | artifact-only | nothing lost | bleed, D1 |
| "not legal advice" | this artifact's content | artifact-only | nothing lost | bleed, D2 |
| "amber = high attention" | this chart's encoding | artifact-only | decoding lost | load-bearing, keep minimal |
| "tap a topic to open it" | this card's control | artifact-only | operation lost | Q3: glyph carries it, delete |

## Failure protocol

When a verdict is disputed or a case slips through, the defect is in Step 0 or Q2: re-run with R written explicitly and the load named. If the machine still gives the wrong verdict, amend a question so it generalizes. Never fix a failure by appending an example, a keyword, or a pattern.

## Standing rules

- S1: Do not annotate the artifact, in comments or visible text, about anything removed, and do not mention this pass.
- S2: Do not treat the user's silence about surface text as approval. Never cite an uncorrected instance as precedent for producing another.
