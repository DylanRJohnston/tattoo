import { Lens } from "monocle-ts"
import { matcher } from "src/lib/match"

export type Up = { readonly amount: number; readonly type: "up" }
export const up = (amount: number): Up => ({ type: "up", amount })

export type Down = { readonly amount: number; readonly type: "down" }
export const down = (amount: number): Down => ({ type: "down", amount })

export type Left = { readonly amount: number; readonly type: "left" }
export const left = (amount: number): Left => ({ type: "left", amount })

export type Right = { readonly amount: number; readonly type: "right" }
export const right = (amount: number): Right => ({ type: "right", amount })

export type Directions = Up | Down | Left | Right

export type Bar = { readonly type: "bar"; readonly width: number }
export const bar = (width: number): Bar => ({ type: "bar", width })

type SemiCircle = {
  readonly direction: "up" | "down"
  readonly radius: number
  readonly type: "semiCircle"
}

export const semiCircle = (radius: number, direction: "up" | "down" = "up"): SemiCircle =>
  ({
    direction,
    radius,
    type: "semiCircle",
  } as const)

export type Position = { readonly type: "position"; readonly x: number; readonly y: number }
export const start = (...directions: readonly Directions[]): Position =>
  directions.reduce((position, direction) => move(direction)(position), {
    type: "position",
    x: 0,
    y: 0,
  })

const _x = Lens.fromProp<Position>()("x")
const _y = Lens.fromProp<Position>()("y")
const move: (direction: Directions) => (position: Position) => Position = matcher({
  down: ({ amount }) => _y.modify(y => y + amount),
  left: ({ amount }) => _x.modify(x => x - amount),
  right: ({ amount }) => _x.modify(x => x + amount),
  up: ({ amount }) => _y.modify(y => y - amount),
})

export type Segment = Bar | Position | SemiCircle | Directions
const toDirection = { up: 0, down: 1 } as const
const serialiseSegment: (segment: Segment) => string = matcher({
  bar: ({ width }) => `m${-width / 2},0 h${width} m${-width / 2},0`,
  down: ({ amount }) => `v${amount}`,
  left: ({ amount }) => `h-${amount}`,
  position: ({ x, y }) => `M${x},${y}`,
  right: ({ amount }) => `h${amount}`,
  semiCircle: ({ radius: r, direction: d }) => `m${-r / 2},0 a1,1 0,0,${toDirection[d]} ${r},0`,
  up: ({ amount }) => `v-${amount}`,
})

export type PathSegments = readonly [Segment, ...readonly Segment[]]

const serialisePathInternal = (path: PathSegments): string => path.map(serialiseSegment).join(" ")

export const serialisePath = (path: PathSegments): string =>
  path[0].type === "position"
    ? serialisePathInternal(path)
    : serialisePathInternal([start(), ...path])
