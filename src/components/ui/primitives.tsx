"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------------------------------------------------------------- motion --- */

/** Shared easing. One curve across the deck keeps the whole thing feeling like
 *  a single object rather than ten separate animations. */
export const EASE = [0.16, 1, 0.3, 1] as const

export const rise = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.07,
}: {
  children: ReactNode
  className?: string
  delay?: number
  gap?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function Item({
  children,
  className,
  duration = 0.8,
}: {
  children: ReactNode
  className?: string
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      variants={rise}
      transition={{ duration, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ type --- */

export function Eyebrow({
  children,
  tone = "pep",
  className,
}: {
  children: ReactNode
  tone?: "pep" | "bnb" | "mute"
  className?: string
}) {
  return (
    <div
      className={cn(
        "eyebrow flex items-center gap-2.5",
        tone === "pep" && "text-pep-300",
        tone === "bnb" && "text-bnb",
        tone === "mute" && "text-fg-mute",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "pep" && "bg-pep-400",
          tone === "bnb" && "bg-bnb",
          tone === "mute" && "bg-fg-faint",
        )}
      />
      {children}
    </div>
  )
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[62ch] text-[clamp(0.95rem,1.15vw,1.2rem)] leading-relaxed text-fg-dim">
      {children}
    </p>
  )
}

/* --------------------------------------------------------------- surfaces --- */

export function Panel({
  children,
  className,
  glow,
}: {
  children: ReactNode
  className?: string
  glow?: "pep" | "bnb"
}) {
  return (
    <div
      className={cn(
        "surface surface-lift rounded-2xl",
        glow === "pep" && "glow-pep",
        glow === "bnb" && "glow-bnb",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Tag({
  children,
  tone = "line",
}: {
  children: ReactNode
  tone?: "line" | "pep" | "bnb" | "dim"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-[3px] text-[10.5px] font-medium tracking-wide whitespace-nowrap",
        tone === "line" && "border-line-2 text-fg-mute",
        tone === "dim" && "border-line text-fg-faint",
        tone === "pep" && "border-pep-500/40 bg-pep-500/10 text-pep-200",
        tone === "bnb" && "border-bnb/35 bg-bnb/10 text-bnb",
      )}
    >
      {children}
    </span>
  )
}

/* ---------------------------------------------------------------- numbers --- */

/** Counts up once on mount. Tabular figures so the layout never jitters. */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.9,
  className,
}: {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, {
    duration: duration * 1000,
    bounce: 0,
  })

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])

  useEffect(() => {
    return spring.on("change", (v) => {
      if (!ref.current) return
      ref.current.textContent =
        prefix +
        v.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) +
        suffix
    })
  }, [spring, decimals, prefix, suffix])

  return (
    <span ref={ref} className={cn("num", className)}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function Stat({
  value,
  label,
  sub,
  tone = "fg",
}: {
  value: ReactNode
  label: string
  sub?: string
  tone?: "fg" | "pep" | "bnb"
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={cn(
          "num text-[clamp(1.6rem,3.1vw,2.9rem)] font-semibold",
          tone === "fg" && "text-fg",
          tone === "pep" && "text-pep-300",
          tone === "bnb" && "text-bnb",
        )}
      >
        {value}
      </div>
      <div className="text-[11px] font-medium tracking-[0.13em] text-fg-mute uppercase">
        {label}
      </div>
      {sub ? <div className="text-[11px] text-fg-faint">{sub}</div> : null}
    </div>
  )
}

/**
 * Footnote citation. Deliberately small and low-contrast — it exists so a
 * founder can see the homework was done, not to be read aloud from the stage.
 */
export function Cite({
  children,
  source,
}: {
  children: ReactNode
  source?: string
}) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="text-[clamp(9.5px,0.72vw,11px)] leading-relaxed text-fg-faint"
    >
      {children}
      {source ? (
        <>
          {" — "}
          <span className="text-fg-faint/70">{source}</span>
        </>
      ) : null}
    </motion.p>
  )
}

/* ----------------------------------------------------------------- misc ---- */

/** Adapted from 21st.dev `text-shimmer`. */
export function Shimmer({
  children,
  className,
  duration = 3,
}: {
  children: string
  className?: string
  duration?: number
}) {
  const spread = children.length * 2
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        className,
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      style={{
        backgroundImage:
          `linear-gradient(90deg,transparent calc(50% - ${spread}px),#ffffff,transparent calc(50% + ${spread}px)),` +
          `linear-gradient(#6b7789,#6b7789)`,
        backgroundSize: "250% 100%, auto",
        backgroundRepeat: "no-repeat, padding-box",
      }}
    >
      {children}
    </motion.span>
  )
}

/** Animated dashed connector — used for value-flow diagrams. */
export function FlowLine({
  d,
  color = "var(--color-pep-400)",
  delay = 0,
  width = 1.5,
}: {
  d: string
  color?: string
  delay?: number
  width?: number
}) {
  return (
    <>
      <path d={d} stroke="rgba(255,255,255,0.09)" strokeWidth={width} fill="none" />
      <path
        d={d}
        stroke={color}
        strokeWidth={width}
        fill="none"
        strokeDasharray="5 7"
        style={{
          animation: `flow 1.1s linear infinite`,
          animationDelay: `${delay}s`,
          filter: `drop-shadow(0 0 5px ${color})`,
        }}
      />
    </>
  )
}
