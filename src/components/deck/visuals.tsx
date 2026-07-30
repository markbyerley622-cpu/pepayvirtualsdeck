"use client"

import { motion } from "framer-motion"
import { EASE } from "@/components/ui/primitives"
import { PepayMark, VirtualsIcon, VirtualsLogo } from "@/components/ui/brand"

/* ════════════════════════════════════ 02 · worker becomes a business ══════ */

/** One output versus many — a worker earns; a business also holds and pays. */
export function WorkerToBusiness() {
  const flows = ["Earns", "Holds", "Pays", "Bills", "Settles"]

  return (
    <div className="mx-auto w-full max-w-[940px]">
      <div className="grid items-center gap-[clamp(1rem,3vw,3rem)] md:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col items-center gap-[clamp(0.7rem,1.6vh,1.1rem)]">
          <div className="flex h-[clamp(84px,12vh,116px)] w-[clamp(84px,12vh,116px)] items-center justify-center rounded-full border border-white/14 bg-white/[0.03]">
            <span className="text-[clamp(0.76rem,0.98vw,0.98rem)] text-fg-dim">worker</span>
          </div>
          <span className="text-[clamp(0.72rem,0.9vw,0.9rem)] text-fg-faint">
            completes a task
          </span>
        </div>

        <span className="hidden text-[clamp(1rem,1.8vw,1.6rem)] text-fg-faint md:block">→</span>

        <div className="flex flex-col items-center gap-[clamp(0.7rem,1.6vh,1.1rem)]">
          <div className="relative flex h-[clamp(84px,12vh,116px)] w-[clamp(84px,12vh,116px)] items-center justify-center">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 68%)",
              }}
            />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-pep-500/45 bg-pep-500/[0.07]">
              <span className="text-[clamp(0.76rem,0.98vw,0.98rem)] font-medium text-pep-100">
                business
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {flows.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.09, duration: 0.55, ease: EASE }}
                className="rounded-md border border-pep-500/35 bg-pep-500/10 px-2 py-[3px] text-[clamp(10px,0.92vw,12px)] font-medium text-pep-100"
              >
                {f}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════ 03 · the anatomy of a business ══════ */

const ANATOMY = [
  { t: "Revenue", s: "money coming in" },
  { t: "Expenses", s: "money going out" },
  { t: "Treasury", s: "money held" },
  { t: "Capital", s: "money raised" },
]

/**
 * The bridge of the deck. Four quadrants, no attribution — the frame is posed
 * here and answered on slide 8, where the stack makes ownership obvious without
 * needing labels on this one.
 */
