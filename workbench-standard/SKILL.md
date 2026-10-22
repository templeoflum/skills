---
name: workbench-standard
description: The workbench standard - the shape every project hands its work to the workbench in (projects, works, versions, formats, marks), the shared console's fixed design, and the sorting passes Hedawn marks in. Use when handing work to the workbench, setting up or running a project's bench, writing a project's works.json or marks, or changing the console.
---

# The workbench standard

Marked Works by Hedawn, 22 Oct 2026. The workbench shows work in one shape, so every project hands it over the same way. The workbench never learns a project's own process. The standard is drawn from what the MET∃OR VJ bench already did.

## Who owns what

- **The OM** holds this standard, together with the engineer and the auditor.
- **The shared console** is part of the standard.
- **Each project's PM** sets up and runs its own benches. A project can have several.
- **The OM never touches a bench.**

## Five things

- **Project.** A body of work with a name and its categories. It names the one folder its records live in.
- **Work.** One piece: a clip, a flyer concept, a room, a track. It has a stable id, a title, its bin (and sub-bin, if any) and its versions. Bins hold sub-bins as deep as the content needs, with no fixed number of levels; the project picks the categories, and the standard sets only this structure (after the Ableton Atlas, `live-atlas/DEVICES_MAP.md`). A work stays the same work for its whole life; new drafts never make a new work.
- **Version.** One take on a work, numbered 1, 2, 3, newest first. Each says in one line what changed, when, and where its file is. A new draft is a new version, and nothing else. Versions are stepped through inside the work's card, never shown as extra cards.
- **Format.** The same work in another shape (VJ: 16:9, 3:1, 6:1; flyers: story, feed, print). Each format of a version has its own file and its own output state.
- **Mark.** Works, Change or Cut, with an optional note, made by Hedawn. A mark names the work and the version it was made on. Marks pile up on a version; none replaces another.

## Notes are marks

Everything he has said about a work is that work's marks, in order. There is no separate notes store. A brief for the next version starts from the version he liked, plus every mark on the work. The newest note is the change.

## State

The bench derives each work's state from the marks on its newest version: any Cut → **Cut**; else a Change → **Needs change**; else a Works → **Nothing pending**; else **Needs sorting**. A new version starts at Needs sorting and answers every Change on the version before it. Unmark clears one mark on one version. Cut hides the work and deletes nothing. A PM makes no new version of a Cut work without his word.

## Output states

Each format of a work has one: Omitted, Pending, Not queued, Queued, Rendering, Failed, Rendered, On Drive.

## Records

All plain files in the project's folder. GitHub holds code only. The PM keeps the works up to date, so every handoff is the same. The workbench reads these files as they are.

- `works.json`: the project, its categories, and its works with their versions and formats.
- `marks.jsonl`: one line per mark, added to the end and never edited. Unmark is a line too: `"mark": null, "clears": "change"`.

```
{"work": "kit-loop", "version": 4, "mark": "change", "note": "…", "at": "2026-10-21T12:42:00Z", "by": "Hedawn"}
```

Views (the console now, other views later) read only this shape and never know which project they show.

## The console

- **Fixed:** the control panel and the side scroller (the four-slot window) stay the same whatever is reviewed. A project changes only its keys, in its profile.
- **Cards** show in the side scroller, one card per work. The card list has a set height; it filters and scrolls, and keeps its place in each bin. A card can be video, text, code, an image and more; the screen loads the card module that matches its type.
- **Pass filters** (Needs sorting, Nothing pending, Needs change, Cut) are symbols with their counts.
- **Bin buttons** stay fixed, with a bin's sub-bins inside it. Nothing expands or collapses. On a phone, bins are pickers. Positions and sizes come from layout studies, still open.
- **Live:** the console takes in new records in place. Anything that would move what he is looking at waits behind one quiet Update key (R) until he takes it.

## Keys by travel

The bench is for rapid sorting; every inch the mouse travels slows the flip-and-mark loop.

- Keys used one after another sit touching, at the same size.
- A key gets bigger only if that doesn't push it from its neighbours.
- Every control for the loop (marks, steps, categories, passes) lives in the one panel, not at the edges.
- Before showing a layout, trace the mouse path of the most common sequence.
- Key order: Works · Cut · ‹ › · Change. › and Change are used most, so they sit side by side. There is no SEND: he removed it on 22 Oct, and every work is marked one by one.

## Sorting passes

Splitting the passes made him "less stressed and more confident in my choices, nothing is lost, everything is sorted." Each decision answers one question, and nothing is deleted.

1. **Needs sorting:** every work whose newest version has no mark. Flip through and mark each one; a marked work leaves at once.
2. **Nothing pending:** marked Works, with nothing open.
3. **Needs change:** a later, dedicated pass. A Change stays open until a new version answers it.
4. **Cut:** a last look for anything worth saving or recreating.

Keep this split in any tool that asks him to judge work. Never merge the passes into one "fix it now" step. Archive, don't delete.

## Not in the standard

Rounds, cards, passes and batches are words for a process or a view, not for work. A project may use them inside its own process. What it hands the workbench is works, versions, formats and marks.
