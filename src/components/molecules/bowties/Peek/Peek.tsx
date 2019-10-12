import React from "react"
import { Circle } from "../../../atoms/Circle"
import { Path, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Peek = ({ width, height }: Props) => (
  <>
    <Path path={[start(0, 0), semiCircle(width, 1, "down")]} />
    <Path path={[up(height)]} />
    <Path path={[start(0, -height), semiCircle(width, 1, "up")]} />
    <Circle position={[width / 4, -width / 8]} radius={1} fill="black" />
    <Circle position={[-width / 4, -width / 8]} radius={1} fill="black" />
  </>
)