export function BusinessAnatomy() {
  return (
    <div className="mx-auto grid w-full max-w-[860px] grid-cols-2 gap-3">
      {ANATOMY.map((a, i) => (
        <motion.div
          key={a.t}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 + i * 0.11, duration: 0.7, ease: EASE }}
          className="flex flex-col gap-2 rounded-2xl border border-line bg-white/[0.025] px-[clamp(1rem,2vw,1.9rem)] py-[clamp(1rem,2.4vh,1.8rem)]"
        >
          <span className="text-[clamp(1.05rem,1.8vw,1.7rem)] font-medium tracking-[-0.03em] text-fg">
            {a.t}
          </span>
          <span className="text-[clamp(0.74rem,0.92vw,0.92rem)] text-fg-mute">
            {a.s}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

/* ══════════════════════════════ 08 · the stack ════════════════════════════ */

/**
 * The whole partnership as one image: their layer, an arrow, ours.
 *
 * Large and near-empty on purpose. This slide is where the fit becomes obvious,
 * and clarity is what persuades a founder — a denser diagram would only make
 * them read instead of understand.
 */
export function StackFlow() {
  const layers = [
    {
      head: "Virtuals",
      items: ["Identity", "Agents", "Jobs", "ACP"],
      tone: "v" as const,
    },
    {
      head: "Pepay",
      items: ["Revenue", "Expenses", "Treasury", "Settlement"],
      tone: "p" as const,
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col items-center">
      {/* What the two halves add up to, named before either of them */}
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
        className="mb-[clamp(0.9rem,2.4vh,1.7rem)] text-[clamp(10px,0.95vw,12px)] font-medium tracking-[0.2em] text-fg-mute uppercase"
      >
        Agent economy
      </motion.span>

      {layers.map((l, li) => (
        <div key={l.head} className="flex w-full flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + li * 0.5, duration: 0.9, ease: EASE }}
            className={
              "flex w-full flex-col items-center gap-[clamp(0.9rem,2.2vh,1.5rem)] rounded-2xl border px-[clamp(1.2rem,2.6vw,2.6rem)] py-[clamp(1.2rem,3vh,2.2rem)] " +
              (l.tone === "v"
                ? "border-[#44BCC3]/28 bg-[#44BCC3]/[0.05]"
                : "border-pep-500/30 bg-pep-500/[0.06]")
            }
          >
            <div className="flex items-center gap-2.5">
              {l.tone === "v" ? (
                <VirtualsIcon size={46} />
              ) : (
                <PepayMark size={38} float={false} glow={false} />
              )}
              <span
                className={
                  "text-[clamp(1.15rem,2.2vw,2.1rem)] font-semibold tracking-[-0.035em] " +
                  (l.tone === "v" ? "text-[#8FE0E4]" : "text-pep-100")
                }
              >
                {l.head}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-[clamp(1rem,2.4vw,2.2rem)] gap-y-2">
              {l.items.map((it, i) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + li * 0.5 + i * 0.08, duration: 0.6 }}
                  className="text-[clamp(0.85rem,1.35vw,1.35rem)] text-fg-dim"
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* A plus, never an arrow — these two compose, neither reports to the other */}
          {li === 0 ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="my-[clamp(0.55rem,1.8vh,1.2rem)] text-[clamp(1.1rem,2vw,1.9rem)] leading-none font-light text-fg-mute"
            >
              +
            </motion.span>
          ) : null}
        </div>
      ))}
    </div>
  )
}

/* ════════════════════════════════ 04 · batch money versus continuous ══════ */

/** Separate payments converge into one unbroken stream, on a loop. */
export function MergeIntoStream() {
  const N = 9
  const CYCLE = 6

  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-[clamp(0.9rem,2.2vh,1.6rem)]">
      <div className="relative h-[clamp(52px,8.5vh,80px)]">
        <div className="absolute inset-0 flex items-center">
          {Array.from({ length: N }).map((_, i) => {
            const spread = (i - (N - 1) / 2) * 13
            return (
              <motion.div
                key={i}
                className="h-full flex-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(37,99,235,0.5), rgba(11,42,117,0.45))",
                  border: "1px solid rgba(96,165,250,0.42)",
                }}
                animate={{
                  x: [spread, spread, 0, 0, spread],
                  borderRadius: ["6px", "6px", "0px", "0px", "6px"],
                }}
                transition={{
                  duration: CYCLE,
                  times: [0, 0.22, 0.46, 0.78, 1],
                  repeat: Infinity,
                  ease: EASE,
                }}
              />
            )
          })}
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[6px]"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: CYCLE,
            times: [0, 0.3, 0.5, 0.76, 0.92],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(147,197,253,0.95) 0 14px, rgba(37,99,235,0.32) 14px 34px)",
              animation: "flow 0.85s linear infinite",
              boxShadow: "0 0 32px -4px rgba(59,130,246,0.9)",
            }}
          />
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <motion.span
          className="text-[clamp(0.78rem,0.98vw,0.98rem)] text-fg-mute"
          animate={{ opacity: [1, 1, 0.25, 0.25, 1] }}
          transition={{ duration: CYCLE, times: [0, 0.24, 0.46, 0.78, 1], repeat: Infinity }}
        >
          money in batches
        </motion.span>
        <motion.span
          className="text-[clamp(0.78rem,0.98vw,0.98rem)] font-medium text-pep-300"
          animate={{ opacity: [0.25, 0.25, 1, 1, 0.25] }}
          transition={{ duration: CYCLE, times: [0, 0.24, 0.46, 0.78, 1], repeat: Infinity }}
        >
          money by the second
        </motion.span>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════ 05 · a financial life ═════════ */

const LIFE_STAGES = [
  "Earns revenue",
  "Receives payment",
  "Pays other agents",
  "Streams payroll",
  "Invoices customers",
  "Collects subscriptions",
  "Holds reserves",
  "Settles globally",
]

