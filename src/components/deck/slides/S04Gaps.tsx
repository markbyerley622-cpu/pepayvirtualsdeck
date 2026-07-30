"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Cite } from "@/components/ui/primitives"
import { MergeIntoStream } from "../visuals"

export function S04Gaps() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.15)" size={720} />
          <Spot className="bottom-[-32%] left-1/2 -translate-x-1/2" color="rgba(21,68,196,0.26)" size={1000} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="Today's money" b="was built for humans." />}
        support="Monthly cycles, business hours, and a legal entity to sign the forms."
        visual={<MergeIntoStream />}
        cite={
          <Cite source="ERC-8183, the agentic commerce standard">
            Machine payments today are discrete. A job completes, then ends —
            duration is not part of the model
          </Cite>
        }
      />
    </Slide>
  )
}
