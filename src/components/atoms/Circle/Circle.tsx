import React from "react"
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth"
import { Directions, start } from "../Path"

interface Props {
  position?: Directions[]
  radius: number
  fill?: "white" | "black" | "none"
  strokeWidth?: number
}

export const Circle = ({ position = [], radius, fill = "none", strokeWidth }: Props) => {
  const { x, y } = start(...position)
  const envStrokeWidth = useStrokeWidth()

  return (
    <circle
      cx={x}
      cy={y}
      r={radius}
      stroke="black"
      strokeWidth={strokeWidth === undefined ? envStrokeWidth : strokeWidth}
      fill={fill}
      vectorEffect="non-scaling-stroke"
    />
  )
}
