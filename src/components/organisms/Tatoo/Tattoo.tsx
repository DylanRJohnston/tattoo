import React from "react"
import { InnerRing } from "../../molecules/rings/InnerRing"
import { OutterRing } from "../../molecules/rings/OuterRing"
import { Props as SpokesProps, Spokes } from "../../molecules/spoke/Spokes"

export interface Props extends SpokesProps {}

export const Tattoo = (props: Props) => (
  <>
    <OutterRing />
    <Spokes {...props} />
    <InnerRing />
  </>
)
