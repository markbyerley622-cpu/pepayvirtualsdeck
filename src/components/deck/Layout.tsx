"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { EASE } from "@/components/ui/primitives"
import { Parallax } from "@/components/ui/mouse"

/**
 * The one-idea slide.
 *
 * Deliberately rigid: an optional eyebrow, one headline, one supporting line,
 * one visual. There is no slot for a third block of text, because the format is
 * the argument — if a slide needs more, it should be two slides.
 *
 * Headline: <= 12 words.  Support: <= 18 words.  Enforced in dev.
 */
export function OneIdea({
  eyebrow,
  headline,
  support,
  visual,
  cite,
  layout = "stacked",
  align = "left",
}: {
  eyebrow?: string
  headline: ReactNode
  support?: string
  visual?: ReactNode
  /** Tiny sourced footnote. Evidence for the reader, never read aloud. */
  cite?: ReactNode
  layout?: "stacked" | "split"
  align?: "left" | "center"
}) {
  if (process.env.NODE_ENV !== "production" && support) {
    const words = support.trim().split(/\s+/).length
    if (words > 18) {
      console.warn(`[deck] support copy is ${words} words (max 18): "${support}"`)
    }
  }

  const centered = align === "center"

  const Copy = (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start",
      )}
    >
      {eyebrow ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className={cn(
            "eyebrow mb-[clamp(1.1rem,2.6vh,2rem)] flex items-center gap-2.5 text-pep-300",
          )}
        >
          <span className="h-px w-6 bg-pep-400" />
          {eyebrow}
        </motion.div>
      ) : null}

      <motion.h2
        initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.08, duration: 1.05, ease: EASE }}
        className={cn(
          "display-tight",
          layout === "split"
            ? "text-[clamp(2.1rem,5.2vw,5rem)]"
            : "text-[clamp(2.3rem,6.4vw,6.6rem)]",
          centered ? "max-w-[22ch]" : "max-w-[19ch]",
        )}
      >
        {headline}
      </motion.h2>

      {support ? (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.9, ease: EASE }}
          className={cn(
            "mt-[clamp(1.3rem,3.4vh,2.6rem)] max-w-[46ch] leading-snug text-fg-mute",
            layout === "split"
              ? "text-[clamp(0.95rem,1.28vw,1.35rem)]"
              : "text-[clamp(1rem,1.5vw,1.65rem)]",
          )}
        >
          {support}
        </motion.p>
      ) : null}
    </div>
  )

  const Footnote = cite ? (
    <div
      className={cn(
        "mt-[clamp(1.6rem,4vh,3rem)] max-w-[74ch]",
        centered && "mx-auto text-center",
      )}
    >
      {cite}
    </div>
  ) : null

  if (layout === "split") {
    return (
      <div className="flex flex-col">
        <div className="grid items-center gap-[clamp(2rem,5vw,5.5rem)] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          {Copy}
          {visual ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.42, duration: 1.1, ease: EASE }}
            >
              <Parallax depth={7}>{visual}</Parallax>
            </motion.div>
          ) : null}
        </div>
        {Footnote}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col",
        centered && "items-center",
      )}
    >
      {Copy}
      {visual ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 1.1, ease: EASE }}
          className="mt-[clamp(2.6rem,7.5vh,5.5rem)] w-full"
        >
          <Parallax depth={6}>{visual}</Parallax>
        </motion.div>
      ) : null}
      {Footnote}
    </div>
  )
}

/** Two words set against each other — the deck's recurring rhetorical device. */
export function Versus({
  a,
  b,
  className,
}: {
  a: ReactNode
  b: ReactNode
  className?: string
}) {
  return (
    <span className={className}>
      <span className="text-gradient">{a}</span>
      <br />
      <span className="text-gradient-pep">{b}</span>
    </span>
  )
}
