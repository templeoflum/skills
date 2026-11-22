---
name: grain-tree
description: Sort, split, organize or classify a set or a purpose into an interactive grain tree. Use when the result should be a single HTML page with bounded groups, expandable branches, checker badges, law tips and Copy JSON.
---

# Grow the tree

Return a finished HTML page using [view.html](view.html). Use [format.md](format.md) for its embedded JSON.
The page is the output; a text outline or JSON alone is not the deliverable.

1. **Fix the input.** Preserve original item names or stable record IDs and count the set before sorting.
2. **Name the whole.** Declare its grain and an observable done-test: every supplied item accounted for once.
3. **Declare the first cut.** Ask one question that gives about four meaningful groups, using kind, instance or part.
   Keep a supplied outside authority's categories and version, even when it has five or more groups.
   Declare precedence for overlapping answers and record See links; never let input order decide membership.
4. **Declare a leaf limit.** Use a small enough limit that substantial first-cut groups divide again.
   For a starting value, use `min(40, max(2, ceil(item_count / 8)))`; adjust to the actual distribution.
   Forty fits a large library; it usually leaves a small set too shallow. Twelve items might use two; fifty might use seven.
   This is a display choice, not a law. Never invent divisions just to add depth.
5. **Declare the later cuts in order.** Each has one question, one relation and deterministic answer criteria.
   For example: origin period → medium → decade → visual character, when those distinctions fit the set.
   For an outside classification, use its next rank before introducing another cut.
6. **Split each group over the limit.** Try the next unused cut in that sequence that actually divides its membership.
   Skip a cut if it gives fewer than two nonempty answers. Recurse on each answer until leaves fit.
   Do not reuse a cut along one path. If the sequence runs out, add a meaningful cut or record the oversize limit openly.
7. **Name and count every part.** Branch names are `answer · count`; leaf names are `answer · count · three names`.
   Use up to three representative original names, chosen by a stated rule; alphabetical order is a useful default.
   Keep complete membership in `leaf.items` and the leaf's done-test. Counts exclude See links.
8. **Keep uncertain items visible.** Use a counted “No family found” branch and split it further where possible.
   Truly unresolved or out-of-scope items can remain in named, counted residue with reasons.
   Place each item once; point to a second home with See instead of copying it.
9. **Complete the internal records.** Use format 4 and the contract, done-test and size fields the device checker reads.
   These records stay inside the page; its editing and contract panels remain hidden.
   A refusal returns to the existing parent, or to `none` with a reason outside the whole.
   Give each part its own membership decision in Hides. Do not fabricate keeper agreements; accept K4 warnings if unknown.
10. **Check the result.** Reconcile input = placed + residue; check each cell against its own target when sampling.
    All branches must ask one question with one relation and have at least two distinct children.
    Run the supplied `grainCheck(tree)` in an available JavaScript runtime and fix every error (`l: "e"`).
    Keep genuine warnings; do not weaken the checker to erase them.
    Check semantic overlap, cut usefulness and the leaf limit separately; a structural checker cannot judge them.
11. **Return the page.** Put the finished tree JSON into the `tree-data` slot of view.html and return `tree.html`.
    Preserve the device, badges, fail/warn count, law tips, initial first-level view and one-level-per-press disclosure.
    Keep Copy JSON. Do not replace the device with a text tree or a newly designed viewer.

With Python, place the JSON in the empty slot:

```python
from pathlib import Path
import json
view = Path("grain-tree/view.html").read_text()
payload = json.dumps(tree, ensure_ascii=False).replace("<", "\\u003c")
page = view.replace('id="tree-data">null</script>', 'id="tree-data">' + payload + '</script>', 1)
Path("tree.html").write_text(page)
```

Without code execution, write out the supplied view.html with the complete JSON replacing only `null` in that slot.
Escape `<` in JSON strings as `\u003c` so an item name cannot close the script element.
Use the exact supplied runtime and styles. Do not claim its checker ran if execution was unavailable.

# Working systems

When parts actually pass things between them, list each flow's giver, receiver and signal.
Both contracts list that signal. Settle crossing links at their nearest shared branch's keeper.
A slice contains only leaves whose outputs have destinations. Omit unused flows and slices, or leave their lists empty.
These do not replace the bounded sorting procedure or change the visible tree format.

