---
name: take-stock
description: The first stage of every project, an existing-conditions survey. Finds every place the project's material lives, what is public, what runs, and shows it in pictures with a verdict per item, so Hedawn can mark it. Use when a project starts, or when its current stage is Take stock.
version: 0.1 (draft, 22 Oct 2026), with Hedawn's three answers of 22 Oct
---

# Take stock

An existing-conditions survey and site walk: what exists today, where, in what state. It is never one text page.

## When

- A project starts, or its brief's current stage is Take stock.
- Again for one part, when he marks Change on a take stock or says something was missed.

## Done when

- Every deliverable in step 2 exists, or is marked "does not apply" with the reason.
- The summary has gone to him as a workbench record and he has marked it **Works**.
- After any Change, the revised record has been marked again. An unanswered recheck is not done (BIC T-0806).

## Who

- **Project manager:** plans the packages, runs the checks, prepares the record. Crews do the packages; a quick fix from the manager is fine.
- **Crew sessions:** one package each, from the plan.
- **Hedawn:** marks the record Works, Change or Cut, and answers a few choices in talk. He never writes, fills in or types anything.

## Inputs

- The project's brief, its folder, and its garden if one exists.
- The work-wiki's sources for the project: `work-wiki/site/sources/`.
- His standing rulings and holds: the "Now" and "Open edges" of `decisions.md` (see `studio-routine`).
- Phone and gallery material he drops in the studio inbox folder.
- Which other projects own nearby material (their READMEs).

## Steps

1. **Plan the packages.** Write `take-stock/plan.md`: one row per package, the deliverables it covers, its seat, what blocks it, its output, and a DONE WHEN. Together they cover every deliverable, nothing extra. Add a constraint log (unreachable sources, large folders, gear needed).
   *Why:* BIC's plan is the only run that met every deliverable first time.
2. **Know the deliverables.** These are the exit test:
   1. Every location found, duplicates listed once with all their paths.
   2. A home under git: a project folder, a README pointing at the sources (read-only), a local commit.
   3. What's public today, with evidence.
   4. What runs or opens, with double-click launchers.
   5. A picture tour.
   6. A verdict per item.
   7. A few questions for him, each a choice.
   8. One summary page linking all of the above.
   9. His mark on the workbench record.
   Writing-only projects may mark 4 and 5 "does not apply" (Literature passed this way).
3. **Find every location, lineage first.** Search by the project's name, then by its earlier names, the ideas it grew out of, earlier versions and copies under other names. Cover the whole Mac (Spotlight names and text), Mind Not Map and `MNM_BACKUP`, the work-wiki sources, Drive, old chats, and every doc in the folders found. Write `locations.md`: per item, one line on what it is, every path, size, last changed. End with how the search was done and **where you did not look**.
   *Why:* Temple of Lum went back five times ("32 years … keep digging"), and BIC missed its software.
