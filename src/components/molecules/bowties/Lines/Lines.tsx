import React from "react"

import { bar, Path, start, up } from "../../../atoms/Path"

interface Props {
  readonly height: number
  readonly width: number
}

export const Lines = ({ width, height }: Props) => (
  <>
    <Path path={[up(height)]} />
    <Path path={[bar(width)]} />
    <Path path={[start(up(height / 2)), bar(width)]} />
    <Path path={[start(up(height)), bar(width)]} />
  </>
)
