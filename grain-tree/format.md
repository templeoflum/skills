# Tree JSON

Use grain tree format 4 inside the supplied view.html's `tree-data` script element.
The HTML page is the deliverable. The JSON remains available through Copy JSON.

```json
{
  "grain_tree": 4,
  "title": "",
  "root": {
    "id": "whole",
    "name": "",
    "done": "",
    "grain": "",
    "cut": "",
    "rel": "kind",
    "contract": {
      "holds": "",
      "hides": "",
      "takes": [],
      "gives": [],
      "refuses": [{"what": "", "goes_to": "none", "reason": ""}]
    },
    "children": []
  },
  "flows": [],
  "slices": [],
  "leaf_limit": 2,
  "cut_sequence": [{"question": "", "rel": "kind"}],
  "residue": {"name": "", "items": [], "n": 0, "reason": ""}
}
```

- **Nodes:** Every node has unique kebab-case `id`, nonempty `name` and a `contract`.
- **Root:** Also names the whole's `done` test and `grain`.
- **Branches:** Add `cut`, `rel` and at least two `children`; omit `leaf`.
- **Leaves:** Omit `children`; add a `leaf` record with `done`, `size` and complete `items`.

```json
{
  "id": "leaf-id",
  "name": "answer · 2 · first name, second name",
  "contract": {
    "holds": "the two items answering this cut",
    "hides": "membership of this answer",
    "takes": [],
    "gives": [],
    "refuses": [{"what": "an item answering differently", "goes_to": "parent-id"}]
  },
  "leaf": {
    "done": "All 2 are placed here once: first name; second name",
    "size": 2,
    "items": ["first name", "second name"]
  }
}
```

**Names:** Branches use `answer · count`; leaves append up to three representative names.
Every count comes from complete membership, never the number of visible examples.
**Cuts:** `cut` is one question ending in `?`; `rel` is exactly `kind`, `instance` or `part`.
**Contracts:** Supply Holds, Hides, Takes, Gives and Refuses at every node for the supplied device checker.
These are internal data; the page hides its contract and editing panels.
**Holds:** State the membership boundary. **Hides:** Name the membership decision specific to that node.
**Refusals:** Route to an existing different node, usually the parent, or to `none` with a reason.
**Keeper:** Optional `contract.agreed: {"by": "", "on": ""}` names the keeper and actual agreement date.
Omit unknown agreements and keep the K4 warning. Never invent agreement to make a badge disappear.
**Size:** A positive whole-number measurement in the root's grain; keep displayed membership count separate from terminal size.
The checker warns G3 when sizes differ. The source device can show equally sized terminal groups with different membership counts.
For a grain of one input item, size equals membership count; do not report one for a group of several items.
**Items:** Preserve every original name or record ID once, across leaves and residue.
The device uses the name and done-test; `leaf.items` adds explicit membership for exact scoring.
**Count:** Optional `leaf.count` contains `target` (at least two) and `cells`.
Each cell is `{"cell": "", "n": 0, "why": ""}`; any cell below target needs its own reason.
**See:** Optional node-level `see` lists existing IDs for second homes; it never duplicates membership.
**Flows:** Tree-level `flows` records use `{"from": "node-id", "to": "outside", "signal": ""}`.
Either endpoint may be `outside`; both internal endpoints list the signal in Gives or Takes respectively.
**Slices:** Tree-level `slices` records use `{"id": "slice-id", "name": "", "leaves": ["leaf-id"]}`.
Every included leaf gives something through a flow with a destination.
**Limits:** `leaf_limit` and ordered `cut_sequence` record the sorting choices; the runtime does not invent or apply cuts.
**Residue:** Named, counted unresolved items stay separate; a “No family found” branch can instead hold and subdivide them.
The checker reads neither this bookkeeping nor membership lists; reconcile them independently.

# Page slot

Replace only `null` in `<script type="application/json" id="tree-data">null</script>` with the complete tree object.
Escape `<` as `\u003c` inside that JSON. Preserve the rest of view.html.
The page loads its root and first level, unfolds one level per press, shows the embedded checker and supports Copy JSON.
All checker errors must be fixed before delivery; warnings remain visible.
Older JSON-only set exports remain readable by the scorer, but are not the page format the device requires.
