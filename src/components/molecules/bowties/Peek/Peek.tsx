import React from "react"

import { Circle } from "../../../atoms/Circle"
import { left, Path, right, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  readonly height: number
  readonly width: number
}

export const Peek = ({ width, height }: Props) => (
  <>
    <Path path={[semiCircle(width, "down")]} />
    <Path path={[up(height)]} />
    <Path path={[start(up(height)), semiCircle(width, "up")]} />
    <Circle position={[left(width / 4), up(width / 8)]} strokeWidth={0} radius={1.5} fill="black" />
    <Circle
      position={[right(width / 4), up(width / 8)]}
      strokeWidth={0}
      radius={1.5}
      fill="black"
    />
  </>
)
