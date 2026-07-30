# Phase Two — Deck design specification

A founder-to-founder partnership narrative. One idea per slide, readable in
three seconds.

---

## The spine

> **AI agents don't need better wallets. They need financial lives.**

Everything sits underneath that line. Treasury, payroll, streaming, invoicing,
recurring revenue, settlement, vesting, multi-token routing — those aren't
separate features being sold, they're the parts of a financial life. The deck
never presents them as a catalogue.

It lands on **slide 5**, the exact centre.

## The arc

The deck is structured as a discovery, not an assertion. **Virtuals does not
appear until slide 7** — by which point the problem has been established
entirely on its own terms, and the conclusion is something the room works out
for itself rather than something being argued at them.

```
1  AI became a workforce                    ← the shift
2  Workers become businesses                ← the consequence
3  Every business runs on four things       ← the requirement
4  Today's money was built for humans       ← the friction
5  Agents need financial lives              ← THE PRIMITIVE
6  Pepay is the execution layer for value   ← the answer
─────────────────────────────────────────────  Virtuals enters here
7  Virtuals coordinates intelligence.
   Pepay coordinates value.                 ← the fit
8  Virtuals tokenises. Pepay monetises.     ← the division of labour
9  Agents create value. Pepay keeps it moving  ← the engine
10 Identity. Work. Capital. Commerce. Finance. ← the inevitability
```

The header chrome carries the same reveal: Pepay alone for the first six slides,
then the Virtuals logo animates in beside it from slide 7 onward.

## Primitives, not products

Founders think in primitives. Slide 6 therefore introduces Pepay as **five
verbs** — Move, Hold, Bill, Pay, Settle — not as nine product names. Products
are evidence, and they live in `STRATEGY.md`.

Slide 8 makes the division of labour explicit and memorable:

> **Virtuals tokenises agents. Pepay monetises them.**
> You solved capital formation. We solve cash flow.

Cash flow is the cleaner claim than treasury. Every autonomous business has
revenue, expenses, treasury and capital; Virtuals has built capital formation
extremely well, and cash flow is the unclaimed half.

## Language rotation

"Financial operating system" is a closing line, not a refrain. It appears
**exactly once in the entire deck**, as the final sentence of slide 10. Used once
it keeps its weight; used six times it becomes wallpaper. Elsewhere the deck
rotates: *execution layer for value*, *cash flow*, *economic engine*, *financial
life*, *value coordination*.

## Framing: extend, never correct

The words *missing*, *gap*, and *lacks* appear nowhere. Every claim is phrased as
what the partnership unlocks. Slide 8 states outright that nothing is replaced.

The rhetorical device throughout is `<Versus>`: one clause in white, the other in
Pepay blue, stacked. It appears on nine of ten slides, so the colour itself comes
to mean *the part we add*. Because both clauses are true statements about two
different things, there is nothing to argue with.

## Evidence, not assertion

Five slides carry a `<Cite>` footnote — 10px, low contrast, visible but never
read aloud.

| Slide | Citation |
|---|---|
| 02 | 45,548 agents · 2.49M jobs · 4.5M USDC revenue |
| 04 | ERC-8183 job states, and that duration is not modelled |
| 07 | EconomyOS primitives and ACP's four phases, settled in USDC |
| 08 | Agent Card's exact scope — **plus "fiat connectivity is roadmap, not live today"** |
| 09 | 481.79M aGDP · 2.49M jobs · 15.18B 30-day volume |

Slide 8's footnote is the important one: it's where the deck volunteers a limit
on its own claims. That is what makes the other nine credible. **The deck never
claims Pepay provides banking**, because it doesn't.

## Design language

| Decision | Rule |
|---|---|
| Headline | ≤ 12 words |
| Supporting copy | ≤ 18 words — `console.warn` in dev if exceeded |
| Structure | One eyebrow, one headline, one line, one visual. No slot for more. |
| Light | One particle field + one spot + one cursor light per slide. Never more. |
| Type | One family. Display runs to `8vw` at `-0.045em` tracking, `0.92` line-height. |
| Motion | One easing curve across all ten slides. |

```
ink        #05070b   canvas — deep black, never lifted
fg         #f4f7fb   headline      fg-mute  #6b7789  supporting line
pep-300    #60a5fa   ours / what the partnership adds
teal       #44BCC3   theirs — only ever inside the official Virtuals mark
```

Two brand colours, never mixed in a gradient. BNBPay yellow is retired from the
deck — a third accent would dilute the one meaning that matters.

**No crypto gradients.** Black, one hairline grid at 3.2% white, a drifting
particle field, one soft light, one glowing top edge. No gradient mesh anywhere.

## Motion reveals ideas, it does not decorate

One easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) across the whole deck, so ten
slides read as one object. Headlines enter with a 26px rise and an 8–10px blur
clearing — focus pulling, not sliding. Cursor parallax is inverted by z-order:
marks move *against* the pointer, headlines *with* it, which creates apparent
depth.

The particle field runs on one canvas rather than DOM nodes, so density costs a
single composited layer instead of per-frame layout; count scales with viewport
area, and each particle twinkles on its own phase so the field never reads as
static noise. Animated layers are GPU-composited via `translateZ(0)`, pointer
events are rAF-throttled, and everything respects `prefers-reduced-motion`.

Dense slides scale down uniformly to fit the viewport rather than clipping or
scrolling, so a projector at 1024×768 needs no separate layout.

## The two visuals that matter

**Slide 5 — the financial life.** Eight stages arranged as a ring with a
travelling pulse: earns, receives, pays other agents, streams payroll, invoices,
collects subscriptions, holds reserves, settles. A closed loop, so it reads as a
life rather than a checklist.

**Slide 9 — the value loop.** Revenue → Treasury → Payroll → Subscriptions →
Settlement, with a wrap-around connector returning to revenue and a pulse
passing through each stage in turn. Deliberately *linear* geometry so it never
reads as the slide 5 ring repeated.

Both loop continuously, so they keep working while you talk.

## The Virtuals logo

Loaded from the supplied SVG as vector, never rasterised. The only modification
is the wordmark fill, lifted `#236D66 → #EAF7F6` for legibility on black — the
mark keeps its authentic `#44BCC3 → #236D66` gradient. It appears on slides 7, 8
and 10 and in the header from slide 7 onward, always at matched optical weight
with symmetrical whitespace against the Pepay mark, so neither brand reads as
subordinate.

## 21st.dev components used

Cloned from `github.com/serafimcloud/21st` and adapted — the originals target a
light/dark marketing site; this is a single-theme dark keynote.

| 21st source | Adapted as | Change |
|---|---|---|
| `aurora-background.tsx` | `ui/aurora.tsx` | Gradient mesh replaced entirely by the canvas particle field as the deck moved away from crypto gradients; `Grid`, `Spot`, `EdgeGlow`, `Vignette` retained |
| `text-shimmer.tsx` | `ui/primitives.tsx` → `<Shimmer>` | Ported `motion/react` → `framer-motion`; dark-only |
| `shimmer-button.tsx` | `sweep` keyframe | Reduced to the specular sweep on the Pepay mark |
| shadcn primitives | `<Tag>`, `<Panel>`, `.rule` | Rebuilt against the deck's tokens |
