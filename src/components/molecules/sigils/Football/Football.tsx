import React from "react"

import { bar, Path, start, up } from "../../../atoms/Path"
import { ThreeArms } from "../ThreeArms"

interface Props {
  readonly height: number
  readonly width: number
}

export const Football = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Path path={[start(up(height / 3)), bar(height / 2)]} />
    <Path path={[start(up((height * 2) / 3)), bar(height / 2)]} />
  </>
)
