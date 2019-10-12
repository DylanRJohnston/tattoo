import React from "react"
import { Path, up } from "../../atoms/Path"
import { Altar } from "../sigils/Altar"
import { FiveArms } from "../sigils/FiveArms"
import { Fountain } from "../sigils/Fountain"
import { ThreeArms } from "../sigils/ThreeArms"

type Sigils = "altar" | "fountain" | "three arms" | "five arms"

export interface Props {
  sigil: Sigils
  body: "none" | "lines" | "one" | "two" | "three" | "four"
}

export const Spoke = ({ sigil }: Props) => (
  <>
    <Path path={[up(100)]} />
    {sigil === "altar" && (
      <g transform="translate(0, -70)">
        <Altar width={40} height={30} />
      </g>
    )}
    {sigil === "fountain" && (
      <g transform="translate(0, -80)">
        <Fountain width={50} height={20} />
      </g>
    )}
    {sigil === "three arms" && (
      <g transform="translate(0, -80)">
        <ThreeArms width={40} height={20} />
      </g>
    )}
    {sigil === "five arms" && (
      <g transform="translate(0, -80)">
        <FiveArms width={60} height={20} />
      </g>
    )}
  </>
)
