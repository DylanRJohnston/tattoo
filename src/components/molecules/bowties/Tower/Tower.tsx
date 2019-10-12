import React from "react"
import { bar, Path, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Tower = ({ width, height }: Props) => (
  <>
    <Path path={[semiCircle(width, "down")]} />
    <Path path={[up(height)]} />
    <Path path={[start(up(height)), bar(width)]} />
  </>
)
