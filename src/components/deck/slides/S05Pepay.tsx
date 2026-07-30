"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot, EdgeGlow } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { FinancialLife } from "../visuals"

/**
 * The spine of the deck. Every other slide is evidence for this one, and it is
 * the only slide that gets no citation — an idea this simple shouldn't need a
 * footnote to survive.
 */
export function S05Pepay() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <EdgeGlow />
          <CursorLight color="rgba(37,99,235,0.16)" size={760} />
          <Spot className="bottom-[-30%] left-[-12%]" color="rgba(11,42,117,0.32)" size={920} />
        </>
      }
    >
      <OneIdea
        layout="split"
        headline={
          <Versus a="AI agents don't need better wallets." b="They need financial lives." />
        }
        support="A wallet holds money. A life earns, spends, saves and settles it."
        visual={<FinancialLife />}
      />
    </Slide>
  )
}
