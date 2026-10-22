---
name: commit-hygiene
description: How studio work is committed, pushed and merged - scoped commits, a visibility and secrets check before every push, main only by PR, Git LFS for media, archive never delete. Use whenever committing, pushing, opening or merging a PR, or adding media or large files to a repo.
---

# Commit hygiene

Rewritten 22 Oct 2026, replacing the board-era standard of 14 Oct. There is no board, no CI and no bots. GitHub holds code; records are plain files in each project.

## Commits

- **One change per commit,** with an imperative, specific message: `Add the take-stock skill`.
- **Stage named files.** Read the diff first. Leave unrelated work alone; never sweep it in, and never make a catch-all snapshot.
- **Leave the tree clean** when the job is done: its changes committed, nothing of it left loose.
- **Scratch stays out.** Scratch files, generated output and caches go in `.gitignore`. A deliverable that is ignored is still kept where the job can find it.

## Before every push

1. **Visibility:** `gh repo view --json visibility`. Know where it's going.
2. **Public by default.** None of his work needs to be private, so a public repo is fine. Clean the content; don't hide the repo.
3. **Nothing that must stay out:** no keys or secrets, no other people's personal data, no private parts of his exports. If you find one, redact it and mark it; ask him only about live keys or other people's data.
4. **Pushing a new repo or remote is publishing,** and needs his go.

## Main

- **Main changes only by PR.** Work goes on a branch.
- **Plain `gh` posts as Hedawn.** Everything posted shows as his, so keep it short and plain.
- There is no CI. Check the change yourself before asking for a merge.

## Media

- Media, and any file over 10 MB, goes in **Git LFS** or stays outside git. Check LFS is set up for the repo first.

## History

- **Never force-push or rewrite published history.** Fix mistakes with a new commit.
- **Archive, never delete.** Retired files move to an `archive/` folder, with the date in its name.

## When something blocks

A missing remote, a failed push, or unrelated dirty files: stop, keep the local commit, and report it in one line. Don't work around it.
