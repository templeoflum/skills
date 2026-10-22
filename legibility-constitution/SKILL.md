---
name: legibility-constitution
description: Enforce the legibility constitution — the binary, evidence-grounded rules for how cognitive-, sensory-, and neurodivergent-friendly surfaces are built and laid out (motion, scroll, pinning, voice, presentation, encoding, typography). Use every time you create or revise an interactive artifact, card or rail UI, reference sheet, dashboard, or printed surface, and run it as a final pass alongside narrator-bleed. Also use when the user says a surface "reads dense," "moves wrong," "jumps," "isn't legible," "lost the feel," or asks why a rebuild came out denser than the original.
---

# Legibility constitution

A surface is legible when meaning is reachable with the least working-memory, sensory, and motion load, and nothing forces a double-back. Every gate below returns PASS or FAIL for a stated reason — never "consider." The goal is one line: **extremely neurodivergent-, cognitive-, sensory-, and disability-friendly surfaces.** When two gates conflict, the one that lowers load wins.

Evidence tier on each gate: **[ev]** peer-reviewed / seminal · **[std]** W3C/WCAG standard · **[conv]** our convention, kept because it works, not claimed as science. Claim [ev]/[std] as fact; never claim [conv] as science.

## The gates

Run every gate on every surface, after content is complete, before delivery. Each is independent and binary. A surface ships only when all in-scope gates PASS.

**Motion & stability**
- **G1 Isolation** — On any expand/open/select, exactly one element changes: the one acted on. FAIL if any other element changes position. [ev: object constancy; layout-shift harm]
- **G2 Continuity** — Every transition is a FLIP-smoothed move of a *persistent* element (its own position/size/opacity), completing under ~400 ms. FAIL on an instant jump, a reflow-snap, or two elements animating against each other. [ev: Heer & Robertson 2007; Doherty 1982]
- **G3 Motion floor** — `@media (prefers-reduced-motion: reduce)` disables all non-essential motion. FAIL if absent. [std: WCAG 2.3.3]
- **G4 No shift** — Zero unexpected layout shift on interaction; footprints are fixed and opened slots are spacer-held. FAIL if any content moves under the reader/pointer. [ev: CLS]

**Scroll & containment**
- **G5 Contained scroll** — Each scrollable pane owns its scroll (`min-height:0` on the flex/grid parents) instead of growing the page. FAIL if a pane's overflow scrolls the page. [conv/impl]
- **G6 Gesture lock** — The mobile lock is present verbatim: html/body `overflow:hidden` + `overscroll-behavior:none`; inner scroller `overscroll-behavior:contain`; `touch-action:none` on draggables; a non-passive `touchmove` `preventDefault` while a drag is live. FAIL if any clause is missing. [conv/impl]

**Pinning & persistence**
- **G7 No double-back** — Anything a user would re-derive is visible without an action: group markers, navigation, the context/questions zone. FAIL if reaching a fact requires selecting something first. [ev: information foraging; COGA "don't rely on memory"]
- **G8 Persistent grouping** — Group and identity markers are always-on, not selection-gated. FAIL if grouping appears only on select/hover. [ev: predictability; foraging]
- **G9 Coordination** — Where a relationship exists, acting on one element updates or highlights its related elements. FAIL if a known link leaves related elements unchanged, forcing the user to hold the linkage in memory. [ev: coordinated views; North & Shneiderman 2000]

**Voice — how sentences are built**
- **G10 Chip line** — Every surface leads with a chip/eyebrow naming what it is. FAIL if absent. [conv]
- **G11 One idea per line** — On a rail card, each say-line is a single idea, one line, ≤ ~10 words, no paragraph. FAIL on a prose block in a card. [conv, grounded in Cowan + plain-language]
- **G12 Sentence cap** — In sheets, average sentence ≤ 20 words and none ≥ 30 (warn at ≥ 25). FAIL if the average exceeds 20 or any sentence hits 30. [ev: plain-language]
- **G13 Bold anchor** — Every scannable row bolds the noun you scan for and leaves the rest prose. FAIL on an un-anchored scannable row. [ev: Mayer signaling]
- **G14 No bleed** — Run the narrator-bleed machine. FAIL if it does. [cross-ref: narrator-bleed]

**Presentation — how surfaces lay out**
- **G15 The spine** — Order is chip → title → hairline rule → body, on every sheet and card. FAIL if out of order or a member is missing. [conv]
- **G16 Fixed footprint** — Cards hold a fixed footprint: fixed-height rows, title clamped to ≤ 2 lines, so the grid never reflows on interaction. FAIL on variable-height reflow. [conv/impl; grounds G4]
- **G17 Progressive disclosure** — Detail is earned: collapsed shows the gist, interaction reveals the rest. FAIL if a surface dumps all detail at once. [ev: Mayer segmenting; Nielsen]

**Encoding & color — checkable from multiple angles**
- **G18 Redundant encoding** — Every meaning-bearing distinction is carried by ≥ 2 channels, at least one non-color (shape, position, label, weight). FAIL on color-only. [std: WCAG 1.4.1, Level A; ev: redundancy gain]
- **G19 Icon + label** — Every symbol carries a nearby text label unless it is concrete AND familiar AND low-semantic-distance. FAIL on a bare abstract glyph standing alone for meaning. [ev: icon-comprehension research]
- **G20 Contrast** — Non-text/meaning distinctions meet ≥ 3:1 contrast. FAIL below. [std: WCAG 1.4.11]

