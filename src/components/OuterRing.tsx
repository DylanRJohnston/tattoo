import React from "react"

export interface Props {
  strokeWidth?: number
}

export const OutterRing = ({ strokeWidth = 2 }: Props) => (
  <circle r="50" stroke="black" strokeWidth={strokeWidth} fill="none" />
)
