"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { ValueOperations } from "../visuals"

/**
 * Pepay's reveal, phrased as a property of economies rather than a product
 * announcement. The headline is a claim about how economies work; Pepay is
 * named quietly underneath as the thing that already does it.
 */
export function S06Stack() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.13)" size={680} />
          <Spot className="top-[-26%] right-[-16%]" color="rgba(21,68,196,0.24)" size={880} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="Every economy needs" b="an execution layer for value." />}
        support="Earn, allocate, move, pay, settle — the primitives of an agent economy."
        visual={<ValueOperations />}
      />
    </Slide>
  )
}
