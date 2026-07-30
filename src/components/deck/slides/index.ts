import type { ComponentType } from "react"
import { S01Cover } from "./S01Cover"
import { S02Recurring } from "./S02Recurring"
import { S03Gap } from "./S03Gap"
import { S04Gaps } from "./S04Gaps"
import { S05Pepay } from "./S05Pepay"
import { S06Stack } from "./S06Stack"
import { S07Integration } from "./S07Integration"
import { S08Duration } from "./S08Duration"
import { S08Market } from "./S08Market"
import { S09Partnership } from "./S09Partnership"
import { S11Upside } from "./S11Upside"
import { S12Ask } from "./S12Ask"
import { S10Close } from "./S10Close"

export type SlideDef = {
  label: string
  component: ComponentType
}

/**
 * Two acts.
 *
 * Slides 1–6 establish the problem on its own terms; Virtuals does not appear
 * until slide 7, so the conclusion is reached rather than asserted. Slides 8–12
 * are the business case: the economics, the fit, the engine, their upside, and
 * an ask small enough to approve in the room.
 */
export const SLIDES: SlideDef[] = [
  { label: "AI became economic actors", component: S01Cover },
  { label: "Workers become businesses", component: S02Recurring },
  { label: "Every business runs on four things", component: S03Gap },
  { label: "Today's money was built for humans", component: S04Gaps },
  { label: "Agents need financial lives", component: S05Pepay },
  { label: "An execution layer for value", component: S06Stack },
  { label: "Intelligence and value", component: S07Integration },
  { label: "The next challenge is duration", component: S08Duration },
  { label: "Autonomous businesses, financial lives", component: S08Market },
  { label: "Agents create value. Pepay keeps it moving", component: S09Partnership },
  { label: "We compound the agent economy", component: S11Upside },
  { label: "One integration. One agent. One proof point", component: S12Ask },
  { label: "The financial infrastructure behind Agentic GDP", component: S10Close },
]

/** Slide index (0-based) at which Virtuals enters the story. */
export const VIRTUALS_REVEAL = 6
