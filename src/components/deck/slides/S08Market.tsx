"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { StackFlow } from "../visuals"

/**
 * The positioning sentence, stated exactly, on the emptiest slide in the deck.
 *
 * "Financial lives" is deliberately the same phrase as slide 5 — that slide
 * defines the term, this one applies it to the partnership. The callback is
 * what makes the conclusion feel earned rather than asserted.
 *
 * Clarity persuades founders, not evidence: nothing here makes a challengeable
 * claim, so nothing here carries a footnote.
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
          <Versus a="Virtuals creates autonomous businesses." b="Pepay gives them financial lives." />
        }
        support="You solved capital formation. Together we solve cash flow."
        visual={<StackFlow />}
      />
    </Slide>
  )
}
