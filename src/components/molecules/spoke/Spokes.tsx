import { range } from "fp-ts/lib/Array"
import React from "react"
import { Names as BowtieNames } from "./Bowties"
import { Names as SigilNames } from "./Sigils"
import { Props as SpokeProps, Spoke } from "./Spoke"

export interface Props {
  radius?: number
  phase?: "odd" | "even"
  spokes?: SpokeProps[]
}

const randomInteger = (upper: number, lower: number = 0) =>
  Math.floor(Math.random() * (upper - lower) + lower)
const oneOf = <A, _>(...as: A[]): A => as[randomInteger(as.length)]
const randomSpoke = () =>
  ({
    bowtie: oneOf(...BowtieNames.types.map(it => it.value)),
    sigil: oneOf(...SigilNames.types.map(it => it.value)),
  } as const)

export const Spokes = ({
  radius = 0.9,
  phase = oneOf("odd", "even"),
  spokes = range(1, randomInteger(8, 1)).map(_ => randomSpoke()),
}: Props) => (
  <>
    {spokes.map((props, index) => (
      <g
        key={index}
        transform={`rotate(${(index * 360) / spokes.length +
          (phase === "even" ? 0 : 180 / spokes.length)}) scale(${0.5 * radius}, ${0.5 * radius})`}
      >
        <Spoke {...props} />
      </g>
    ))}
  </>
)
