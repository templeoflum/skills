---
name: atomic-toy-lab
description: Build and certify "atomic toys" — wordless, one-knob, single-invariant interactive studies that make a concept felt in the body rather than explained. Use whenever the user wants to embody, feel, or perceptually test a concept, principle, or perceptual law; asks for a "toy," "study," "atom," "embodiment," "scrying toy," or "pre-words" interactive; wants to build a library of composable single-knob instruments; or wants to run blind trials / certification on interactive studies. Also use when refining an existing toy that "isn't landing" or "feels subtle." Covers the build spec (mobile gesture lock, tone engine, audio unlock, atom interface), the lab-notebook entry format, the blind-trial certification protocol, and the design constants extracted from trials.
---

# Atomic Toy Lab

A method for turning concepts into **wordless instruments**: each toy has ONE knob, ONE invariant, and NO words on its surface. The person plays it blind; if the invariant doesn't transmit through perception alone, the toy is rebuilt until it does. Words live only in the lab notebook.

## Core discipline

- **One knob, one invariant.** If a design needs two knobs, it's two toys (or a molecule — see Composition).
- **Wordless surface.** No labels, no instructions, no numbers. Title the HTML page "◐". The name of the toy exists only in the filename and notebook.
- **Everything entailed.** Every perceptible behavior must be a consequence of the toy's actual state — real physics, real math, real timing. Never decorate; never animate what the structure doesn't produce. (E.g., a beating visual must be driven by the computed beat envelope of the actual sounding voices, not an LFO that matches.)
- **The name carries the invariant.** One word. Success = the player says that word unprompted.

## Build spec

Start every toy from `references/toy-boilerplate.html` (a complete working template). It bakes in the non-negotiables:

1. **Mobile gesture lock**: `html,body{overflow:hidden;overscroll-behavior:none}`, `touch-action:none` on the control, non-passive document `touchmove` preventDefault while dragging.
2. **The slider rail** (the standard knob): SVG rail 30→390 in a 420 viewBox; works mouse and touch; no tick marks, no labels.
3. **The AU tone engine**: two sustained triangle voices + lowpass + blip, silent until armed. Sound must voice the toy's OWN invariant (identity → portamento; precedence → held-tone duration; a gap → proportional detune of a pure interval). If sound would CONFOUND the invariant (attention studies!), leave the method silent and sound only the distractor — or omit audio and note why.
4. **Robust audio unlock**: arm on pointerdown/touchend/mousedown/click/keydown, retry `resume()` until running, play a silent buffer inside the gesture (some webviews require it).
5. **The atom interface** (composability): `window.atom.set(t)/.get()` normalized 0..1; `?k=` URL param sets state on load; postMessage `{atomSet:t}` in and `{atomChange:{name,k}}` out.
6. **Syntax-verify before shipping**: extract the script and run `node --check`.
7. **Knob changes must never corrupt running animation**: either apply at the cycle boundary, or invalidate stale frames with a generation token. (CSS transitions do NOT apply to SVG attribute `transform` — use `style.transform` with `transform-box:fill-box`.)

## Design constants (defaults from certified trials — apply unless the toy argues otherwise)

1. The name carries the invariant.
2. **Atoms exaggerate, molecules calibrate** — but exaggeration ≠ immediacy; some invariants are slow by nature (a toy about time may require a sit).
3. **Contrast is per-modality** — every channel (eye, ear, touch) needs its own unmistakable "gold"; a channel without a cut-through signal is noise. Never weaken a working channel to protect a weak one — strengthen the weak one.
4. States are gears: traversal should articulate, not smear (direction, not spec — derive any implementation from references).
5. **Zone the screen** — on mobile, spatial steering requires structuring activity into one zone at a time; a uniform field invites diffuse whole-field monitoring. Two steering modes: the bait (covert ambient motion holds the spotlight) and the flash-on-void (overt forced saccades).
6. Perception refuses the dial — many perceptual reads are binary even under continuous control (e.g., the faintest visible mechanism kills an effect-reading instantly).
7. **The sustained coupled layer outperforms event grammar** — a world continuously responding to state beats choreographed moments; moments are punctuation.
8. The viewer rescues broken structure (e.g., invents precedence for a too-late commitment) — design so the invariant is felt despite perceptual charity, or make the charity itself the subject.
9. Perception grants identity for free — a lone object is "it" by default; identity is revoked only by positive evidence of a different individual (missing birthmark, duplication), not by discontinuity.

## The lab notebook

One living markdown file for the whole library. Every toy gets an entry BEFORE trials:

```
## <ID> · <NAME> — <filename>
**Knob:** <what the one control does, plainly>
**Intended invariant:** <the single claim the toy makes feelable>
**Attend to:** <what the player should notice — thresholds, feelings, crossovers>
**Predicted misleads:** <honest list of ways the toy could lie or under-generalize>
**EXPERIENCED:** _(operator's notes)_
```

After trials, fill EXPERIENCED with the report, coaching, changes, and certification status. Log every constant extracted, every revert, every failed prediction (including your own wrong predictions — that's calibration data).

## Blind trial certification protocol

1. Serve the toy with ZERO framing beyond practicalities ("sound arms on first tap"; "runs on its own loop").
2. The player reports first impressions freely.
3. Ask **ONE question at a time** — pointed, non-revealing, toy stays open, fragments welcome. Never multi-part probes (working-memory violation).
4. Reveal the intended invariant and design question.
5. The player coaches: where it failed to speak, how to say it better.
6. Rebuild and retest, or certify.

**Process laws:**
- **Refine until it CANNOT be subtle.** A toy is done when missing the signal is impossible — undeniability proves signal; subtlety is purchased later, at composition.
- **Wordlessness is the bias firewall.** With no vocabulary to hide in, alignment is binary and unfakeable by either side.
- **A metaphor is a direction, not a spec.** Calibrations need references like everything else; **revert beats polish** when a change wasn't derived.
- A failed blind read is data, not failure — the mechanism may have operated even while the message failed (probe for that).

## Composition (molecules)

Once atoms are certified, wire them via the atom interface: a patch-bay page iframes two toys and pipes one's `atomChange` into the other's `atomSet`. Molecules test interactions atoms can't see alone. Calibrate (dial back the exaggeration) only at this layer.

## When a toy fails blind

Diagnose against the constants first: dead knob (no felt difference across travel)? missing per-modality gold? uniform field where zones were needed? no established pattern for the violation to violate ("no beat for the off-beat")? knob restarting cycles mid-flight? Then rebuild — don't patch a metaphor.
