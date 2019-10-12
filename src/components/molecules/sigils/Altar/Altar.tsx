import React from "react"
import { Circle } from "../../../atoms/Circle"
import { Path, right, start } from "../../../atoms/Path"
import { ThreeArms } from "../ThreeArms"

interface Props {
  width: number
  height: number
}

export const Altar = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Circle position={[0, (-height * 3) / 4]} radius={height / 4} />
    <Path path={[start(-height / 4, -height / 4), right(height / 2)]} />
  </>
)
