"use client"

import { motion } from "framer-motion"
import { Slide } from "../Slide"
import { Particles, Spot, EdgeGlow } from "@/components/ui/aurora"
import { CursorLight, Parallax } from "@/components/ui/mouse"
import { Cite, EASE } from "@/components/ui/primitives"
import { ValueLoop } from "../visuals"

/** Typography carries this one. Two clauses, one loop that never stops. */
export function S09Partnership() {
  return (
    <Slide
      grid={false}
      backdrop={
        <>
          <Particles count={110} />
          <EdgeGlow />
          <CursorLight color="rgba(37,99,235,0.18)" size={820} />
          <Spot className="top-[-32%] left-1/2 -translate-x-1/2" color="rgba(21,68,196,0.3)" size={1100} />
        </>
      }
    >
      <div className="flex flex-col items-center gap-[clamp(2.2rem,6.5vh,4.6rem)] text-center">
        <Parallax depth={8}>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.15, ease: EASE }}
            className="display-tight text-[clamp(2.3rem,7.4vw,7.8rem)]"
          >
            <span className="text-gradient">Agents create value.</span>
            <br />
            <span className="text-gradient-pep">Pepay keeps it moving.</span>
          </motion.h2>
        </Parallax>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: EASE }}
          className="w-full"
        >
          <ValueLoop />
        </motion.div>

        <Cite source="virtuals.io">
          481.79M aGDP settled to date · 2.49M jobs · 15.18B 30-day volume
        </Cite>
      </div>
    </Slide>
  )
}
