import React from "react"
import { left, Path, right, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Starjump = ({ width, height }: Props) => (
  <>
    <Path path={[up(height)]} />
    <Path path={[semiCircle(width, "down")]} />
    <Path path={[start(left(width / 2), up(height / 2)), right(width)]} />
    <Path path={[start(up(height)), semiCircle(width, "up")]} />
  </>
)
