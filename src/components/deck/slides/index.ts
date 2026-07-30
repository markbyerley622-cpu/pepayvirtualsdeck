import type { ComponentType } from "react"
import { S01Cover } from "./S01Cover"
import { S02Recurring } from "./S02Recurring"
import { S03Gap } from "./S03Gap"
import { S04Gaps } from "./S04Gaps"
import { S05Pepay } from "./S05Pepay"
import { S06Stack } from "./S06Stack"
import { S07Integration } from "./S07Integration"
import { S08Market } from "./S08Market"
import { S09Partnership } from "./S09Partnership"
import { S10Close } from "./S10Close"

export type SlideDef = {
  label: string
  component: ComponentType
}

/**
 * The arc is deliberate: the problem is established on its own terms for six
 * slides, and Virtuals does not appear until slide 7. By then the conclusion is
 * something the room has worked out for itself.
 */
export const SLIDES: SlideDef[] = [
  { label: "AI became a workforce", component: S01Cover },
  { label: "Workers become businesses", component: S02Recurring },
  { label: "Every business runs on four things", component: S03Gap },
  { label: "Today's money was built for humans", component: S04Gaps },
  { label: "Agents need financial lives", component: S05Pepay },
  { label: "Pepay: the execution layer for value", component: S06Stack },
  { label: "Intelligence and value", component: S07Integration },
  { label: "Tokenise and monetise", component: S08Market },
  { label: "Agents create value. Pepay keeps it moving", component: S09Partnership },
  { label: "The financial operating system", component: S10Close },
]

/** Slide index (0-based) at which Virtuals enters the story. */
export const VIRTUALS_REVEAL = 6
