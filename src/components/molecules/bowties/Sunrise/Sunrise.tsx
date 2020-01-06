import React from "react"

import { Path, semiCircle, up } from "../../../atoms/Path"

interface Props {
  readonly height: number
  readonly width: number
}

export const Sunrise = ({ width }: Props) => (
  <>
    <Path path={[up(width / 2)]} />
    <Path path={[semiCircle(width, "down")]} />
  </>
)
