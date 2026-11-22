---
name: grain-tree
description: Sort, split, organize or classify a set or a purpose into a tree. Use when parts need clear boundaries, one organizing question per split, explicit grain, and a checkable place for every item.
---

# Blank generic template

```text
Whole: ___ · ___ items
  Done when: ___
  Grain: ___
  Target per cell: ___
  Cut: ___? · relation: ___
  Branch: ___ · ___ items · cut: ___? · relation: ___
    Leaf: ___ · ___ items · ___; ___; ___
    Leaf: ___ · ___ items · ___; ___; ___
  Branch: ___ · ___ items · cut: ___? · relation: ___
    Leaf: ___ · ___ items · ___; ___; ___
    Leaf: ___ · ___ items · ___; ___; ___
Residue: ___ · ___ items · reason: ___
```

**Parts** repeat at each level; a branch has children and a leaf has none.
Use one line per node, with children indented below their parent.
A whole can itself be a leaf. Add only the levels the set needs.
**Leaves** show their count and up to three example names, not every field or every item.
**Done** means every assigned item satisfies its ancestor cuts and appears once; the displayed count matches its membership.
Add another observable leaf test only when the whole's done-test needs it.
**Holds** is implicit: a part holds its items. Refusals go to a sibling or to the named residue.
For a sort of a set, write no other contract lines, flows, slices or empty system fields.

**Grain** is the declared unit; leaf size is its count in grains.
If item count differs from grain size, add the size beside the count.
**Cells** are the leaves unless finer cells are named. A declared target applies separately to every cell.
For counted cells, choose a target of at least two; omit the target when no cells are being sampled.
Put each shortfall reason beside its cell. Never pool counts to conceal a shortfall.
**See** adds a reference beside a second home, pointing to the primary placement by unique path or ID.
A See link never adds another item. Keep full memberships available for counting and checking.
**Residue** is named and counted even when zero; list unresolved items and reasons when it is nonempty.

# When the tree divides a working system

Use this layer only when the purpose's parts pass things between them.
Keep the compact tree; add system details beside the relevant part when needed.

```text
Part: ___
  Contract: holds ___; hides ___; takes ___; gives ___
  Refuses: ___ → ___; reason: ___
  Keeper: ___; agreed on: ___
Flow: ___ → ___ · signal: ___
Slice: ___ · leaf IDs: ___
```

**Hides** names the decision made inside the boundary; siblings hide different decisions.
**Takes** and **Gives** name signals crossing it. List each signal at both endpoints and in its flow.
**Refusals** name an existing home, or `none` with a reason when the system has no destination.
**Keeper** names who maintains the agreement. Never invent a person's agreement or its date.
If either is unknown, report K4 WARN; do not repeat empty agreement lines across the tree.
**Flows** name giver, receiver and signal; either endpoint may be `outside`.
Name the keeper at the nearest branch shared by linked parts.
**Slices** name the leaves that join into one thing; each gives something through a flow with a destination.
Omit unused flows and slices. A missing required boundary or endpoint is a failure, not an empty-field placeholder.

# Growing a tree

1. **Name the whole.** Say what counts as done.
2. **Declare the grain.** State the smallest unit this tree resolves, and measure every leaf in it.
3. **Choose one cut.** Write one question and name two to four answers as children.
   Declare its relation: **kind** (types), **instance** (members), or **part** (components).
4. **Group wider branches.** Give a real shared name to the chunk, then cut again.
   Preserve an authoritative classification if grouping would distort it; report C1 instead.
5. **Stop at an elementary part.** Give each leaf a done-test and a positive whole-number size in grains.
   A resolved group can be a leaf; its size counts all its grains. Use the shared leaf test where sufficient.
6. **Draw each boundary.** In a set, each part holds its items; route refusals to a sibling or residue.
   For a working system, also state hides, takes, gives, refusals, keeper and agreement date.
7. **List each system flow at both ends.** Match its signal to the giver's Gives and receiver's Takes.
   Compare internal and crossing links. Name the keeper at their nearest shared branch. Skip this for a set.
8. **Set counted-cell targets.** Use a target of at least two in each cell, and explain each shortfall.
   A target is per cell, never a total pooled across cells.
9. **Join system leaves when needed.** Name a slice by its leaf IDs.
   Every included leaf must give something through a flow with a destination. Skip this for a set.

# Sorting a set into it

1. **Fix the input.** Keep each supplied item name or ID unchanged; count the input before sorting.
   Distinguish separate records that share a name with stable IDs.
2. **Find the organizing question.** Prefer a supplied authority's categories and version when classification has an external standard.
   Otherwise state the criterion that makes the split useful for this set or purpose.
3. **Place each item once.** Follow each cut from the whole to one leaf.
   Recut when answers overlap in meaning or mix relations.
4. **Link second homes.** Choose one primary placement and put a See link at the other location.
   Say what that link connects. A link contributes no extra item or grain.
5. **Name the residue.** List and count unresolved or out-of-scope items, with reasons.
   Keep them outside the placed tree until resolved. Do not force a guess to hide residue.
6. **Reconcile the counts.** Placed items plus residue must equal the input, without overlap or duplication.
   Count each branch from its descendants. Check each counted cell separately.
7. **Return the compact tree.** Show residue and the short rule check after it.
   For a large tree, show the whole and its first cut first; expand one named part at a time.
   Keep all item placements available in the full membership list or an accompanying export.

Plain text is sufficient; no script is needed to grow, sort or check a tree.
Use [format.md](format.md) only when a full machine-readable export is explicitly requested.
That detailed export schema does not determine the compact chat presentation.

# Checking the tree

