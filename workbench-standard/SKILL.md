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
- **Mark.** Change or Cut, with an optional note, made by Hedawn. A mark names the work and the version it was made on. Marks pile up on a version; none replaces another.

## Notes are marks

Everything he has said about a work is that work's marks, in order. There is no separate notes store. A brief for the next version starts from the version he liked, plus every mark on the work. The newest note is the change.

## State

The Bench reads the current round's marks. Cut archives the work and deletes nothing. Change asks the studio for another version. A round leaves Needs sorting when he marks it Change or Cut. A new version answers Changes on the previous version and starts in Needs sorting. A PM makes no new version of a Cut work without his word. Works is retired (27 Nov 2026): historical Works marks remain in the record, and a round previously marked Works stays browsable under Open.

Waiting counts bins with at least one round to sort. A bin on Hold is on the back burner. A round already in the studio's hands leaves the producer's waiting count. Unmark clears an active Change or Cut.

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

## Tasks entries

A Tasks entry is the active task list. Keep its Tasks layout in every new round.
Completed work belongs in the Update note or a history attachment and leaves the active list.
When the list is drained, the entry shows a short empty state.

## The console

Desktop surfaces only (Hedawn, 21 Nov 2026). No phone layouts or phone checks.

- **Fixed:** the control panel and the side scroller (the four-slot window) stay the same whatever is reviewed. A project changes only its keys, in its profile.
- **Cards** show in the side scroller, one card per work. The card list has a set height; it filters and scrolls, and keeps its place in each bin. A card can be video, text, code, an image and more; the screen loads the card module that matches its type.
- **Pass filters** (Needs sorting, Open, Needs change, Cut) are symbols with their counts.
- **His words for the levels (17 Nov):** a **bin** is the row of bins across the top ("functionally our address bar"; `card.json` cards), a **hub** is what is listed down the side (`card.json` tracks), a **card** is whatever is on the screen. Use these words with him. A hub can sit in a group (`tracks.<t>.group`, set with `move_card --relabel`); groups fold and start open.
- **Every space has a declared contract, and a break must show (17 Nov).** His central principle: nearly all his frustration is a contract that breaks unseen, with no way for him to say so. A space's bounds are declared and visible; base tabs are bounds, not forms (Outside, Scenes, Worldbook, Tale, Log), wordless, labels only. The draft standard is `knowledge/temple-of-lum/jobs/2026-11-17/bounded-spaces-standard`: a draft, so new rules go to him as proposals.
- **Every page loads instantly (17 Nov: "no ifs ands or buts").** No loading screens; the museum never shows one. Hold seats to about 200 ms to the first view, measured as ready time (`check_frames` `ready_ms`) and a WebKit first-frame time. The record feed went from 27 MB to 5 MB that day by sending items once.
- **Bin buttons** stay fixed, with a bin's sub-bins inside it. Nothing expands or collapses. Positions and sizes come from layout studies, still open.
- **Live:** the console takes in new records in place. Everything off the card in front comes in on its own. A change to the card in front (a new version, a new file under it, or it leaving the strip) comes in at once (never while a note is open or he is scrubbing): the card opens at the change and plays, so he can wait on the page and see it arrive. Until then the card says `vN waiting · R`, and the quiet Update key (R) takes it at once. A new round on another card goes to that card at once, across projects on the bench too, never with a note open ("just make sure it shows up on my screen", "stop waiting for me to be idle", 5 Nov; if it becomes a problem he says so and it gets fixed); until then its card is marked and the Update key counts it. Links aren't how work reaches him: they open new tabs.
- **An empty Needs sorting is his "nothing waiting" signal** (23 Oct): he leaves the page on that pass, and new work pops up there to sort. Keep it honest: only work for him to sort lands there, and nothing that waits on him sits anywhere else.
- **New code reloads itself** (his A+C, 23 Oct): when the console code changes, the page reloads on its own at once, and comes back where he was (card, version, playhead, play or pause, drafts). Nothing moves while a note is open, a drag is live or a mark is in flight. His typed text never disappears ("as long as my text im riting dosnet idsaper you dont need to wait to update th ebench", 5 Nov): a bench restart needs no wait, sends ride through it, a failed send stays a draft, and his own refresh reopens the box on his words.

**Paged works.** Every paged work exposes one page's recorded versions together, including page-specific tries. Page identity survives book reordering through studio-maintained IDs. Legacy position matches remain visible and explicitly unconfirmed. Each occurrence retains its source version, picks and notes. The view distinguishes saved choices from their confirmed incorporation into a named build. It opens within the card, preserves the panel and side scroller, and restores the previous place on close. The fixed panel handles repeated stepping and marking. No structural change occurs during notes, drags or sends. The studio maintains identity and build provenance; Hedawn only chooses, marks and optionally writes.

## Keys by travel

The bench is for rapid sorting; every inch the mouse travels slows the flip-and-mark loop.

- Keys used one after another sit touching, at the same size.
- A key gets bigger only if that doesn't push it from its neighbours.
- Every control for the loop (marks, steps, categories, passes) lives in the one panel, not at the edges.
- Before showing a layout, trace the mouse path of the most common sequence.
- Key order: ‹ › · Change · Cut, with Change on key 1 and Cut on 3 (24 Oct, 11:58 PM, his words: "i do want change on 1"). › and Change are used most, so they sit side by side. There is no SEND: he removed it on 22 Oct, and every work is marked one by one.

## Sorting passes

Splitting the passes made him "less stressed and more confident in my choices, nothing is lost, everything is sorted." Each decision answers one question, and nothing is deleted.

1. **Needs sorting:** newest rounds awaiting a look.
2. **Open:** browse rounds previously marked Works.
3. **Needs change:** rounds with an open Change.
4. **Cut:** archived rounds, available to review and restore.

Keep this split in any tool that asks him to judge work. Never merge the passes into one "fix it now" step. Archive, don't delete.

## Not in the standard

Rounds, cards, passes and batches are words for a process or a view, not for work. A project may use them inside its own process. What it hands the workbench is works, versions, formats and marks.
