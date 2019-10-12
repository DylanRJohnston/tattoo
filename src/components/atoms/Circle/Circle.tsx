import React from "react"
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth"

interface Props {
  position: [number, number]
  radius: number
  fill?: "white" | "black" | "none"
}

export const Circle = ({ position: [x, y], radius, fill = "none" }: Props) => (
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