/** A closed loop, not a list of features. The whole deck in one image. */
export function FinancialLife() {
  const R = 39.5

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[clamp(330px,50vh,540px)]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="lc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1544c4" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r={R - 9} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.35" />

        <motion.circle
          cx="50" cy="50" r={R - 9}
          fill="none" stroke="url(#lc)" strokeWidth="0.9"
          strokeDasharray="30 160" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            opacity: { delay: 0.5, duration: 0.8 },
            rotate: { duration: 9, repeat: Infinity, ease: "linear" },
          }}
          style={{ originX: "50%", originY: "50%", filter: "drop-shadow(0 0 2px #60a5fa)" }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <span className="text-[clamp(1.1rem,2vw,1.9rem)] font-semibold tracking-[-0.035em] text-fg">
          agent
        </span>
        <span className="text-[clamp(9.5px,0.9vw,11.5px)] tracking-[0.15em] text-fg-mute uppercase">
          a financial life
        </span>
      </div>

      {LIFE_STAGES.map((label, i) => {
        const a = (i / LIFE_STAGES.length) * Math.PI * 2 - Math.PI / 2
        return (
          <motion.div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${50 + Math.cos(a) * R}%`,
              top: `${50 + Math.sin(a) * R}%`,
            }}
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + i * 0.09, duration: 0.6, ease: EASE }}
          >
            <span className="block whitespace-nowrap rounded-full border border-pep-500/30 bg-ink/90 px-2.5 py-1 text-[clamp(9.5px,0.95vw,12px)] font-medium text-pep-100 backdrop-blur-sm">
              {label}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

/* ═══════════════════════════════════════ 06 · the value primitives ════════ */

/**
 * Each verb carries exactly one grounding noun. Enough for a founder to answer
 * "what does Pepay actually provide?" without turning the slide into a feature
 * list. "Allocate" rather than "Manage" — allocation is an economic act, and
 * management is what the noun underneath already implies.
 */
const OPS = [
  { t: "Earn", s: "Payments" },
  { t: "Allocate", s: "Treasury" },
  { t: "Move", s: "Streaming" },
  { t: "Pay", s: "Commerce" },
  { t: "Settle", s: "Global rails" },
]
export function ValueOperations() {
  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-[clamp(1.4rem,3.4vh,2.6rem)]">
      <div className="grid w-full gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
        {OPS.map((o, i) => (
          <motion.div
            key={o.t}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.1, duration: 0.7, ease: EASE }}
            className="flex flex-col gap-2 rounded-2xl border border-pep-500/26 bg-pep-500/[0.05] px-[clamp(0.9rem,1.6vw,1.4rem)] py-[clamp(0.9rem,2vh,1.4rem)]"
          >
            <span className="text-[clamp(1.05rem,1.75vw,1.7rem)] font-semibold tracking-[-0.035em] text-pep-100">
              {o.t}
            </span>
            <span className="text-[clamp(0.68rem,0.85vw,0.86rem)] font-medium tracking-[0.1em] text-fg-mute uppercase">
              {o.s}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Attribution, not a headline — the primitives lead, the name follows.
          The line beneath is the deck's only credibility anchor: enough for a
          founder to know this is real infrastructure, with no product pitch and
          no claim that needs defending. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="flex items-center gap-2.5">
          <PepayMark size={22} float={false} glow={false} />
          <span className="text-[clamp(0.82rem,1.05vw,1.05rem)] font-medium tracking-[-0.02em] text-fg-dim">
            Pepay Labs
          </span>
        </div>
        <span className="text-[clamp(0.68rem,0.85vw,0.86rem)] text-fg-faint">
          Non-custodial payment infrastructure for EVM economies
        </span>
      </motion.div>
    </div>
  )
}

/* ═════════════════════════════ 07 · intelligence versus value ═════════════ */

/** The first slide on which Virtuals appears. */
export function IntelligenceAndValue() {
  return (
    <div className="grid w-full gap-[clamp(1rem,2.2vw,2rem)] md:grid-cols-2">
      <div className="flex flex-col gap-[clamp(0.9rem,2.2vh,1.6rem)] rounded-2xl border border-line bg-white/[0.02] p-[clamp(1.1rem,2.2vw,2rem)]">
        <VirtualsLogo height={40} />
        <span className="text-[clamp(1.05rem,1.8vw,1.7rem)] font-medium tracking-[-0.03em] text-fg">
          Coordinates intelligence
        </span>
        <svg viewBox="0 0 320 56" className="h-[clamp(40px,6.5vh,58px)] w-full">
          {[0, 1, 2].map((n) => (
            <motion.rect
              key={n}
              x={16 + n * 104} y={19} width={72} height={18} rx={4}
              fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)"
              animate={{ opacity: [0.28, 1, 0.28] }}
              transition={{ duration: 1.5, delay: n * 0.45, repeat: Infinity, repeatDelay: 0.85 }}
            />
          ))}
        </svg>
        <span className="text-[clamp(0.76rem,0.94vw,0.94rem)] text-fg-mute">
          Identity, jobs, discovery, evaluation, capital formation.
        </span>
      </div>

      <div className="flex flex-col gap-[clamp(0.9rem,2.2vh,1.6rem)] rounded-2xl border border-pep-500/28 bg-pep-500/[0.05] p-[clamp(1.1rem,2.2vw,2rem)]">
        <div className="flex items-center gap-2.5">
          <PepayMark size={34} float={false} glow={false} />
          <span className="text-[clamp(1.05rem,1.5vw,1.5rem)] font-medium tracking-[-0.03em] text-fg">
            Pepay
          </span>
        </div>
        <span className="text-[clamp(1.05rem,1.8vw,1.7rem)] font-medium tracking-[-0.03em] text-fg">
          Coordinates value
        </span>
        <svg viewBox="0 0 320 56" className="h-[clamp(40px,6.5vh,58px)] w-full">
          {[12, 24, 36, 48].map((y, n) => (
            <g key={y}>
              <line x1="16" y1={y} x2="304" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
              <line
                x1="16" y1={y} x2="304" y2={y}
                stroke="#60a5fa" strokeWidth="2" strokeDasharray="5 7"
                style={{
                  animation: "flow 1.05s linear infinite",
                  animationDelay: `${n * 0.16}s`,
                  filter: "drop-shadow(0 0 5px rgba(96,165,250,0.8))",
                }}
              />
            </g>
          ))}
        </svg>
        <span className="text-[clamp(0.76rem,0.94vw,0.94rem)] text-fg-mute">
          Revenue, expenses, reserves, settlement — continuously.
        </span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════ 08 · the economics of a $1.81 job ═══════ */

const PHASES = ["Request", "Negotiate", "Fund", "Submit", "Evaluate", "Settle"]

/**
 * Six coordination steps for one $1.81 job, then the same value as a stream.
 *
 * Framed as maturation, never as criticism. One-shot settlement is the correct
 * way to start an economy — it is how you establish trust between parties that
 * have none. The point is only that it was designed for a different unit size
 * than the one this economy actually runs at.
 */
export function MicroJobCost() {
  return (
    <div className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-[clamp(1.4rem,3.4vh,2.6rem)]">
      {/* one job, six steps */}
      <div className="flex w-full flex-col items-center gap-[clamp(0.7rem,1.8vh,1.2rem)]">
        <div className="flex items-baseline gap-3">
          <span className="num text-[clamp(2rem,4.2vw,4rem)] font-semibold text-fg">
            $1.81
          </span>
          <span className="text-[clamp(0.75rem,0.98vw,1rem)] text-fg-mute">
            the average completed job
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          {PHASES.map((p, i) => (
            <div key={p} className="flex items-center gap-1.5">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: EASE }}
                className="rounded-md border border-line-2 bg-white/[0.04] px-[clamp(0.5rem,1vw,0.9rem)] py-[clamp(0.35rem,0.9vh,0.6rem)] text-[clamp(0.68rem,0.92vw,0.92rem)] whitespace-nowrap text-fg-dim"
              >
                {p}
              </motion.span>
              {i < PHASES.length - 1 ? (
                <span className="text-[10px] text-fg-faint">→</span>
              ) : null}
            </div>
          ))}
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[clamp(0.72rem,0.92vw,0.92rem)] text-fg-mute"
        >
          Six coordination steps, repeated for every payment.
        </motion.span>
      </div>

      <div className="rule h-px w-full" />

      {/* the same value, continuous */}
      <div className="flex w-full flex-col items-center gap-[clamp(0.7rem,1.8vh,1.2rem)]">
        <div className="flex items-baseline gap-3">
          <span className="text-[clamp(2rem,4.2vw,4rem)] font-semibold tracking-[-0.035em] text-pep-200">
            continuous
          </span>
          <span className="text-[clamp(0.75rem,0.98vw,1rem)] text-fg-mute">
            the same value, over time
          </span>
        </div>

        <div className="relative h-[clamp(28px,4.5vh,44px)] w-full">
          <svg viewBox="0 0 1000 44" preserveAspectRatio="none" className="h-full w-full">
            {[11, 22, 33].map((y, n) => (
              <g key={y}>
                <line x1="0" y1={y} x2="1000" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
                <line
                  x1="0" y1={y} x2="1000" y2={y}
                  stroke="#60a5fa" strokeWidth="2" strokeDasharray="5 7"
                  style={{
                    animation: "flow 1.05s linear infinite",
                    animationDelay: `${n * 0.18}s`,
                    filter: "drop-shadow(0 0 5px rgba(96,165,250,0.8))",
                  }}
                />
              </g>
            ))}
          </svg>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-[clamp(0.72rem,0.92vw,0.92rem)] text-pep-300"
        >
          Opened once. No coordination cost per payment.
        </motion.span>
      </div>
    </div>
  )
}

/* ══════════════════════════════ 11 · what Virtuals gets ═══════════════════ */

const GROWTH = [
  "Viable economics at any job size",
  "More agent services",
  "More completed jobs",
  "More agent revenue",
  "Higher aGDP",
]

/**
 * An ascending staircase with a feedback return, not a ring — slides 5 and 10
 * already use circular geometry, and a third cycle would read as repetition.
 * Virtuals' metric sits at the top; Pepay appears nowhere on this slide.
 */
export function GrowthStair() {
  // Explicit fractions of a fixed-height track. Percentage heights inside an
  // auto-height flex parent resolve against nothing and collapse, which is what
  // made an earlier version of this render as a descending staircase.
  const STEP = [0.34, 0.5, 0.66, 0.82, 1]

  return (
    <div className="mx-auto w-full max-w-[900px]">
      <div className="flex justify-between gap-[clamp(0.3rem,0.9vw,0.8rem)]">
        {GROWTH.map((g, i) => {
          const last = i === GROWTH.length - 1
          return (
            <div key={g} className="flex flex-1 flex-col">
              {/* fixed-height track keeps every bar on the same baseline */}
              <div className="flex h-[clamp(80px,17vh,190px)] w-full items-end">
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.13, duration: 0.8, ease: EASE }}
                  style={{ height: `${STEP[i] * 100}%`, originY: 1 }}
                  className={
                    "w-full rounded-t-lg " +
                    (last
                      ? "bg-gradient-to-t from-pep-700/40 to-pep-400/70 shadow-[0_0_28px_-6px_rgba(59,130,246,0.9)]"
                      : "bg-gradient-to-t from-white/[0.04] to-white/[0.16]")
                  }
                />
              </div>

              {/* baseline rule the bars sit on */}
              <div
                className={
                  "h-px w-full " + (last ? "bg-pep-400/70" : "bg-white/15")
                }
              />

              {/* fixed-height label row so wrapping never shifts a bar */}
              <div className="flex h-[clamp(2.4rem,5vh,3.2rem)] items-start justify-center pt-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.13, duration: 0.6 }}
                  className={
                    "text-center text-[clamp(0.6rem,0.84vw,0.86rem)] leading-snug " +
                    (last ? "font-medium text-pep-200" : "text-fg-mute")
                  }
                >
                  {g}
                </motion.span>
              </div>
            </div>
          )
        })}
      </div>

      {/* the return: higher aGDP funds the next generation of agents */}
      <div className="relative mt-2 h-[clamp(26px,4vh,40px)]">
        <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M985 2 V26 Q985 36 972 36 H28 Q15 36 15 26 V2"
            fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.6"
          />
          <path
            d="M985 2 V26 Q985 36 972 36 H28 Q15 36 15 26 V2"
            fill="none" stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="6 9"
            style={{
              animation: "flow 1.1s linear infinite",
              filter: "drop-shadow(0 0 5px rgba(96,165,250,0.8))",
            }}
          />
        </svg>
      </div>
      <p className="mt-1 text-center text-[clamp(0.68rem,0.86vw,0.88rem)] text-fg-faint">
        which funds the next generation of agents
      </p>
    </div>
  )
}

/* ══════════════════════════════════ 12 · the ask ══════════════════════════ */

const STEPS = [
  { n: "01", t: "Deploy", s: "The Pepay streaming primitive, on the chain you choose" },
  { n: "02", t: "Connect", s: "One ACP-compatible agent workflow. Nothing migrates" },
  { n: "03", t: "Measure", s: "Volume, recurring revenue, retention, job economics" },
]

export function AskSteps() {
  return (
    <div className="mx-auto grid w-full max-w-[960px] gap-2.5 md:grid-cols-3">
      {STEPS.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 + i * 0.13, duration: 0.75, ease: EASE }}
          className="flex flex-col gap-2.5 rounded-2xl border border-pep-500/26 bg-pep-500/[0.05] px-[clamp(1rem,1.9vw,1.7rem)] py-[clamp(1rem,2.3vh,1.7rem)]"
        >
          <span className="num text-[clamp(10px,0.85vw,11.5px)] tracking-[0.16em] text-pep-300">
            {s.n}
          </span>
          <span className="text-[clamp(1.05rem,1.75vw,1.7rem)] font-semibold tracking-[-0.035em] text-fg">
            {s.t}
          </span>
          <span className="text-[clamp(0.72rem,0.9vw,0.9rem)] leading-relaxed text-fg-mute">
            {s.s}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════ 09 · value never stops ═══════════ */

/** All five are economic functions. "Billing" rather than "Subscriptions" —
 *  a subscription is a product; billing is what the loop actually does. */
const LOOP = ["Revenue", "Treasury", "Payroll", "Billing", "Settlement"]

/**
 * A linear cycle that visibly wraps: the pulse exits the right edge and
 * re-enters at the left. Deliberately different geometry from the ring on
 * slide 5, so the two never read as the same diagram twice.
 */
export function ValueLoop() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <div className="relative flex items-center justify-between gap-1.5">
        {LOOP.map((l, i) => (
          <div key={l} className="flex flex-1 items-center gap-1.5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.11, duration: 0.65, ease: EASE }}
              className="relative flex-1 overflow-hidden rounded-xl border border-pep-500/30 bg-pep-500/[0.06] px-[clamp(0.5rem,1.2vw,1.1rem)] py-[clamp(0.6rem,1.5vh,1.05rem)] text-center"
            >
              <span className="relative z-10 text-[clamp(0.68rem,1.02vw,1.05rem)] font-medium whitespace-nowrap text-pep-100">
                {l}
              </span>
              {/* the pulse passing through each stage in turn */}
              <motion.span
                className="absolute inset-0 bg-pep-400/22"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 3.4,
                  times: [0, 0.5, 1],
                  delay: i * 0.62,
                  repeat: Infinity,
                  repeatDelay: 3.4 - 0.62,
                }}
              />
            </motion.div>

            {i < LOOP.length - 1 ? (
              <span className="text-[clamp(0.6rem,0.9vw,0.9rem)] text-fg-faint">→</span>
            ) : null}
          </div>
        ))}
      </div>

      {/* the wrap — settlement funds the next cycle of revenue */}
      <div className="relative mt-2 h-[clamp(26px,4vh,40px)]">
        <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M985 2 V26 Q985 36 972 36 H28 Q15 36 15 26 V2"
            fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.6"
          />
          <path
            d="M985 2 V26 Q985 36 972 36 H28 Q15 36 15 26 V2"
            fill="none" stroke="#60a5fa" strokeWidth="1.6"
            strokeDasharray="6 9"
            style={{
              animation: "flow 1.1s linear infinite",
              filter: "drop-shadow(0 0 5px rgba(96,165,250,0.8))",
            }}
          />
        </svg>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════ 10 · the finale ══════════ */

/**
 * Ends on Value, not Finance. Finance is the mechanism; value creation is the
 * destination — and it's the word that belongs to both companies.
 */
export const FINALE_WORDS = [
  "Identity.",
  "Intelligence.",
  "Work.",
  "Capital.",
  "Commerce.",
  "Value.",
]

export function FinaleWords() {
  return (
    <div className="flex flex-wrap items-baseline justify-center gap-x-[clamp(0.9rem,2.6vw,2.6rem)] gap-y-2">
      {FINALE_WORDS.map((w, i) => {
        const last = i === FINALE_WORDS.length - 1
        return (
          <motion.span
            key={w}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.75, ease: EASE }}
            className={
              "display-tight text-[clamp(1.5rem,4.4vw,4.4rem)] " +
              (last ? "text-gradient-pep" : "text-gradient")
            }
          >
            {w}
          </motion.span>
        )
      })}
    </div>
  )
}
