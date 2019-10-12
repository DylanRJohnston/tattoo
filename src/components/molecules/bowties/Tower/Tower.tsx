import React from "react"
import { Path, right, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Tower = ({ width, height }: Props) => (
  <>
    <Path path={[start(-width / 2, 0), semiCircle(width, 1, "down")]} />
    <Path path={[up(height)]} />
    <Path path={[start(-width / 2, -height), right(width)]} />
  </>
)
