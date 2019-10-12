import React from "react"
import { Path, semiCircle, start } from "../../../atoms/Path"
import { ThreeArms } from "../ThreeArms"

interface Props {
  width: number
  height: number
}

export const Fountain = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Path path={[start(0, -height + width / 4), semiCircle(width / 2, 1, "down")]} />
  </>
)
