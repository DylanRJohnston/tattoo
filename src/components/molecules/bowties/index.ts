import * as t from "io-ts"

import { Lines } from "./Lines"
import { None } from "./None/None"
import { Peek } from "./Peek"
import { Starjump } from "./Starjump"
import { Sunrise } from "./Sunrise"
import { Tower } from "./Tower"

export type Names = t.TypeOf<typeof Names>
export const Names = t.union([
  t.literal("None"),
  t.literal("Sunrise"),
  t.literal("Tower"),
  t.literal("Starjump"),
  t.literal("Peek"),
  t.literal("Lines"),
])

interface Bowtie {
  readonly Component: React.FunctionComponent<{ readonly height: number; readonly width: number }>
  readonly height: number
  readonly width: number
}

export const bowties: Record<Names, Bowtie> = {
  Lines: {
    Component: Lines,
    height: 15,
    width: 15,
  },
  None: {
    Component: None,
    height: 0,
    width: 0,
  },
  Peek: {
    Component: Peek,
    height: 25,
    width: 20,
  },
  Starjump: {
    Component: Starjump,
    height: 30,
    width: 20,
  },
  Sunrise: {
    Component: Sunrise,
    height: 10,
    width: 20,
  },
  Tower: {
    Component: Tower,
    height: 15,
    width: 20,
  },
}
