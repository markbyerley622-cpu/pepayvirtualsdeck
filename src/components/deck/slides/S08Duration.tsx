"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Cite } from "@/components/ui/primitives"
import { MicroJobCost } from "../visuals"

/**
 * The economics slide, framed as maturation rather than criticism.
 *
 * One-shot escrow is the right way to start an economy — it establishes trust
 * between parties that have none. The only claim here is that it was designed
 * for a larger unit size than this economy actually runs at. Virtuals stays the
 * hero; duration is simply the next problem.
 */
export function S08Duration() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.13)" size={700} />
          <Spot className="top-[-24%] right-[-14%]" color="rgba(21,68,196,0.24)" size={900} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="The next agent economy" b="challenge is duration." />}
        support="2.49 million jobs. $4.5M earned. The average job pays $1.81."
        visual={<MicroJobCost />}
        cite={
          <Cite source="agent revenue and job counts per virtuals.io">
            One-shot settlement is how an economy starts — it creates trust
            between parties that have none. Continuity is how it matures
          </Cite>
        }
      />
    </Slide>
  )
}
