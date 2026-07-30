"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { createContext, useContext, useEffect, useRef, type ReactNode } from "react"

/**
 * A single pointer signal for the whole deck.
 *
 * One listener at the root feeds two normalised springs (-0.5 → 0.5 on each
 * axis). Slides subscribe via `useParallax(depth)`. Doing it once — rather than
 * per-component — is what keeps cursor motion at display refresh rate no matter
 * how many layers are reacting to it.
 */

type Ctx = {
  nx: MotionValue<number>
  ny: MotionValue<number>
  px: MotionValue<number>
  py: MotionValue<number>
}

const MouseCtx = createContext<Ctx | null>(null)

export function MouseProvider({ children }: { children: ReactNode }) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rawPX = useMotionValue(0)
  const rawPY = useMotionValue(0)

  const spring = { stiffness: 110, damping: 22, mass: 0.4 }
  const nx = useSpring(rawX, spring)
  const ny = useSpring(rawY, spring)
  const px = useSpring(rawPX, { stiffness: 260, damping: 34, mass: 0.5 })
  const py = useSpring(rawPY, { stiffness: 260, damping: 34, mass: 0.5 })

  useEffect(() => {
    let frame = 0
    const onMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        rawX.set(e.clientX / window.innerWidth - 0.5)
        rawY.set(e.clientY / window.innerHeight - 0.5)
        rawPX.set(e.clientX)
        rawPY.set(e.clientY)
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [rawX, rawY, rawPX, rawPY])

  return (
    <MouseCtx.Provider value={{ nx, ny, px, py }}>{children}</MouseCtx.Provider>
  )
}

export function useMouse() {
  const ctx = useContext(MouseCtx)
  if (!ctx) throw new Error("useMouse must be used inside <MouseProvider>")
  return ctx
}

/** Translate by `depth` pixels at the viewport edges. Negative depth inverts. */
export function useParallax(depth = 12) {
  const { nx, ny } = useMouse()
  return {
    x: useTransform(nx, (v) => v * depth * 2),
    y: useTransform(ny, (v) => v * depth * 2),
  }
}

/** Wrap any element to give it cursor parallax without touching its layout. */
export function Parallax({
  depth = 12,
  children,
  className,
}: {
  depth?: number
  children: ReactNode
  className?: string
}) {
  const p = useParallax(depth)
  return (
    <motion.div style={{ x: p.x, y: p.y }} className={className}>
      {children}
    </motion.div>
  )
}

/** Ambient light that tracks the cursor. One per slide at most. */
export function CursorLight({
  color = "rgba(37,99,235,0.16)",
  size = 620,
}: {
  color?: string
  size?: number
}) {
  const { px, py } = useMouse()
  const x = useTransform(px, (v) => v - size / 2)
  const y = useTransform(py, (v) => v - size / 2)

  return (
    <motion.div
      aria-hidden
      className="gpu pointer-events-none absolute top-0 left-0 z-0"
      style={{
        x,
        y,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 62%)`,
      }}
    />
  )
}

/** Card that tilts toward the cursor. Used for the product tiles. */
export function TiltCard({
  children,
  className,
  strength = 7,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 240, damping: 20 })
  const sy = useSpring(my, { stiffness: 240, damping: 20 })

  const rotateX = useTransform(sy, (v) => -v * strength)
  const rotateY = useTransform(sx, (v) => v * strength)

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onPointerLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