# Small worked example

Twelve real acoustic instrument types, first cut by sound family and then by first subdivision where over the limit.
The leaf limit is two. Example names follow input order; the full set is stored inside the JSON.
This is the JSON inserted into the supplied view, not a text-output template.

```json
{
  "grain_tree": 4,
  "title": "Acoustic instruments",
  "root": {
    "id": "whole",
    "name": "Acoustic instruments · 12",
    "done": "All twelve supplied types are placed once under their sound family; every leaf holds at most two types.",
    "grain": "one instrument type",
    "cut": "Which sound family is it in?",
    "rel": "kind",
    "contract": {"holds": "12 supplied types in the inventory", "hides": "membership of the inventory", "takes": [], "gives": [], "refuses": [{"what": "a type outside the supplied set", "goes_to": "none", "reason": "not in this inventory"}]},
    "children": [
      {
        "id": "idio",
        "name": "Idiophones · 4",
        "cut": "Which first subdivision applies?",
        "rel": "kind",
        "contract": {"holds": "4 supplied types in Idiophones", "hides": "membership of Idiophones", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "whole"}]},
        "children": [
          {
            "id": "struck",
            "name": "Struck · 2 · triangle, xylophone",
            "contract": {"holds": "2 supplied types in Struck", "hides": "membership of Struck", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "idio"}]},
            "leaf": {"done": "All 2 are placed here once: triangle; xylophone", "size": 2, "items": ["triangle", "xylophone"]}
          },
          {
            "id": "plucked",
            "name": "Plucked · 2 · jaw harp, musical box",
            "contract": {"holds": "2 supplied types in Plucked", "hides": "membership of Plucked", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "idio"}]},
            "leaf": {"done": "All 2 are placed here once: jaw harp; musical box", "size": 2, "items": ["jaw harp", "musical box"]}
          }
        ]
      },
      {
        "id": "mem",
        "name": "Membranophones · 4",
        "cut": "Which first subdivision applies?",
        "rel": "kind",
        "contract": {"holds": "4 supplied types in Membranophones", "hides": "membership of Membranophones", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "whole"}]},
        "children": [
          {
            "id": "drums",
            "name": "Struck drums · 2 · timpani, bass drum",
            "contract": {"holds": "2 supplied types in Struck drums", "hides": "membership of Struck drums", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "mem"}]},
            "leaf": {"done": "All 2 are placed here once: timpani; bass drum", "size": 2, "items": ["timpani", "bass drum"]}
          },
          {
            "id": "friction",
            "name": "Friction drums · 1 · cuica",
            "contract": {"holds": "1 supplied types in Friction drums", "hides": "membership of Friction drums", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "mem"}]},
            "leaf": {"done": "All 1 are placed here once: cuica", "size": 1, "items": ["cuica"]}
          },
          {
            "id": "singing",
            "name": "Singing membranes · 1 · kazoo",
            "contract": {"holds": "1 supplied types in Singing membranes", "hides": "membership of Singing membranes", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "mem"}]},
            "leaf": {"done": "All 1 are placed here once: kazoo", "size": 1, "items": ["kazoo"]}
          }
        ]
      },
      {
        "id": "strings",
        "name": "Chordophones · 2 · piano, violin",
        "contract": {"holds": "2 supplied types in Chordophones", "hides": "membership of Chordophones", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "whole"}]},
        "leaf": {"done": "All 2 are placed here once: piano; violin", "size": 2, "items": ["piano", "violin"]}
      },
      {
        "id": "air",
        "name": "Aerophones · 2 · accordion, flute",
        "contract": {"holds": "2 supplied types in Aerophones", "hides": "membership of Aerophones", "takes": [], "gives": [], "refuses": [{"what": "a type outside this part", "goes_to": "whole"}]},
        "leaf": {"done": "All 2 are placed here once: accordion; flute", "size": 2, "items": ["accordion", "flute"]}
      }
    ]
  },
  "flows": [],
  "slices": [],
  "leaf_limit": 2,
  "cut_sequence": [{"question": "Which first subdivision applies?", "rel": "kind"}],
  "residue": {"name": "Unplaced types", "items": [], "n": 0, "reason": "All supplied types have a family."}
}
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
