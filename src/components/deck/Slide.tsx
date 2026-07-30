"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Grid, Vignette } from "@/components/ui/aurora"

/**
 * Fit-to-viewport.
 *
 * A deck has to survive a 4K studio display and a 13" laptop mirrored onto a
 * projector at 1024×768. Rather than clip dense slides or introduce a scrollbar
 * that fights the wheel-based navigation, we measure the content once it settles
 * and scale it down uniformly if it overruns the frame. Scale is only ever <= 1,
 * so nothing is upscaled and nothing is ever cut off.
 */
function useFit(deps: unknown[] = []) {
  const frame = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const measure = () => {
      const f = frame.current
      const c = content.current
      if (!f || !c) return
      // clientHeight includes padding, so subtract it to get usable space
      const cs = getComputedStyle(f)
      const avail =
        f.clientHeight -
        parseFloat(cs.paddingTop) -
        parseFloat(cs.paddingBottom)
      // transforms don't affect layout, so this is the true unscaled height
      const needed = c.scrollHeight
      if (!avail || !needed) return
      const next = Math.min(1, avail / needed)
      // ignore sub-pixel churn so the observer can't oscillate
      setScale((prev) => (Math.abs(prev - next) < 0.004 ? prev : next))
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (frame.current) ro.observe(frame.current)
    if (content.current) ro.observe(content.current)
    window.addEventListener("resize", measure)
    // fonts settling can change metrics after first paint
    const t = window.setTimeout(measure, 120)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
      window.clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { frame, content, scale }
}

/**
 * Every slide sits on the same shell: a fixed viewport frame with generous,
 * viewport-relative gutters and the same base grid texture. Backdrops are
 * composed per-slide via `backdrop`, so the deck reads as one system.
 */
export function Slide({
  children,
  backdrop,
  className,
  grid = true,
}: {
  children: ReactNode
  backdrop?: ReactNode
  className?: string
  grid?: boolean
}) {
  const { frame, content, scale } = useFit()

  return (
    <section className="relative h-full w-full overflow-hidden bg-ink">
      {grid ? <Grid /> : null}
      {backdrop}
      <Vignette />

      <div
        ref={frame}
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center",
          "px-[clamp(1.5rem,5.2vw,7rem)]",
          // top padding clears the header, which grew with the larger marks
          "pt-[clamp(6.5rem,11vh,8.5rem)] pb-[clamp(4.5rem,8vh,6.5rem)]",
          className,
        )}
      >
        <div
          className="w-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            transition: "transform 220ms ease-out",
          }}
        >
          <div ref={content} className="mx-auto w-full max-w-[1500px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
