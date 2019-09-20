import { assertNever } from "../../../lib/assertNever"

export type Segment =
  | { type: "start"; x: number; y: number }
  | { type: "up"; amount: number }
  | { type: "down"; amount: number }
  | { type: "left"; amount: number }
  | { type: "right"; amount: number }
  | { type: "semiCircle"; radius: number; scale: number; upsideDown: boolean }

export const start = (x: number, y: number): Segment => ({
  type: "start",
  x,
  y,
})
export const up = (amount: number): Segment => ({ type: "up", amount })
export const down = (amount: number): Segment => ({ type: "down", amount })
export const left = (amount: number): Segment => ({ type: "left", amount })
export const right = (amount: number): Segment => ({ type: "right", amount })
export const semiCircle = (
  radius: number,
  scale: number,
  upsideDown: boolean = false,
): Segment => ({ type: "semiCircle", radius, scale, upsideDown })

const serialiseSegment = (segment: Segment): string => {
  switch (segment.type) {
    case "start":
      return `M${segment.x},${segment.y}`
    case "up":
      return `v-${segment.amount}`
    case "down":
      return `v${segment.amount}`
    case "left":
      return `h-${segment.amount}`
    case "right":
      return `h${segment.amount}`
    case "semiCircle":
      return `a1,${segment.scale} 0,0,${Number(segment.upsideDown)} ${segment.radius},0`
    default:
      return assertNever(segment)
  }
}

export type Path = [Segment, ...Segment[]]

const serialisePathInternal = (path: Path): string => path.map(serialiseSegment).join(" ")

export const serialisePath = (path: Path): string =>
  path[0].type === "start"
    ? serialisePathInternal(path)
    : serialisePathInternal([start(0, 0), ...path])
