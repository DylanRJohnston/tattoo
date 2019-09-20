import React from "react"
import { InnerRing } from "./components/InnerRing"
import { OutterRing } from "./components/OuterRing"
import { Spokes } from "./components/Spokes"

export const Tattoo = () => (
  <>
    <OutterRing />
    <Spokes />
    <InnerRing />
  </>
)
