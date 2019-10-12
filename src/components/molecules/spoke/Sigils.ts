import * as t from "io-ts"
import { Altar } from "../sigils/Altar"
import { FiveArms } from "../sigils/FiveArms"
import { Fountain } from "../sigils/Fountain"
import { ThreeArms } from "../sigils/ThreeArms"

export type Names = t.TypeOf<typeof Names>
export const Names = t.union([
  t.literal("Altar"),
  t.literal("FiveArms"),
  t.literal("Fountain"),
  t.literal("ThreeArms"),
])

interface Sigil {
  Component: React.FunctionComponent<{ width: number; height: number }>
  width: number
  height: number
}

export const sigils: Record<Names, Sigil> = {
  Altar: {
    Component: Altar,
    height: 30,
    width: 40,
  },
  FiveArms: {
    Component: FiveArms,
    height: 20,
    width: 60,
  },
  Fountain: {
    Component: Fountain,
    height: 20,
    width: 50,
  },
  ThreeArms: {
    Component: ThreeArms,
    height: 20,
    width: 40,
  },
}
