import React from "react"
import { Circle } from "../../../atoms/Circle"
import { bar, Path, start, up } from "../../../atoms/Path"
import { ThreeArms } from "../ThreeArms"

interface Props {
  width: number
  height: number
}

export const Altar = ({ width, height }: Props) => (
  <>
    <ThreeArms width={width} height={height} />
    <Circle position={[up((height * 3) / 4)]} radius={height / 4} />
    <Path path={[start(up(height / 4)), bar(height / 2)]} />
  </>
)
