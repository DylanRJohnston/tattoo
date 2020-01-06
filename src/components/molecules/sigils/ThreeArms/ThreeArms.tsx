import React from "react"

import { left, Path, right, up } from "../../../atoms/Path"

interface Props {
  readonly height: number
  readonly width: number
}

export const ThreeArms = ({ width, height }: Props) => (
  <>
    <Path path={[left(width / 2), up(height)]} />
    <Path path={[up(height)]} />
    <Path path={[right(width / 2), up(height)]} />
  </>
)
