"use client"

import { motion } from "framer-motion"
import { Slide } from "../Slide"
import { Particles, Spot, EdgeGlow } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { Lockup } from "@/components/ui/brand"
import { EASE } from "@/components/ui/primitives"
import { FinaleWords } from "../visuals"

/**
 * Staged reveal, ending on Value rather than Finance — finance is the
 * mechanism, value creation is the destination, and it is the one word that
 * belongs to both companies equally.
 */
export function S10Close() {
  return (
    <Slide
      grid={false}
      backdrop={
        <>
          <Particles count={130} />
          <EdgeGlow />
          <CursorLight color="rgba(37,99,235,0.2)" size={880} />
          <Spot className="-bottom-80 left-1/2 -translate-x-1/2" color="rgba(21,68,196,0.36)" size={1200} />
        </>
      }
    >
      <div className="flex flex-col items-center gap-[clamp(2.4rem,7vh,5rem)] text-center">
        <FinaleWords />

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2, duration: 0.9, ease: EASE }}
          className="rule h-px w-full max-w-[440px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.9, ease: EASE }}
        >
          <Lockup size={48} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 0.9, ease: EASE }}
          className="max-w-[24ch] text-[clamp(1.05rem,2.2vw,2.2rem)] leading-snug font-medium tracking-[-0.035em] text-fg"
        >
          The financial infrastructure behind Agentic GDP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.85, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[clamp(0.82rem,1vw,1.05rem)] text-fg-mute"
        >
          <a href="https://pepay.io" className="transition-colors hover:text-pep-300">
            pepay.io
          </a>
          <span className="text-fg-faint">·</span>
          <a href="mailto:contact@pepay.io" className="transition-colors hover:text-pep-300">
            contact@pepay.io
          </a>
        </motion.div>
      </div>
    </Slide>
  )
}
