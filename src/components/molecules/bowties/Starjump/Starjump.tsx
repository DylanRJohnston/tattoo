import React from "react"
import { Path, right, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Starjump = ({ width, height }: Props) => (
  <>
    <Path path={[up(height)]} />
    <Path path={[start(0, 0), semiCircle(width, 1, "down")]} />
    <Path path={[start(-width / 2, -height / 2), right(width)]} />
    <Path path={[start(0, -height), semiCircle(width, 1, "up")]} />
  </>
)
