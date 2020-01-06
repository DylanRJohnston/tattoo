import React from "react"

import { ThreeArms } from "../ThreeArms"

interface Props {
  readonly height: number
  readonly width: number
}

export const FiveArms = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <ThreeArms width={width / 2} height={height} />
  </>
)
