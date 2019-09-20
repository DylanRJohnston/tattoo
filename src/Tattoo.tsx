import React from "react"
import { InnerRing } from "./components/molecules/rings/InnerRing"
import { OutterRing } from "./components/molecules/rings/OuterRing"
import { Spokes } from "./components/molecules/spoke/Spokes"

export const Tattoo = () => (
  <>
    <OutterRing />
    <Spokes />
    <InnerRing />
  </>
)
