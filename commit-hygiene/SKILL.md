---
name: commit-hygiene
description: How studio work is committed and PRed - scoped commits, every PR through ops/records/pr.py (which checks visibility, secrets and LFS), force-push limits, archive never delete. Use whenever committing, pushing, opening or merging a PR, or adding media or large files to a repo.
---

# Commit hygiene

GitHub holds code; records are plain files in each project. Trimmed 7 Nov 2026 to what `ops/records/pr.py` doesn't already do.

## Commits

- **One change per commit,** with an imperative, specific message: `Add the take-stock skill`.
- **Stage named files.** Read the diff first. Leave unrelated work alone; never sweep it in, and never make a catch-all snapshot.
- **Leave the tree clean** when the job is done: its changes committed, nothing of it left loose.
- **Scratch stays out.** Scratch files, generated output and caches go in `.gitignore`. A deliverable that is ignored is still kept where the job can find it.

## PRs: `ops/records/pr.py`

Main changes only by PR, and PRs are made with `python3 ~/work/studio-operations/ops/records/pr.py --src … --repo … --expect private|public --branch … --role … --title … --body-file … FILES`. It takes the named files only, in its own worktree; refuses a file over 10 MB that isn't in Git LFS; scans every file for keys and sealed terms; checks the repo's visibility against `--expect`; never pushes main and never forces; and opens the PR as the role, so his Slack shows who did what. Read its refusal and fix the content; don't work around it.

Left to you: PR titles and bodies say the outcome first and plainly. There is no CI, so check the change yourself before asking for a merge. A new repo or remote is publishing, and needs his go.

## History

- **Force pushes:** never a plain `--force`, `-f` or `+ref`, never to main, and never to a public repo. `--force-with-lease` is fine on a branch your own session made, in a private repo, to update a PR branch after a rebase. Main's history is never rewritten; fix mistakes there with a new commit. The guard hook refuses a plain force push and any force push to main, in every mode; a lease it can't prove is logged.
- **Archive, never delete.** Retired files move to an `archive/` folder, with the date in its name: `pr.py --move OLD=NEW` takes a move byte for byte and refuses any other deletion.

## When something blocks

A missing remote, a failed push, or unrelated dirty files: stop, keep the local commit, and report it in one line. Don't work around it.
