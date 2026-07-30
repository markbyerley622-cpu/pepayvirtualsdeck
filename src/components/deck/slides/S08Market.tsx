"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { StackFlow } from "../visuals"

/**
 * Deliberately the emptiest slide in the deck.
 *
 * This is where the fit has to become obvious, and clarity is what persuades a
 * founder — not evidence. The quadrant grid and the citation that used to live
 * here were both removed: nothing on this slide makes a challengeable claim, so
 * nothing on it needs a footnote.
 */
export function S08Market() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.12)" size={660} />
          <Spot className="bottom-[-28%] right-[-14%]" color="rgba(11,42,117,0.3)" size={900} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={
          <Versus a="Virtuals creates agent businesses." b="Pepay makes them economically active." />
        }
        support="You solved capital formation. Together we solve cash flow."
        visual={<StackFlow />}
      />
    </Slide>
  )
}
