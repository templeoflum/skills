# JSON export

Use only when a machine-readable tree is requested. The outline remains sufficient for ordinary use.

# Sorting a set

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
    "rel": "part",
    "children": []
  },
  "residue": {"name": "", "items": [], "n": 0, "reason": ""}
}
```

- **Nodes:** Each has a unique `id`, a `name`, and either `children` or item membership.
- **Branches:** Supply `cut`, `rel` and at least two `children`; their membership comes from descendants.
- **Leaves:** Supply `items`, an observable `done` test, and `size` in the declared grain.
- **Root:** Also supply `grain` and the whole's `done` test, even if it is a leaf.

```json
{
  "id": "leaf-id",
  "name": "",
  "items": [],
  "done": "",
  "size": 1
}
```

**Holds** is supplied by membership for a set; no contract object is needed.
An explicit `contract: {"holds": "..."}` is also accepted on any node.
Every part must hold something, and every end must have a done-test (K1).
Do not add hides, takes, gives, refuses or agreement fields to a set export.
Set refusals route to another part or the named residue through membership accounting.

**Compatibility:** A leaf may instead wrap `items`, `done`, `size` and optional `count` inside `leaf`.
Use either direct fields or the wrapper, not both; this preserves earlier exports.
**Items** contain original item names or stable record IDs, each at one leaf only.
**Size** counts the declared grains; it need not equal the item count if the grain differs.
**Count** is optional on a leaf, beside its items:

```json
{
  "count": {
    "target": 2,
    "cells": [{"cell": "", "n": 0, "why": ""}]
  }
}
```

Each named cell has its own observed count and shortfall reason.
**See** optionally lists existing node IDs for alternate homes; explain the link's meaning when needed.
**Residue** lists items held out of the placed tree; its `n` equals the list length.
Empty lists stay empty. Do not fill them with the string `none`.

# When the tree divides a working system

Add this layer only when parts pass things between them.
Each node then has a contract with Holds, Hides, Takes, Gives and Refuses:

```json
{
  "contract": {
    "holds": "",
    "hides": "",
    "takes": [],
    "gives": [],
    "refuses": [],
    "agreed": {"by": "", "on": ""}
  }
}
```

**Refusals** use `{"what": "", "goes_to": "node-id", "reason": ""}`.
For `goes_to: "none"`, provide a reason. Otherwise the home must exist and differ from the refusing node.
**Agreement** names the keeper in `by` and the agreement date in `on`.
Omit it if unknown and report K4 WARN; never fabricate agreement.
**Flows** appear at tree level as `{"from": "node-id", "to": "outside", "signal": ""}` records in `flows`.
Either endpoint can be `outside`; internal endpoints must exist and list the signal in their contracts.
**Slices** appear at tree level as `{"id": "slice-id", "name": "", "leaves": ["leaf-id"]}` records in `slices`.
Each selected leaf must give something through a flow with a destination.

**Scope:** A nonempty flow or slice list activates system checks for the whole tree.
Any contract field beyond Holds also activates them, even if empty or on a descendant.
Absent or empty flow and slice lists alone do not activate them.
Without a system layer, H2, P1, K2–K5 and T1 are N/A because this is a set tree.
K1 checks Holds or membership and done-tests; takes, gives and refuses belong to the system checks.
