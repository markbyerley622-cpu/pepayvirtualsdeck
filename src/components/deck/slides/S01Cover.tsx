"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot, EdgeGlow } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"

/**
 * Opens on economics, not on AI — every deck opens on AI. The support line is
 * the "why now": talking was the last generation's problem, transacting is this
 * one's.
 */
export function S01Cover() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <EdgeGlow />
          <CursorLight color="rgba(37,99,235,0.16)" size={820} />
          <Spot className="-bottom-80 left-1/2 -translate-x-1/2" color="rgba(21,68,196,0.32)" size={1150} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="AI agents are becoming" b="economic actors." />}
        support="The first generation of agents could talk. The next must transact."
      />
    </Slide>
  )
}
