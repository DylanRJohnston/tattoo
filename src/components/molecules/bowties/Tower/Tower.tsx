import React from "react"
import { left, Path, right, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Tower = ({ width, height }: Props) => (
  <>
    <Path path={[semiCircle(width, "down")]} />
    <Path path={[up(height)]} />
    <Path path={[start(left(width / 2), up(height)), right(width)]} />
  </>
)
