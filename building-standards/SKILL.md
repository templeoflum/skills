---
name: building-standards
description: How the studio turns repeat work into a standard, and keeps each standard alive. Use when a piece of work has been done about three times with a similar shape, or when Hedawn names one to standardize.
version: 0.3 (draft, 22 Oct 2026)
---

# Building standards

A standard is the current best way to do a repeat job, written from real runs. It is the baseline to improve on, not a fixed rule.

"Standard", "SOP", "runbook", "hygiene", "constitution", "house style", "spec", "routine" and "rules" all name the same thing: a standard. Each standard has one home, a plain skill folder in `templeoflum/skills`. Everything else points to it and never restates it. Records (what happened) and gardens (state, decisions and their reasons) are not standards.

## When

- A job has been done **about three times** with a similar shape. This is our call; no study sets a threshold.
- Or Hedawn names a job to standardize.
- Not for work still changing round to round, or done once.

## Done when

The standard has been run once by a fresh session on a real job, Hedawn has marked that run Works, and it's released as a skill with its version and source runs.

## Who

- **Drafter:** an agent session. Hedawn never writes or rewrites.
- **Tester:** a fresh session that didn't draft it.
- **Hedawn:** answers a few questions in talk, and marks the test run Works, Change or Cut.

## Steps

1. **Gather the real runs.** List every time the job was done, with paths and dates: files, rounds, briefs, and his marks and corrections. Work from the record, not memory.
   *Why:* people explaining a job leave out their own decisions; the record doesn't.
2. **Pick the best recent run** and draft from it. Fold in every correction he made across all runs, not just the last.
3. **Ask only for missing decisions.** Where the record doesn't show why a choice was made, ask him in talk, one line each, three at most. His answers are ideas until he says go.
4. **Split fixed from open.**
   - Fixed: triggers, hand-offs, names, formats, delivery, checks.
   - Open: the creative calls. Name them so nobody fixes them by accident.
5. **Write it in the template below.** Keep SKILL.md under about 150 lines; put detail in linked files one level deep. Give fragile steps exact commands; give judgment steps a heuristic.
6. **Test with a fresh session** on the next real job, with only the standard and the job. The drafter doesn't help. The tester notes every place the standard was unclear, wrong or skipped.
7. **Show the run's output to Hedawn** as a workbench record, with the tester's notes. He marks Works, Change or Cut.
   - Change: revise, and test again on the next job.
   - Cut: archive the draft with the reason.
8. **Release** as a plain skill folder, `<name>/SKILL.md` in `templeoflum/skills`, with version, source runs and the test run. That repo is public: nothing private goes in. Zips are made only on install. Every copy elsewhere becomes a pointer.
9. **Keep it alive.** There's no "lite" version: every run follows the standard.
   - **Adapt to the case.** A run may adapt a step to fit its job. It logs the adaptation and why in `log.md`.
   - **Suggest.** Anyone running it may log a suggestion for improving it, in the same file.
   - **Repeat means review.** When the same suggestion or adaptation shows up three times, it's brought to Hedawn as a proposed change. He marks it; Works means the next version includes it.
   - Archive the standard when nobody follows it. Archive means move, never delete.

## Checks (confirm before showing him)

- [ ] Every step traces to a real run or one of his answers.
- [ ] Every correction he made in past runs is in it.
- [ ] Fixed and open are both named.
- [ ] A fresh session ran it on a real job.
- [ ] Nothing in it asks him to write.
- [ ] Nothing private in it, and no other copy restates it.

## The template

Every standard uses these sections, in this order:

1. **Front matter:** name, and a description saying what it does and when to use it.
2. **When:** the trigger, or the pause point.
3. **Done when:** what finished looks like.
4. **Who:** who does it, who marks it.
5. **Inputs:** what's needed before starting.
6. **Steps:** numbered, each with its key point and, where it isn't obvious, why.
7. **Open:** what's left to judgment.
8. **Checks:** a short checklist, five to nine items, confirmed before showing him.
9. **Records:** what gets saved, and where.
10. **Source and log:** the runs it came from, its version, and one line per later run.
11. **Review:** when to revise or retire it.

## Records

- The standard: `<name>/SKILL.md` in `templeoflum/skills`.
- Its records stay plain files in studio-operations `knowledge/sops/<name>/`: the gathered runs (`runs.md`), the test run's notes (`test-<date>.md`), and adaptations and suggestions from every run (`log.md`).

## Source and log

- **Sources:** EPA QA/G-6 (2007) for sections, testing by someone other than the writer, and review and archiving; TWI Job Instruction for steps with key points and reasons; Toyota standard work as a baseline to improve; cognitive task analysis for drafting from runs, not interviews; checklist research (Degani and Wiener; the WHO trials) for short checklists at a pause point; Adler and Borys for fixed versus open; Anthropic's skill guidance for format and fresh-session testing.
- **v0.1, 22 Oct 2026:** drafted; first used on take stock.
- **v0.2, 22 Oct 2026:** Hedawn: always the standard, never a lite version; adapt per case; repeated suggestions get reviewed.
- **v0.3, 22 Oct 2026:** renamed from building-sops: "SOP" and "standard" are one word. One home per standard, in the skills repo.

## Review

Revise after the first three standards built with it, then whenever practice changes.
