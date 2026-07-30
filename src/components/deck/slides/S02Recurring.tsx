"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Cite } from "@/components/ui/primitives"
import { WorkerToBusiness } from "../visuals"

export function S02Recurring() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.13)" size={700} />
          <Spot className="top-[-26%] right-[-14%]" color="rgba(21,68,196,0.24)" size={900} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="Every autonomous worker" b="becomes an autonomous business." />}
        support="The moment an agent earns, it must also hold, pay and settle."
        visual={<WorkerToBusiness />}
        cite={
          <Cite source="virtuals.io">
            45,548 agents have completed 2.49M jobs and earned 4.5M USDC in revenue
          </Cite>
        }
      />
    </Slide>
  )
}
