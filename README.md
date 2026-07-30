# Pepay Labs × Virtuals Protocol

A ten-slide partnership deck, built as a real Next.js app rather than a slide export.

Founder-to-founder, not investor-to-VC. One idea per slide, readable in three
seconds. Headlines capped at 12 words, supporting lines at 18, no bullet lists,
one visual metaphor each. The detail lives in `STRATEGY.md` — those are the
answers you give when asked, not slides you present.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Presenting

| Input | Action |
|---|---|
| `→` `↓` `Space` | Next slide |
| `←` `↑` | Previous slide |
| `1`–`9`, `0` | Jump to a slide |
| `Home` / `End` | First / last |
| Click | Right side advances, left quarter goes back |
| Scroll / trackpad | Next / previous |
| Progress rail | Click any segment |

Press `F11` for fullscreen before presenting. Slides scale themselves to fit any
display, so a projector at 1024×768 works without changes.

## Swapping in the frog

I could not find frog artwork — not in `BNBCARDS`, not in `bnb-paycopy`, and not
on pepay.io (which serves the same blue pinwheel mark at
`/images/pepay-labs-rounded.png`). The deck currently uses that official mark at
full resolution.

To swap the frog in:

1. Drop the artwork at `public/pepay-frog.png` (square, transparent or
   full-bleed, ideally 512px+).
2. That's it — `USE_FROG` in `src/components/ui/brand.tsx` is already `true`, and
   the component falls back to the pinwheel until the file exists.

It will then appear on the cover, the Pepay Labs slide, the architecture seam and
the closing slide, with parallax and specular sweep already wired.

## Documents

| File | What it is |
|---|---|
| `STRATEGY.md` | **Phase One.** The research and positioning report — what Virtuals has and hasn't built, the seven gaps, competitive analysis, TAM model, and prepared answers to investor and founder objections. Read this before presenting. |
| `DECK-DESIGN.md` | **Phase Two.** Design language, motion system, colour tokens, slide-by-slide composition, and which 21st.dev components were adapted. |

## Structure

```
src/
  app/
    globals.css          design tokens, type scale, keyframes
    layout.tsx  page.tsx
  components/
    deck/
      Deck.tsx           navigation, chrome, slide transitions
      Slide.tsx          shared shell + fit-to-viewport scaler
      slides/            S01…S10, one file per slide
    ui/
      aurora.tsx         Aurora / Grid / Spot / Vignette   (adapted from 21st)
      mouse.tsx          pointer springs, parallax, tilt, cursor light
      brand.tsx          Pepay + BNBPay marks, token chips
      primitives.tsx     Stagger, Item, Eyebrow, Tag, Counter, Shimmer
public/                  brand assets
```

## Editing content

All copy lives inside the individual slide files as plain arrays at the top —
`GAPS` in `S04Gaps.tsx`, `PRODUCTS` in `S05Pepay.tsx`, `PHASES` in
`S09Partnership.tsx`, and so on. Slide order and the footer labels are in
`src/components/deck/slides/index.ts`.

## A note on the numbers

Every Virtuals figure in the deck is their own published metric, and every claim
about a gap is cited to their whitepaper or to ERC-8183 — sources are listed at
the end of `STRATEGY.md`. The market model on slide 8 is explicitly labelled as
modelled, with its assumptions printed on the slide. Product status tags on slide
5 are honest about what is Live versus Beta. This matters: the audience will
check, and one inflated claim costs the partnership.
