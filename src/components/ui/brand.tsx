"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useParallax } from "./mouse"

/**
 * ── SWAP THE FROG IN HERE ────────────────────────────────────────────────
 * Drop the frog artwork at `public/pepay-frog.png` and flip this to true.
 * Everything else in the deck picks it up automatically — the hero mark,
 * the product-stack slide, and the closing slide all read from `PEPAY_MARK`.
 */
// Set back to true once public/pepay-frog.png exists. Left false so the deck
// loads with a clean console — the fallback works either way, but it costs a
// 404 on every slide that renders the mark.
export const USE_FROG = false
export const PEPAY_MARK = USE_FROG ? "/pepay-frog.png" : "/pepay-mark.png"
const PEPAY_FALLBACK = "/pepay-mark.png"

/** Pepay mark with a live specular sheen and cursor parallax. */
export function PepayMark({
  size = 96,
  className,
  parallax = 0,
  float = true,
  glow = true,
}: {
  size?: number
  className?: string
  parallax?: number
  float?: boolean
  glow?: boolean
}) {
  const p = useParallax(parallax)

  return (
    <motion.div
      style={{ x: p.x, y: p.y, width: size, height: size }}
      className={cn("relative shrink-0", className)}
      animate={float ? { translateY: [0, -9, 0] } : undefined}
      transition={
        float
          ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    >
      {glow ? (
        <div
          aria-hidden
          className="absolute -inset-[28%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.55) 0%, transparent 66%)",
            filter: "blur(18px)",
          }}
        />
      ) : null}

      <div
        className="gpu relative h-full w-full overflow-hidden"
        style={{ borderRadius: size * 0.235 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PEPAY_MARK}
          alt="Pepay Labs"
          className="h-full w-full object-cover"
          onError={(e) => {
            const el = e.currentTarget
            if (el.src.endsWith(PEPAY_FALLBACK)) return
            el.src = PEPAY_FALLBACK
          }}
        />
        {/* specular sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 opacity-45"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)",
            animation: "sweep 5.5s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/12 ring-inset"
        />
      </div>
    </motion.div>
  )
}

/** BNBPay wordmark — the product brand, distinct from the Pepay Labs house brand. */
export function BnbPayMark({
  className,
  height = 26,
}: {
  className?: string
  height?: number
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/bnbpay-wordmark.png"
      alt="BNBPay"
      style={{ height }}
      className={cn("w-auto object-contain", className)}
    />
  )
}

/**
 * Official Virtuals lockup, loaded as vector (never rasterised).
 * `virtuals-logo-dark.svg` is the supplied SVG with only the wordmark fill
 * lifted off #236D66 for legibility on black — the mark keeps its real
 * #44BCC3 → #236D66 gradient untouched.
 */
export function VirtualsLogo({
  height = 34,
  className,
}: {
  height?: number
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/virtuals-logo-dark.svg"
      alt="Virtuals Protocol"
      style={{ height }}
      className={cn("w-auto object-contain", className)}
    />
  )
}

/** The Virtuals symbol on its own — used where a wordmark would be too heavy. */
export function VirtualsIcon({
  size = 20,
  className,
}: {
  size?: number
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/virtuals-removebg-preview.png"
      alt="Virtuals Protocol"
      style={{ width: size, height: size }}
      className={cn("object-contain", className)}
    />
  )
}

/**
 * The partnership lockup. Equal optical weight on both sides and a generous,
 * symmetrical gap — neither brand may read as subordinate to the other.
 */
export function Lockup({
  size = 40,
  className,
}: {
  size?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-[clamp(1.4rem,3.4vw,3.2rem)]",
        className,
      )}
    >
      {/* The wordmark is set larger than its nominal size so it holds the same
          optical weight as the Pepay mark plus its wordmark beside it. */}
      <VirtualsLogo height={size * 1.4} />
      <span
        aria-hidden
        className="h-[clamp(1.6rem,3vw,2.8rem)] w-px shrink-0 bg-line-2"
      />
      <div className="flex items-center gap-[clamp(0.6rem,1.2vw,1rem)]">
        <PepayMark size={size} float={false} parallax={-8} />
        <span
          className="font-medium tracking-[-0.03em] text-fg"
          style={{ fontSize: size * 0.62 }}
        >
          Pepay
        </span>
      </div>
    </div>
  )
}

/** Token chips used on the multi-token settlement slides. */
export const TOKENS = [
  { src: "/usdt.png", label: "USDT" },
  { src: "/usdc.png", label: "USDC" },
  { src: "/USD1.png", label: "USD1" },
  { src: "/wusd.png", label: "WUSD" },
  { src: "/xusd-removebg-preview.png", label: "XUSD" },
  { src: "/bnblogo.png", label: "BNB" },
]

export function TokenChip({
  src,
  label,
  size = 30,
}: {
  src: string
  label: string
  size?: number
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-line-2 bg-white/[0.03] py-1 pr-3 pl-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        width={size}
        height={size}
        className="rounded-full object-contain"
        style={{ width: size, height: size }}
      />
      <span className="text-[11.5px] font-medium tracking-wide text-fg-dim">
        {label}
      </span>
    </div>
  )
}
