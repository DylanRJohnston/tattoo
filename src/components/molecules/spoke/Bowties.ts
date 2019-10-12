import * as t from "io-ts"
import { Lines } from "../bowties/Lines"
import { Peek } from "../bowties/Peek"
import { Starjump } from "../bowties/Starjump"
import { Sunrise } from "../bowties/Sunrise"
import { Tower } from "../bowties/Tower"

export type Names = t.TypeOf<typeof Names>
export const Names = t.union([
  t.literal("Lines"),
  t.literal("Peek"),
  t.literal("Starjump"),
  t.literal("Sunrise"),
  t.literal("Tower"),
])

interface Bowtie {
  Component: React.FunctionComponent<{ width: number; height: number }>
  width: number
  height: number
}

export const bowties: Record<Names, Bowtie> = {
  Lines: {
    Component: Lines,
    height: 15,
    width: 15,
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
