import React from "react"
import { InnerRing } from "../../molecules/rings/InnerRing"
import { OutterRing } from "../../molecules/rings/OuterRing"
import { Props as SpokesProps, Spokes } from "../../molecules/spoke/Spokes"

interface Props extends SpokesProps {}

export const Tattoo = ({ radius = 1 }: Props) => (
  <>
    <OutterRing />
    <Spokes radius={0.9 * radius} />
    <InnerRing />
  </>
)
