import React from "react"

import { Path, semiCircle, start, up } from "../../../atoms/Path"
import { ThreeArms } from "../ThreeArms"

interface Props {
  readonly height: number
  readonly width: number
}

export const Fountain = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Path path={[start(up(height - width / 4)), semiCircle(width / 2, "down")]} />
  </>
)
