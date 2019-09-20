import React from "react"
import { InnerRing } from "../../molecules/rings/InnerRing"
import { OutterRing } from "../../molecules/rings/OuterRing"
import { Spokes } from "../../molecules/spoke/Spokes"

export const Tattoo = () => (
  <>
    <OutterRing />
    <Spokes />
    <InnerRing />
  </>
)
