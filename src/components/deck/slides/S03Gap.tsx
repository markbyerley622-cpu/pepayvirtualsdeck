"use client"

import { Slide } from "../Slide"
import { OneIdea, Versus } from "../Layout"
import { Particles, Spot } from "@/components/ui/aurora"
import { CursorLight } from "@/components/ui/mouse"
import { BusinessAnatomy } from "../visuals"

export function S03Gap() {
  return (
    <Slide
      backdrop={
        <>
          <Particles />
          <CursorLight color="rgba(37,99,235,0.12)" size={660} />
          <Spot className="top-[-24%] left-[-16%]" color="rgba(21,68,196,0.22)" size={880} />
        </>
      }
    >
      <OneIdea
        align="center"
        headline={<Versus a="Every business" b="runs on four things." />}
        support="Revenue, expenses, treasury, capital. Miss one and it isn't a business."
        visual={<BusinessAnatomy />}
      />
    </Slide>
  )
}
