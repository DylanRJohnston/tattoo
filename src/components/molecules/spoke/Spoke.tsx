import React from "react"
import { Path } from "../../atoms/Path/Path"
import { up } from "../../atoms/Path/types"
import { Altar } from "../sigils/Altar"
import { FiveArms } from "../sigils/FiveArms"
import { Fountain } from "../sigils/Fountain"
import { ThreeArms } from "../sigils/ThreeArms/ThreeArms"

export interface Props {
  sigil: "altar" | "fountain" | "three arms" | "five arms"
  body: "none" | "lines" | "one" | "two" | "three" | "four"
}

export const Spoke = ({ sigil }: Props) => (
  <>
    <Path path={[up(100)]} />
    <g transform="translate(0, -80)">
      {sigil === "altar" && <Altar width={40} height={20} />}
      {sigil === "fountain" && <Fountain width={40} height={20} />}
      {sigil === "three arms" && <ThreeArms width={40} height={20} />}
      {sigil === "five arms" && <FiveArms width={40} height={20} />}
    </g>
  </>
)
