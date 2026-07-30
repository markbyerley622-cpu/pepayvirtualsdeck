"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot, EdgeGlow } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Cite } from "@/components/ui/primitives"
import { IntelligenceAndValue } from "../visuals"

/**
 * Virtuals appears here for the first time — seven slides in, by which point the
 * problem has been established on its own terms. The conclusion gets discovered
 * rather than asserted.
 */
export function S07Integration() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <EdgeGlow tone="teal" />
          <CursorLight color="rgba(37,99,235,0.13)" size={700} />
          <Spot className="top-[-24%] left-[-14%]" color="rgba(21,68,196,0.24)" size={900} />
        </>
      }
    >
      <OneIdea
        layout="split"
        headline={
          <Versus a="Virtuals coordinates intelligence." b="Pepay coordinates value." />
        }
        support="Two halves of one economy, built to run side by side."
        visual={<IntelligenceAndValue />}
        cite={
          <Cite source="whitepaper.virtuals.io">
            EconomyOS gives every agent a wallet, card, email, token and compute.
            ACP runs Request → Negotiation → Transaction → Evaluation, settled in USDC
          </Cite>
        }
      />
    </Slide>
  )
}
