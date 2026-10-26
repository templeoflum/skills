# The blueprint standard

A blueprint is paper drawings of a thing that show what it is, how it's made and where each decision stands. The Bench has one (`workbench/blueprint/`), and every card can have its own (the card's Attachments → Blueprint). Both follow this standard. It is written from what the Bench blueprint already does (25 Oct 2026), so any card's blueprint reads the same way the Bench's does.

## Sheets

- **Landscape, 1500 × 1000 (3:2).** The viewer shows each sheet whole, fitted to its pane and centred, the same for the Bench and a card. Nothing scrolls inside a sheet.
- **Type floor.** Nothing is under 16 sheet units, which is 12 px on his screen. Body text is 20 or more. The title is 24–26 and bold at the top left, with a one-line description at 20 under it. The floor applies to words inside a drawn view too.
- **Too much for one sheet:** split it into `<code> · n of N` sheets. Never shrink the type.
- **Drawn clean.** Straight lines, square corners, even spacing, system type, no hand-drawn wobble. Paper is `#fbfaf6`, labels `#4a5158`, grey ink `#8d949b` for what stands, and blue ink `#1f5fd6` for the point of the sheet or what's proposed.
- **Low fidelity** means little detail, not rough lines: boxes, short labels, and one line on what changed.
- Each sheet is an `.svg` (and a `.png` at 2× where one is kept), plus an **`.md` beside it**.

## The title line

`<code> · <name> · rev N · <state>`, with ` · n of N` when the sheet is split. The viewer's Index reads the code, name, revision and state from it, so every sheet carries all four.

## The Index

- **Sheet 00 is the Index:** a table with No., Sheet, Files, State, and Rev or What it holds, one row per sheet. A footnote says what each state means.
- **In the viewer,** the Index lists one row per sheet, grouped by set, with its pages as numbers and its revision and state as a word in a light colour.

## States

Each state is a fixed word. On paper it's a word in a box, and in the Index it's a word in a light colour.

| State | When | Paper | Index |
|---|---|---|---|
| As built | The Bench: drawn from the live code and re-measured | blue box | green |
| Built, not re-measured | The Bench: on the bench, but the drawing isn't checked against the code | blue box | light blue |
| To build | The Bench: approved, not yet built | — | — |
| Signed off | His sign-off stands on the newest revision (the sign-off record, not marks) | green box | green |
| Change asked | A card: his Change stands on the newest revision | orange box | amber |
| Awaiting sign-off | Nobody has signed the newest revision | amber box | amber |
| **Parked** | Set aside, kept as drawn | **red dashed box** | **red, dashed** |

**Parked is always red, like a stoplight.** Red means parked and nothing else, on any sheet or in any index. A sheet's state comes only from his sign-off and his marks, never from the studio's opinion.

## Revisions

- **A redrawn sheet keeps its earlier revision.** On the Bench it goes in `archive/<sheet>-rev<n>`. On a card, the earlier revision stays as the file it was, and the sheet names that file.
- **Each sheet lists its own revisions,** newest first: what changed, when, and the marks he made on each.

## Sign-off

Sign-off records that a blueprint is approved. It is its own thing, kept apart from marks: Works / Change / Cut still judge work, and a Works is not a sign-off. Old marks are never turned into sign-offs.

- **The block.** Every sheet carries a sign-off block in a fixed corner, like the title block on a drawing: 536 × 136 at 940, 840. Nothing else is drawn there. The top row has the code and name, then the newest rev and its state. Under it are the revisions, newest first, three shown, each with Rev, Drawn by, Drawn, Signed off by and Signed. Older revisions are listed in the sheet's md. A sheet nobody has signed says **Not signed** plainly.
- **Who drew it** comes from the sheet's own entry: `by` (the seat, named by role), `at`, and `history` (`[{rev, by, at}]`) for older revisions. On a card that entry is in `sheets.json` and `card.json`. On the Bench it is `blueprint/drawn.json`, keyed by sheet code. With no entry, the date comes from git and the seat reads "not recorded".
- **Who signed and when** comes only from `signoffs.jsonl` beside the blueprint. It has one line per sign-off, added to the end and never edited:
  `{"sheet": "03r", "rev": 5, "signed": true, "by": "Hedawn", "at": "2026-10-26T07:00:00Z"}`
  Taking one back is a line too: `"signed": null, "clears": true`.
- **Only Hedawn signs.** In the blueprint viewer, Sign off · rev N is its own key in the viewer's head, away from Works · Change · Cut. It is pressed, never a letter key. It signs the sheet in front at its newest rev, and every page of it (n of N). On a signed sheet the same key reads Take back. It shows on the Bench and on a card's Blueprint, not on References.
- **A sheet with no rev can't be signed.** Its title line must carry `rev N` first; until then its block says "no rev" and there is no key.
- **A new rev starts Not signed.** Earlier revisions keep their sign-off.
- **The viewer draws the block live** from the record, so a sign-off shows at once with no redraw. The renderer prints the same block when a sheet is redrawn (`render/soblock.py`, class `signoff-block`).
- **Nothing drawn is covered.** The viewer puts the block in the corner only when the sheet prints it there, or the corner was measured clear (`"corner": "clear"` in its entry). On any other sheet the block shows under the sheet, at the right, until the sheet is redrawn as a new rev with the corner clear.

## Sources

- **Every piece on a sheet has a named source:** a file and line, a record and its version, or a mark line with its time. The md beside the sheet lists them all, and a card sheet also prints them in a Sources box.
- **Nothing goes on a sheet that the record doesn't hold.** Material he hasn't seen is never drawn as settled.

## Marks

- **Marks stay on what he marked.** A sheet that restates a decision names the work and versions its marks were made on (`was`), and the viewer shows those marks and notes on the sheet's row and above the sheet. Marks files are read, never edited.

## Where things live

- **The Bench:** `workbench/blueprint/`, with `specs/` (the set, desk copies in `specs/desk/`), `sheets/` (the bench as it stands, in grey), `ideas/<name>/` (a new idea, in blue over grey), `archive/` and `refs/`. The interface designer owns it, the engineer redraws `sheets/` in the same PR as a build, and the OM gates each move.
- **A card:** the card's records folder, `cards/<id>/blueprint/`, with a renderer beside the sheets so they can be redrawn from the record. The card's `card.json` lists them in `blueprint`, in order, each with `file`, `code`, `title` (the title line, without the code), `set` and, if it restates marked work, `was`. Reference material that isn't the card's own design goes in `references`, not the blueprint.

## The viewer

- **A card's blueprint opens in the card window** from Attachments → Blueprint, with the Index on its left. Its side pane stays fully usable while it's open.
- **Keys:** PageUp and PageDown step through the sheets, and Esc or ‹ Back shuts the viewer and returns focus to the row that opened it.

## Checks before it's shown

- Every font size on every sheet is 16 or more.
- Every sheet is 1500 × 1000.
- Every title line has a code, a name, a revision and a state.
- Every sheet has its md.
- Every sheet keeps the sign-off corner clear, and its block reads from the record.
- The viewer opens each sheet whole at his window, with no errors.