Report only **FAIL** and **WARN** lines, each naming the affected path or ID and its reason.
Then write one **PASS** line naming the rules that pass, and one **N/A** line naming inapplicable rules with their reasons.
Fix failures before returning a finished tree. Keep unsupported placements in the residue.
Apply system-only rules only when the optional system layer is in use.

- **G1 · fail:** The root declares its grain.
- **G2 · fail:** A counted leaf targets at least two per cell; every cell below target says why.
- **G3 · warn:** Leaves have equal sizes in the declared grain; invalid or nonpositive grain counts fail.
- **C1 · warn:** A branch has about four parts; group larger cuts without inventing a false relation.
- **H1 · fail:** Each branch has at least two parts; every end is a leaf; stop at the elementary part.
- **H2 · system only · warn:** Links inside a part outnumber links across it; compare where links exist.
- **F1 · fail:** Each cut asks one question, answered consistently by its children.
- **F2 · fail:** Each cut uses one relation: kind, instance or part.
- **F3 · fail:** Siblings differ in meaning and name.
- **F4 · fail/warn:** Fail broken or self See links and copied items; warn on repeated concepts needing a See link.
- **P1 · system only · fail/warn:** Fail a missing hidden decision; warn when siblings hide the same decision.
- **K1 · fail/warn:** Fail empty Holds or missing done-tests; warn if a done-test only repeats its name; set membership supplies Holds.
- **K2 · system only · fail/warn:** Fail flows absent from either endpoint's contract; warn on Takes or Gives without a corresponding flow.
- **K3 · system only · fail/warn:** Fail refusals without a home, or `none` without a reason; warn on contracts refusing nothing.
- **K4 · system only · warn:** Every contract names its keeper and agreement date; a malformed claimed agreement fails.
- **K5 · system only · warn:** Each link between parts has a keeper at their nearest shared branch.
- **T1 · system only · fail:** A slice joins only leaves that give something through a flow to a destination.

Also check **coverage**: every input item occurs once in either a leaf or named residue; all counts reconcile.
For sets, check refusal routing through membership and residue accounting; do not add contract lines to prove it.
Check meanings as well as fields. A question mark cannot establish that a cut asks only one question.
Structural checks cannot decide whether categories overlap or whether the chosen grain is useful.

# Small worked example

Twelve stock types sorted by this kitchen's storage assignments. Each leaf is one counted cell.

```text
Kitchen stock · 12 items
  Done when: Each supplied type appears once in its assigned storage bin; all counts match.
  Grain: one stock type · target per cell: 2
  Cut: Where is it stored? · relation: part
  Cupboard · 6 · cut: Which cupboard bin? · relation: part
    Cereals · 3 · rice; oats; barley
    Pulses · 3 · lentils; chickpeas; kidney beans
  Fridge · 6 · cut: Which fridge bin? · relation: part
    Roots · 3 · carrot; beetroot; radish
    Greens · 3 · spinach; kale; rocket
Residue: Unplaced stock · 0 · all supplied types have a bin
Coverage: 12 placed + 0 residue = 12 input; each cell has 3 of target 2.
PASS: G1 G2 G3 C1 H1 F1 F2 F3 F4 K1 coverage.
N/A: P1 H2 K2 K3 K4 K5 T1; no working-system layer.
```

# Grounding

These sources motivate the rules. Their transfer to sorting is a design choice, not proof of sorting accuracy.

- **Sampling → G1, G2:** State resolution and inspect each cell; two is a chosen count floor, not a sampling guarantee for categories. Source: [Shannon 1948, §19, Theorem 13](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x), band-limited signals.
- **Chunking → C1:** Use about four visible parts as a warning, by analogy with memory chunks. Sources: [Cowan 2001, abstract](https://doi.org/10.1017/S0140525X01003922); [Miller 1956](https://doi.org/10.1037/h0043158).
- **Hierarchy → H1, H2:** Divide to elementary subsystems and prefer stronger internal links. Source: Simon 1962, “The Architecture of Complexity,” Proceedings of the American Philosophical Society 106(6), 467–482.
- **Facets → F1–F4:** Separate relation types, name division principles, and record multiple homes. Source: ANSI/NISO Z39.19-2005 (R2010), §§8.3, 8.3.4–8.3.5.
- **Scale → G3:** Keep terminal sizes comparable; biological terminals and scale-dependent measurement motivate this analogy. Sources: [West, Brown & Enquist 1997, abstract](https://doi.org/10.1126/science.276.5309.122); [Mandelbrot 1967, abstract](https://doi.org/10.1126/science.156.3775.636).
- **Information hiding → P1:** Keep a changeable decision inside each boundary. Source: [Parnas 1972](https://doi.org/10.1145/361598.361623), “On the Criteria To Be Used in Decomposing Systems into Modules.”
- **Institutional facts → K1:** Specify what counts as a part and what counts as done. Sources: Searle 2010, Making the Social World, quoted in SEP “Social Institutions”; [Searle 2006](https://doi.org/10.1177/1463499606061731).
- **Convention → K2:** Make expectations at both flow endpoints explicit. Source: Lewis 1969, Convention, p. 76, quoted in SEP “Convention”; endpoint bookkeeping is the design inference.
- **Common-pool rules → K3–K5:** Give boundaries, agreement and disputes a local home, by analogy. Source: [Ostrom 2010](https://doi.org/10.1257/aer.100.3.641), principles 1A, 3 and 6.
- **Recombination → T1:** Join bounded outputs through explicit destinations, by analogy with enveloped sound grains. Source: [Truax 1988](https://doi.org/10.2307/3679938), “Granulation of Sampled Sound,” and the author's account.