**Typography & reading**
- **G21 Measure** — Prose measure is 45–75 characters per line (`max-width: ~66ch`); narrower for known struggling-reader contexts. FAIL above ~75 or below ~45. [ev]
- **G22 Font** — Body is a clean sans-serif system font at adequate size, ragged-right (not justified), no long italic passages, and NOT a special "dyslexia font." FAIL on a dyslexia font, justified body, or long italic run. [ev: Rello & Baeza-Yates 2013; dyslexia-font debunking]

**Grouping counts**
- **G23 Group cap** — An instantly-graspable group holds ≤ 4 items; nested disclosure is ≤ 3 levels deep (broad-shallow). FAIL above 4 in a glance-group or above 3 in depth. Triads are the aesthetic default *within* the cap, not the cap itself. [ev: subitizing ~4; Cowan; Larson & Czerwinski 1998 — the literal "three" is [conv]]

**Links & output**
- **G24 New-tab** — Every external link opens a new tab (`target=_blank rel=noopener` + a delegated opener). FAIL if any navigates away. [conv/impl]
- **G25 Print scope** — Print outputs the active document only. FAIL on whole-app print. [conv/impl]

## Scope

Which gates bind which surface, and where density is permitted.

| Surface | Binds | Relaxation |
|---|---|---|
| **Rail cards** (the deck) | all, strictest | none — G11 and G16 are hardest here |
| **Deep sheets** (docs) | all | short paragraphs allowed under G12; still no walls |
| **Tables** | all layout/motion/encoding | G11 relaxes to one-idea-per-*cell*; cells stay phrase-length; every row still leads with its mark (G13, G18) |
| **The working chat** | none of G10–G23 | the one density-exempt surface — full prose, thinking-out-loud lives here, never on an artifact |

Density is a property of the surface, not the content. The same fact is one line on a card, a short paragraph in a sheet, and full prose in chat.

## Dispositions

- **D1** — On FAIL, fix the surface to PASS. Do not ship a known FAIL.
- **D2** — If a gate's content genuinely cannot meet the threshold (e.g., an irreducible term longer than the measure), record the exception in the chat message with its reason; never annotate the artifact about it.

## The build-checkable subset

These gates are machine-verifiable and are non-negotiable lint gates: **G3** (`prefers-reduced-motion` block present) · **G4** (CLS ≈ 0 on disclosure) · **G6** (gesture-lock clauses present) · **G12** (sentence linter: warn ≥ 25, fail ≥ 30) · **G18** (no color-only distinction) · **G20** (≥ 3:1 non-text contrast) · **G21** (`max-width` ≤ 75ch) · **G22** (font family is system sans, not a dyslexia font; no `text-align: justify` on body) · **G24** (`target=_blank rel=noopener` on external links). Wire these into the build; the rest are read-and-verify.

## Standing rules swept in

Rules that governed the work but were not written in the handoff README §7–8 or the garden trace. They live here under their own heading:

- **SW1 Draft-before-edit** — Content changes are drafted for approval before they are applied; direct factual corrections and commissioned features execute immediately, each with a change-ledger line. Judgment calls are flagged for veto, never made silently.
- **SW2 Thought-garden format** — Session/project state is captured as a thought garden in the fixed node/cue template (seed/fill/unlock/correction/open/substrate; yup/good/hold/slow/nope/prune), resumable by pasting the snapshot back and continuing from the LIVE EDGES, honoring prune/nope marks.
- (Already written elsewhere, do not duplicate: verify-or-omit, revision hygiene, table-neutral register, solution-oriented stance — README §7–8.)

## Calibration set

Fixed at six rows. A new hard case replaces the least informative row; the set never grows.

| surface node | gate | reason | verdict |
|---|---|---|---|
| a rail card holding a two-sentence paragraph | G11 | idea-per-line broken | FAIL → compress to say-lines |
| tapping a card slides its five neighbors | G1 | non-acted element moved | FAIL → lift as overlay, spacer-hold the slot |
| status shown only by red vs. green fill | G18 | color-only distinction | FAIL → add a shape or label |
| a lone abstract glyph meaning "verified," no label | G19 | high-semantic-distance icon alone | FAIL → add text, or use it only as reinforcement |
| body copy set justified at 110ch | G21, G22 | over-measure + justified | FAIL → 66ch, ragged-right |
| dense full-prose reasoning in the chat reply | scope | working chat is exempt | PASS |

## Failure protocol

When a verdict is disputed or a case slips through, the defect is in a **threshold** or in **scope**: re-run with the surface-type named and the gate number cited. If the machine still gives the wrong verdict, amend that gate's threshold or its scope row so it generalizes. Never fix a failure by appending an example, a keyword, or a pattern — the gate must carry the case, not a list.

## Standing rules

- **S1** — Do not annotate the artifact, in comments or visible text, about any gate applied, and do not mention this pass.
- **S2** — Do not treat the user's silence about a surface as approval, and never cite an uncorrected FAIL as precedent for producing another.
- **S3** — The working chat is the only density-exempt surface. Prose belongs there; it never migrates onto an artifact.
