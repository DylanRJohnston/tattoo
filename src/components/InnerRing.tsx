import React from 'react'

export interface Props {
  strokeWidth?: number
}

export const InnerRing = ({ strokeWidth = 2 }: Props) => (
  <circle r="10" stroke="black" strokeWidth={strokeWidth} fill="white" />
)
