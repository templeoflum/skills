---
name: one-page-design
description: The studio's design bible, built on Stone Librande's One Page Design talks. Load it before briefing, drawing or checking any design sheet, system drawing, plan, map, loop or one-page explainer, and before any crew brief for one. Portfolios and readers are exempt.
---

# One page design

A design sheet is a drawing of the thing itself on one page, made to be marked up. It is not a web page of bullets. This standard is the studio's own wording. The source material is Librande's and stays private (see **Where the material lives**).

## The sheet

Every design sheet has these parts:

- **Paper:** white, with dark ink. The sheet stays paper in dark mode.
- **Fixed page:** one fixed page, 17×11 landscape unless the brief says otherwise. No scrolling and no reflow; it scales whole to fit.
- **Title and date:** at the top, with a revision.
- **Central picture:** the thing itself (a map, plan, loop, triangle, timeline or grid of drawings), and the biggest thing on the page. His real images and drawn icons are the data.
- **Description:** short, under the central picture.
- **Callouts:** around the picture. Each joins to the exact spot it explains by a leader line. Some callouts are small illustrations with a note.
- **Detail:** small detail sits beside each node, not in a separate list.
- **Arrows:** every arrow is labeled, and a label is a few words.
- **Sidebars:** for goals and checklists.
- **Size and space:** important things are drawn bigger, and white space is left.

## Form follows the question

Pick the central picture from the question the sheet answers. The shape must say something true; a pretty shape that implies a false relation is wrong.

| The question is about | Draw |
|---|---|
| a cycle, feedback, or what comes back | a loop with labeled arrows |
| how places or parts connect | a map or plan |
| pairs of things and how each pair behaves | a matrix |
| three forces or choices in balance | a triangle, things placed between their parents |
| what happens over time | a timeline, with branches where order is open |
| many variants of one kind | a grid of small drawings |
| one agent or one flow through a system | a single flow, separate from the master plan |
| a whole system at once | an overview, with each subsystem on its own sheet |

## The method

1. Name the one question this sheet answers. Leave the rest for other sheets.
2. Make the cheapest serious guess: rough, but usable enough to find a problem.
3. Show the relations: name the parts, put connected parts together, show the direction of change.
4. Put it to use: hand it to the person or crew it's for, or trace the cases it claims to hold.
5. Say plainly what broke: a wrong model, a missing relation, a test that can't run, or a reader who can't use it.
6. Keep what earned its place; drop what didn't.
7. Try the changed sheet against the same question.
8. Broaden only when the small view holds.
9. Date it, put it where it's used (his bench card), and fold his marks back in. A marked copy is the next version, not damage.
10. Stop when the question is answered, or carry a known limit forward openly.

## The check before the bench

Before a sheet reaches the bench, the OM opens it side by side with the kept frames (the frames whose `keep` is true in `labels.json`). It goes back to the crew if any of these hold:

- it reads as a dark web page of bullets;
- the central picture isn't the biggest thing;
- notes float free instead of joining their spot;
- any text overlaps;
- it scrolls.

The check is done by eye on a headless render. There's no score.

## In a crew brief

Name this skill and point the crew at the frames. Tell them to look at the images themselves, not only the labels. Quote the template parts above. Ask for `out/METHOD.md` naming which frames each part was modelled on.

## Where the material lives

Private only. Never publish it, quote it at length, or copy its images into a public repo, this one included.

- Text: `knowledge/research/one-page-design/out/` in the private `templeoflum/studio-knowledge`. That covers `study.md`, `method.md`, `labels.json`, `transcript-clean.md`, `sources.md` and the deck text under `stonetronix/text/`; the 2010 deck's Basic format is near line 1485 of `OnePageDesigns-2010.txt`.
- Images (frames, SimCity pages, Spore images, contact sheet): on disk beside that text, and backed up as the zip on the private release `design-bible-images-2026-11-06` of `templeoflum/studio-knowledge`. To restore, unzip it into `research/one-page-design/out/`.

## Exempt

Portfolios, readers and book pages follow their own cards. This standard is for design sheets.
