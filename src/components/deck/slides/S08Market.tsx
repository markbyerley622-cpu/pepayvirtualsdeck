"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Cite } from "@/components/ui/primitives"
import { BusinessAnatomy, MiniArchitecture } from "../visuals"

/**
 * The payoff for slide 3. The identical four-quadrant grid returns, now with
 * ownership attributed — Capital is theirs, the other three are ours. The
 * partnership explains itself without a sentence of argument.
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
        visual={
          <div className="flex flex-col gap-[clamp(1.2rem,3vh,2.2rem)]">
            <BusinessAnatomy attributed />
            <MiniArchitecture />
          </div>
        }
        cite={
          <Cite source="whitepaper.virtuals.io">
            Agent Card covers &ldquo;purchases, subscriptions, and any
            merchant-facing flow&rdquo; — the spend side. Pepay adds earn, manage
            and settle. Fiat connectivity is roadmap, not live today
          </Cite>
        }
      />
    </Slide>
  )
}
