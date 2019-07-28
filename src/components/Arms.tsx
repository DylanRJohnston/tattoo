import React from 'react';

export interface Props {
  width?: number
  height?: number
}

export const Arms = ({ width = 20, height = 20 }: Props) => (
  <path
    d={`M${-width} 100 v ${-height} h ${2 * width} v ${height}`}
    stroke="black"
    fill="transparent"
    strokeWidth={4}
  />
)
