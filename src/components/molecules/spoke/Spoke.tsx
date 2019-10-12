import React from "react"
import { Path, up } from "../../atoms/Path"
import { bowties, Names as BowtieNames } from "./Bowties"
import { Names as SigilNames, sigils } from "./Sigils"

export interface Props {
  sigil: SigilNames
  bowtie: BowtieNames
}

export const Spoke = ({ sigil, bowtie }: Props) => {
  const { Component: Sigil, ...sigilProps } = sigils[sigil]
  const { Component: Bowtie, ...bowtieProps } = bowties[bowtie]

  return (
    <>
      <Path path={[up(100)]} />
      <g transform={`translate(0, ${sigilProps.height - 100})`}>
        <Sigil {...sigilProps} />
      </g>
      <g transform={`translate(0, ${sigilProps.height + bowtieProps.height - 90})`}>
        <Bowtie {...bowtieProps} />
      </g>
    </>
  )
}
