---
name: premere-house-style
description: Premere's visual canon — a 1-bit e-ink aesthetic — for every surface built under the Premere identity. Use every time you create or revise a Premere frontend, UI, card, sheet, artifact, or printed surface, run it alongside the legibility-constitution and narrator-bleed skills, and treat its constraints as canon, not preference. Also use when the user asks about the Premere palette, the look, the "house style," why a Premere surface uses color/shadow/gradient, or says a surface "doesn't look like Premere."
---

# The Premere House Style

*A declaration of intent — the 1-bit e-ink canon.*

Premere prints in one bit — ink or no ink, on paper. Premere's tools are built the same way. Every surface under the Premere identity is a **1-bit e-ink surface**: ink marks on warm paper, matte, flat, high-contrast, still. This is not a theme that can be swapped. It is the Premere house, and it is chosen twice over — once because a Premere interface should look like what Premere makes, and once because a matte, glare-free, motion-still, high-contrast paper surface *is* the neurodivergent-, sensory-, and disability-friendly surface the legibility constitution exists to protect. The aesthetic and the accessibility are one decision. Premere leans all the way into it.

An e-ink page has no backlight, so it does not glow. It has no light source, so nothing casts a shadow. It refreshes slowly, so it does not swoosh. It is grayscale, so it does not shout in color. Every constraint below follows from building *as if the surface were printed on e-ink* — and every one of those constraints is also a legibility win.

## The canon

**The palette — four tones, by role. These are the values. Do not substitute.**

| Token | Value | Role |
|---|---|---|
| `--paper` | `#FAFAF7` | the ground — warm off-white |
| `--ink` | `#141414` | the mark — soft near-black |
| `--quiet` | `#6B6B66` | secondary text, muted marks |
| `--hair` | `#C9C9C2` | rules, borders, dotted separators |

Warm paper, not pure white. Soft ink, not pure black. The softening is deliberate: pure `#FFFFFF` glares and pure `#000000` is a harsh edge, and both punish light-sensitive and dyslexic readers. High legibility contrast, low sensory assault — that is the whole trick, and it is why the values are what they are.

**The texture — the dither is the signature.** A 1-bit crosshatch (`repeating-linear-gradient` at 2px) is the one texture, used for rules, idle states, and the printed quality. It is the mark of the house. It is used *deliberately* — as accent and identity, never as carpet (a dithered field behind everything is visual noise, and noise fails the constitution). Signature, not wallpaper.

**Emphasis is inversion, not color.** The active/selected state inverts — ink ground, paper mark — the way an e-ink cell flips. Emphasis is carried by the flip, by weight, by the hairline, by position. Never by hue.

**Type — two roles.** Body prose is a clean system sans-serif at adequate size (never a special "dyslexia font" — the research debunks them). Chips, labels, data, and numbers are monospace (`ui-monospace, "SF Mono", Menlo, Consolas`) — the printed-label voice. Prose reads; mono labels.

**Depth — none.** The surface is flat paper. Separation is done by hairline and border, never by elevation. There is no light, so there is no shadow.

## The forbiddens (binary — a surface with any of these is not Premere)

- **F1** — No pure `#FFFFFF` or `#000000`. Paper and ink only.
- **F2** — No color, except a single *earned functional* accent, and never color-only (redundant-encode it, per the legibility constitution G18). Decoration is never a reason for color.
- **F3** — No shadows, no `box-shadow` depth, no glows, no glass/blur, no neon. Flat.
- **F4** — No gradients, except the 1-bit dither. A smooth tonal ramp is not e-ink.
- **F5** — No global dark mode. The canon is paper; it does not invert wholesale. Inversion is reserved for the selected-element flip.
- **F6** — No display/webfont for body; monospace is for labels and data only; no dyslexia font (legibility G22).
- **F7** — No decorative motion. Transitions obey the legibility constitution's motion gates (G1–G4); e-ink does not swoosh.

## The requireds (binary — a surface is Premere only with all of these)

- **R1** — Paper ground, ink marks, the four-tone role palette, values verbatim.
- **R2** — The dither present as the signature texture, used deliberately.
- **R3** — Monospace chips and labels; system-sans body.
- **R4** — Flat: separation by hairline/border, emphasis by inversion.
- **R5** — High legibility contrast delivered through warm paper + soft ink, not pure tones.

## Why this is Premere

Two reasons, and they are the same reason. **Coherence:** a 1-bit print shop whose tools render in 1-bit e-ink is legible as one thing — the interface is a sample of the product. **Care:** matte, glare-free, still, high-contrast paper is, by the accessibility evidence, the calmest surface for neurodivergent and sensory-sensitive readers. The look is the proof of the craft and the proof of the care at once. That is why it is declared, not defaulted.

## Pairing — and what is Premere's versus what is house-wide

This canon governs how a **Premere** surface *looks*. The other two skills are broader:

- **legibility-constitution** — how a surface *behaves and reads* (motion, scroll, pinning, voice, grouping).
- **narrator-bleed** — what a surface's text is *allowed to say*.

Those two are **house-wide craft law** — they bind every surface, whatever the brand. This canon is narrower: it is Premere's **visual identity**. Flock, the kitchen venture, grants, and any other project answer to the same legibility and narrator-bleed rules, but each may declare its own look; this one is Premere's. Run all three on every Premere surface; where they touch — font, motion, contrast — the legibility constitution sets the thresholds and this canon sets the Premere identity. They do not conflict: e-ink's physical limits and the constitution's rules point the same way by construction.

## The one open lean

The canon keeps the four-tone palette (paper/ink/quiet/hair) rather than going *pure* two-tone with dithered midtones for every gray. That is the deliberate call: true all-dither is the more authentic 1-bit, but dithered fills at UI scale add the exact visual noise the constitution forbids, so grays stay as flat softened tones and the dither stays a signature accent. If Premere should push harder into pure 2-tone — dither standing in for every `--quiet` and `--hair` fill — that is the lever to pull, and it is the one aesthetic choice here worth a veto.
