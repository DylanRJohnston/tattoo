import * as t from "io-ts"
import { Altar } from "./Altar"
import { FiveArms } from "./FiveArms"
import { Fountain } from "./Fountain"
import { ThreeArms } from "./ThreeArms"

export type Names = t.TypeOf<typeof Names>
export const Names = t.union([
  // t.literal("None"),
  t.literal("ThreeArms"),
  t.literal("FiveArms"),
  t.literal("Fountain"),
  t.literal("Altar"),
])

interface Sigil {
  Component: React.FunctionComponent<{ width: number; height: number }>
  width: number
  height: number
}

export const sigils: Record<Names, Sigil> = {
  // None: {
  //   Component: None,
  //   height: 0,
  //   width: 0,
  // },
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
