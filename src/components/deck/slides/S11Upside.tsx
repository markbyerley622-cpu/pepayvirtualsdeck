"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { GrowthStair } from "../visuals"

/**
 * The only slide in the deck where Pepay does not appear.
 *
 * Deliberate: this one belongs entirely to Virtuals. No fees, no take rate, no
 * capture — the metric at the top of the staircase is theirs, and the argument
 * is that the partnership raises it.
 */
export function S11Upside() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.13)" size={700} />
          <Spot className="bottom-[-28%] left-[-14%]" color="rgba(21,68,196,0.26)" size={900} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={
          <Versus a="We don't capture the agent economy." b="We compound it." />
        }
        support="Viable economics at every job size means more services, more jobs, higher aGDP."
        visual={<GrowthStair />}
      />
    </Slide>
  )
}
