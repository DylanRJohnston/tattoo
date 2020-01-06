import * as t from "io-ts"
import { Football } from "src/components/molecules/sigils/Football"

import { Altar } from "./Altar"
import { FiveArms } from "./FiveArms"
import { Forest } from "./Forest"
import { Fountain } from "./Fountain"
import { ThreeArms } from "./ThreeArms"

export type Names = t.TypeOf<typeof Names>
export const Names = t.union([
  // T.literal("None"),
  t.literal("ThreeArms"),
  t.literal("FiveArms"),
  t.literal("Fountain"),
  t.literal("Altar"),
  t.literal("Forest"),
  t.literal("Football"),
])

interface Sigil {
  readonly Component: React.FunctionComponent<{ readonly height: number; readonly width: number }>
  readonly height: number
  readonly width: number
}

export const sigils: Record<Names, Sigil> = {
  // None: {
  //   Component: None,
  //   Height: 0,
  //   Width: 0,
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
  Football: {
    Component: Football,
    height: 30,
    width: 30,
  },
  Forest: {
    Component: Forest,
    height: 30,
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
