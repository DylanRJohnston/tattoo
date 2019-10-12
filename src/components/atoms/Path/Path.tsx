import React from "react"
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth"
import { PathSegments, serialisePath } from "./types"

export interface Props {
  path: PathSegments
}

export const Path = ({ path }: Props) => (
  <path
    d={serialisePath(path)}
    stroke="black"
    strokeLinecap="square"
    fill="transparent"
    strokeWidth={useStrokeWidth()}
    vectorEffect="non-scaling-stroke"
  />
)
