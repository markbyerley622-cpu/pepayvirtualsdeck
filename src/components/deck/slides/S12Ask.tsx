"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot, EdgeGlow } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Cite } from "@/components/ui/primitives"
import { AskSteps } from "../visuals"

/**
 * The ask. Sized to be approved in the meeting rather than escalated after it.
 *
 * The citation states our stage plainly. A CTO will establish it within twenty
 * minutes of diligence either way, and volunteering it is what makes the rest
 * of the deck credible.
 */
export function S12Ask() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <EdgeGlow />
          <CursorLight color="rgba(37,99,235,0.15)" size={740} />
          <Spot className="top-[-26%] left-1/2 -translate-x-1/2" color="rgba(21,68,196,0.28)" size={1000} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="One integration. One agent." b="One proof point." />}
        support="A 90-day design partnership. Nothing migrates, nothing is committed."
        visual={<AskSteps />}
        cite={
          <Cite>
            The streaming primitive is on testnet and the CertiK audit is in
            progress. This is a design partnership, not a production dependency
          </Cite>
        }
      />
    </Slide>
  )
}
