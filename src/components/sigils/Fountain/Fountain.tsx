import React from "react"
import { Path } from "../../primitives/Path/Path"
import { right, up, start, left, semiCircle } from "../../primitives/Path/types"

export const Fountain = () => (
  <>
    <Path path={[start(50, 100), left(50), up(100)]} />
    <Path path={[start(50, 100), right(50), up(100)]} />
    <Path path={[start(50, 100), up(100)]} />
    <Path path={[start(25, 50), semiCircle(50, 2, true)]} />
  </>
)
