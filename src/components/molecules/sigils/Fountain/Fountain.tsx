import React from "react"
import { Path } from "../../../atoms/Path/Path"
import { semiCircle, start } from "../../../atoms/Path/types"
import { ThreeArms } from "../ThreeArms"

interface Props {
  width: number
  height: number
}

export const Fountain = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Path path={[start(-width / 4, -height + width / 4), semiCircle(width / 2, 1, true)]} />
  </>
)
