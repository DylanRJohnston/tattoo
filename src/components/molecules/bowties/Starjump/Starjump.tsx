import React from "react"

import { bar, Path, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  readonly height: number
  readonly width: number
}

export const Starjump = ({ width, height }: Props) => (
  <>
    <Path path={[up(height)]} />
    <Path path={[semiCircle(width, "down")]} />
    <Path path={[start(up(height / 2)), bar(width)]} />
    <Path path={[start(up(height)), semiCircle(width, "up")]} />
  </>
)
