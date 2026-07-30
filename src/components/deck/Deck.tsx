"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { EASE } from "@/components/ui/primitives"
import { MouseProvider } from "@/components/ui/mouse"
import { VirtualsIcon } from "@/components/ui/brand"
import { SLIDES, VIRTUALS_REVEAL } from "./slides"

export function Deck() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const total = SLIDES.length
  const lock = useRef(0)

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next))
      setI((cur) => {
        if (clamped === cur) return cur
        setDir(clamped > cur ? 1 : -1)
        return clamped
      })
    },
    [total],
  )

  /* keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault()
          go(i + 1)
          break
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault()
          go(i - 1)
          break
        case "Home":
          go(0)
          break
        case "End":
          go(total - 1)
          break
        default:
          if (/^[1-9]$/.test(e.key)) go(Number(e.key) - 1)
          if (e.key === "0") go(9)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [i, go, total])

  /* wheel / trackpad — throttled so one gesture advances exactly one slide */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lock.current < 780) return
      if (Math.abs(e.deltaY) < 22 && Math.abs(e.deltaX) < 22) return
      lock.current = now
      go(i + (e.deltaY > 0 || e.deltaX > 0 ? 1 : -1))
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel)
  }, [i, go])

  const Current = SLIDES[i].component
  const num = String(i + 1).padStart(2, "0")

  return (
    <MouseProvider>
      <div className="relative h-[100svh] w-screen overflow-hidden bg-ink">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.985, y: dir * 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.01, y: dir * -14 }}
            transition={{ duration: 0.62, ease: EASE }}
          >
            <Current />
          </motion.div>
        </AnimatePresence>

        {/* click zones — left third goes back, the rest advances */}
        <button
          aria-label="Previous slide"
          onClick={() => go(i - 1)}
          className="absolute inset-y-0 left-0 z-30 w-[26%] cursor-w-resize focus:outline-none"
        />
        <button
          aria-label="Next slide"
          onClick={() => go(i + 1)}
          className="absolute inset-y-0 right-0 z-30 w-[74%] cursor-e-resize focus:outline-none"
        />

        {/* ---------------------------------------------------------- chrome */}
        <header className="pointer-events-none absolute inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(1.5rem,3.4vw,3.5rem)] py-[clamp(1.1rem,2vw,1.9rem)]">
          {/* The header holds the same reveal as the narrative: Pepay alone until
              Virtuals enters the story on slide 7, then the full lockup. */}
          <div className="pointer-events-auto flex items-center gap-3.5 opacity-80">
            <AnimatePresence initial={false}>
              {i >= VIRTUALS_REVEAL && (
                <motion.div
                  key="virtuals"
                  initial={{ opacity: 0, x: -10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: -10, width: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="flex items-center gap-3.5 overflow-hidden"
                >
                  <VirtualsIcon size={22} />
                  <span className="text-[12.5px] text-fg-faint">×</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pepay-mark.png"
              alt="Pepay Labs"
              className="h-[18px] w-[18px] rounded-[5px] shadow-[0_0_16px_-4px_rgba(37,99,235,0.9)]"
            />
            <span className="text-[12.5px] font-medium tracking-tight text-fg-dim">
              Pepay
            </span>
          </div>

          <div className="num text-[12px] tracking-widest text-fg-faint">
            <span className="text-fg-dim">{num}</span>
            <span className="mx-1.5">/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </header>

        {/* --------------------------------------------------------- footer */}
        <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-50 flex items-end justify-between gap-8 px-[clamp(1.5rem,3.4vw,3.5rem)] py-[clamp(1.1rem,2vw,1.7rem)]">
          <div className="hidden text-[11px] tracking-wide text-fg-faint sm:block">
            {SLIDES[i].label}
          </div>

          <nav className="pointer-events-auto flex flex-1 items-center justify-end gap-1.5">
            {SLIDES.map((s, idx) => (
              <button
                key={s.label}
                onClick={() => go(idx)}
                aria-label={`Slide ${idx + 1}: ${s.label}`}
                aria-current={idx === i}
                className="group relative h-6 max-w-[68px] flex-1 cursor-pointer"
              >
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded-full transition-all duration-500",
                    idx === i
                      ? "bg-pep-400 shadow-[0_0_12px_0_rgba(59,130,246,0.85)]"
                      : idx < i
                        ? "bg-white/22 group-hover:bg-white/40"
                        : "bg-white/8 group-hover:bg-white/22",
                  )}
                />
              </button>
            ))}
          </nav>
        </footer>

        <AnimatePresence>
          {i === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2.4, duration: 1 }}
              className="pointer-events-none absolute bottom-[clamp(3.4rem,6vw,5rem)] left-1/2 z-50 -translate-x-1/2 text-[11px] tracking-[0.14em] text-fg-faint uppercase"
            >
              Click, scroll or press → to advance
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MouseProvider>
  )
}
