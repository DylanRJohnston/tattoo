import React from "react"
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth"
import { Directions, start } from "../Path"

interface Props {
  position?: Directions[]
  radius: number
  fill?: "white" | "black" | "none"
}

export const Circle = ({ position = [], radius, fill = "none" }: Props) => {
  const { x, y } = start(...position)

  return (
    <circle
      cx={x}
      cy={y}
      r={radius}
      stroke="black"
      strokeWidth={useStrokeWidth()}
      fill={fill}
      vectorEffect="non-scaling-stroke"
    />
  )
}
