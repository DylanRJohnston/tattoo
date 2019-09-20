import React from "react"
import { Path } from "../../primitives/Path/Path"
import { left, right, start, up } from "../../primitives/Path/types"

export const Altar = () => (
  <>
    <Path path={[start(50, 100), left(50), up(100)]} />
    <Path path={[start(50, 100), right(50), up(100)]} />
    <Path path={[start(50, 100), up(100)]} />
    <circle
      cx="50"
      cy="25"
      rx="25"
      ry="25"
      fill="none"
      stroke="black"
      strokeWidth="5"
      vectorEffect="non-scaling-stroke"
    />
  </>
)
