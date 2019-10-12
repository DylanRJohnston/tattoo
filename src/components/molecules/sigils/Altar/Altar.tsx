import React from "react"
import { Circle } from "../../../atoms/Circle"
import { left, Path, right, start, up } from "../../../atoms/Path"
import { ThreeArms } from "../ThreeArms"

interface Props {
  width: number
  height: number
}

export const Altar = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Circle position={[up((height * 3) / 4)]} radius={height / 4} />
    <Path path={[start(left(height / 4), up(height / 4)), right(height / 2)]} />
  </>
)
