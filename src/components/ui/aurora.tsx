"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Atmosphere.
 *
 * Deliberately austere: deep black, one hairline grid, a drifting particle
 * field, and a single soft light. No layered gradient meshes — the palette does
 * the work, not the backdrop.
 */

/** Fine engineering grid. Thin, low-contrast, masked to a soft ellipse. */
export function Grid({
  className,
  size = 72,
  fade = "radial-gradient(ellipse at 50% 42%, black 12%, transparent 74%)",
}: {
  className?: string
  size?: number
  fade?: string
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.032) 1px, transparent 1px)," +
          "linear-gradient(to bottom, rgba(255,255,255,0.032) 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    />
  )
}

/**
 * Soft drifting particle field on a canvas.
 *
 * A canvas keeps this to one composited layer no matter the particle count,
 * where the equivalent in DOM nodes would force layout work every frame.
 * Density scales with viewport area so a 4K display doesn't look sparse.
 */
export function Particles({
  count,
  color = "148, 190, 255",
  speed = 0.055,
  className,
}: {
  count?: number
  color?: string
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let w = 0
    let h = 0
    let dots: {
      x: number
      y: number
      r: number
      a: number
      vx: number
      vy: number
      tw: number
    }[] = []

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const n = count ?? Math.round(Math.min(150, (w * h) / 13000))
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.4,
        a: Math.random() * 0.42 + 0.06,
        vx: (Math.random() - 0.5) * speed,
        vy: -(Math.random() * speed + speed * 0.35),
        tw: Math.random() * Math.PI * 2,
      }))
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        d.tw += 0.011
        if (d.y < -10) d.y = h + 10
        if (d.x < -10) d.x = w + 10
        if (d.x > w + 10) d.x = -10

        // slow twinkle keeps the field from reading as static noise
        const alpha = d.a * (0.62 + 0.38 * Math.sin(d.tw))
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${alpha})`
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    build()
    if (reduced) {
      frame()
      cancelAnimationFrame(raf)
    } else {
      frame()
    }

    const ro = new ResizeObserver(build)
    ro.observe(canvas)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [count, color, speed])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  )
}

/** A single soft light source. One per slide, never more. */
export function Spot({
  className,
  color = "rgba(37,99,235,0.20)",
  size = 900,
}: {
  className?: string
  color?: string
  size?: number
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(24px)",
      }}
    />
  )
}

/** Clean glowing hairline along the top edge. Structure, not decoration. */
export function EdgeGlow({ tone = "pep" }: { tone?: "pep" | "teal" }) {
  const c = tone === "teal" ? "68,188,195" : "59,130,246"
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-px"
      style={{
        background: `linear-gradient(90deg, transparent, rgba(${c},0.55) 30%, rgba(${c},0.55) 70%, transparent)`,
        boxShadow: `0 0 18px 0 rgba(${c},0.35)`,
      }}
    />
  )
}

/** Top and bottom vignette so type never collides with the backdrop. */
export function Vignette() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(4,6,10,0.9) 0%, transparent 20%, transparent 74%, rgba(4,6,10,0.96) 100%)",
      }}
    />
  )
}
