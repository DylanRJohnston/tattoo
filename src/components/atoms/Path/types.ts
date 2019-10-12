import { oneLine } from "common-tags"
import { assertNever } from "../../../lib/assertNever"

export type Up = { type: "up"; amount: number }
export const up = (amount: number): Up => ({ type: "up", amount })

export type Down = { type: "down"; amount: number }
export const down = (amount: number): Down => ({ type: "down", amount })

export type Left = { type: "left"; amount: number }
export const left = (amount: number): Left => ({ type: "left", amount })

export type Right = { type: "right"; amount: number }
export const right = (amount: number): Right => ({ type: "right", amount })

export type Directions = Up | Down | Left | Right

export type Bar = { type: "bar"; width: number }
export const bar = (width: number): Bar => ({ type: "bar", width })

type SemiCircle = { type: "semiCircle"; radius: number; direction: "up" | "down" }
export const semiCircle = (radius: number, direction: "up" | "down" = "up"): SemiCircle =>
  ({
    direction,
    radius,
    type: "semiCircle",
  } as const)

export type Start = { type: "start"; x: number; y: number }
export const start = (...position: Directions[]): Start =>
  position.reduce(
    (acc, it) => {
      switch (it.type) {
        case "up":
          return { ...acc, y: acc.y - it.amount }
        case "down":
          return { ...acc, y: acc.y + it.amount }
        case "left":
          return { ...acc, x: acc.x - it.amount }
        case "right":
          return { ...acc, x: acc.x + it.amount }
        default:
          return assertNever(it)
      }
    },
    { type: "start", x: 0, y: 0 },
  )

export type Segment = Bar | Start | SemiCircle | Directions
const serialiseSegment = (segment: Segment): string => {
  switch (segment.type) {
    case "start":
      return `M${segment.x},${segment.y}`
    case "bar":
      return `m${-segment.width / 2},0 h${segment.width}`
    case "up":
      return `v-${segment.amount}`
    case "down":
      return `v${segment.amount}`
    case "left":
      return `h-${segment.amount}`
    case "right":
      return `h${segment.amount}`
    case "semiCircle":
      return oneLine`
        m${-segment.radius / 2},0
        a1,1
        0,0,${segment.direction === "up" ? 0 : 1}
        ${segment.radius},0
      `
    default:
      return assertNever(segment)
  }
}

export type PathSegments = [Segment, ...Segment[]]

const serialisePathInternal = (path: PathSegments): string => path.map(serialiseSegment).join(" ")

export const serialisePath = (path: PathSegments): string =>
  path[0].type === "start" ? serialisePathInternal(path) : serialisePathInternal([start(), ...path])
