import React from "react"
import { Props as SpokeProps, Spoke } from "./Spoke"

export interface Props {
  phase: "odd" | "even"
  spokes: SpokeProps[]
}

const rotation = (index: number, total: number, phase: "even" | "odd") =>
  (index * 360) / total + (phase === "even" ? 0 : 180 / total)

export const Spokes = ({ phase, spokes }: Props) => (
  <>
    {spokes.map((spoke, index) => (
      <g
        key={index}
        transform={`rotate(${rotation(index, spokes.length, phase)}) scale(0.45, 0.45)`}
      >
        <Spoke {...spoke} />
      </g>
    ))}
  </>
)