4. **Draw the boundaries.** Material another project owns is listed once as theirs, never inventoried. Private material (messages, personal exports, other people's data) gets its path and whether it relates, never quotes, and stays out of git. Items under a standing hold are listed by path only.
5. **Make the git home.** README with the source groups, read-only. Commit locally, one commit per package, named with what it did. No remote without his go; check `gh repo view --json visibility` before every push (see `commit-hygiene`).
   *Why:* Signal Flow's take stock was never committed.
6. **Record what's public.** Search his accounts logged out, then a deep web search for the project and its lineage, including archived pages (`web.archive.org`). Per item: account, post, date, link, and saved evidence in `take-stock/evidence/` (a fetched page or a screenshot), with how and when it was viewed. Mark which accounts are his only when he has confirmed it; otherwise "not confirmed". If nothing is public, say so.
   *Why:* "do your dang homework" (MET∃OR); "a deep web search not just my files" (Sloura).
7. **Launch what runs.** A `.command` per runnable item in `launchers/`, opening the source in place, never moving or editing it. Record in `runs.md`, per item: opened, failed (what was seen), or can't be checked here (why). A page is not a launcher's job: pages open as pages.
   *Why:* "why the heck did you use a launcher for that, bad form" (HeDawn).
8. **Take the picture tour.** Screenshot every visual item at desk sizes (1440×900 and 1920×1080), headless, with a capture script kept beside the tour. Include earlier versions, not just the current one. Caption each in one plain sentence. List what would not open, with the reason. Use BIC's `capture-tour.mjs` and `check-tour.mjs` as the starting point.
   *Why:* "for th current implemantion yes, not the previous ones" (Temple of Lum); the picture pass caught what the text missed.
9. **Give each item a verdict:** ready; needs work (saying what); or not for this project (saying whose). Label each ground: seen, source says, or judgement.
10. **Draft the questions.** Identity and policy only: what only he can decide. Each is a choice (yes / no, or named options) with a recommendation. At most five.
11. **Make the summary page.** One HTML page: what the project holds today, counts by verdict, one group per kind with a picture, where it lives, what opens it, what ran, what it needs; the questions; his standing rulings that apply; "Not known yet". Link every record. It fits the desk with only the body scrolling. One package, one entry point.
   *Why:* "wall of raw text" (×2); "two take stock tracks … we need visuals" (HeDawn).
12. **Do one more full pass.** Re-read every doc in the folders found against `locations.md`, looking for whole kinds of material that are missing (lineage, design languages, software). Add what you find.
    *Why:* "I might have forgotten some stuff worth another pass" (Temple of Lum, T-0307).
13. **Run the checks** below, then show him: the summary as a workbench record, opened for him the moment it's ready. The record carries one plain line, the Open link, at most three things to look at, what he should see, and the marks. The OM asks the questions in talk, as choices.
14. **On Change,** fix what he named, then search again for the same kind of miss elsewhere, and send it back for a fresh mark.

## Open

- What counts as one item, and how items are grouped.
- Each verdict, and what "needs work" names.
- Which questions are truly his, and the recommendation on each.
- How deep the lineage goes, and when a search is deep enough to stop.
- Which pictures best show an item, and the captions.
- Whether gear-bound items (hardware, Resolume) are run or marked "can't be checked here".

## Checks (before showing him)

- [ ] Every deliverable exists or says "does not apply" and why.
- [ ] `locations.md` names where the search did not look.
- [ ] Every link and path in the records resolves (a script, as Signal Flow's `check.py`).
- [ ] The tour check passes at both sizes with no errors.
- [ ] Every item has exactly one verdict.
- [ ] No other project's material is inventoried; no private text is quoted; holds are respected.
- [ ] The work is committed locally.
- [ ] Nothing in the record asks him to write; a Works mark needs no note.
- [ ] Nothing new was made, fixed or decided (format, posts, next steps).

## Records

- In the project: `take-stock/` with `plan.md`, `locations.md`, `public.md` + `evidence/`, `runs.md`, the tour and its scripts, `verdicts.md`, `summary.html`; launchers in `launchers/`; the README.
- His mark: in the workbench. Record it in the project with the date and the SHA-256 of the files he saw (as MET∃OR's `AGREEMENT.md`).
- His answers and new ideas: the project's garden. New directions he gives during take stock are ideas for the next stage, not changes to the stock.

## Source and log

- **Sources:** twelve runs, gathered in studio-operations `knowledge/sops/take-stock/runs.md`; drafted from BIC (14–20 Oct), with every correction from the other runs. Replaces the old take-stock standard (14 Oct, archived 22 Oct).
- **v0.1, 22 Oct 2026:** drafted. First fresh-session test the same day on Smoke and Mirrors; its 26 suggested fixes are in `knowledge/sops/take-stock/test-2026-10-22.md`, not yet folded in.
- **His answers, 22 Oct:** there is no lite take stock, it is always the standard, adapted to the case; phone material comes through one easy inbox folder; search Drive and old chats.

## Review

Revise into v0.2 from the test run's fixes (see `building-standards`), and when the workbench record format or the git policy for records settles. Retire if projects stop starting with a survey.
