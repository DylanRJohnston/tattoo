import React from "react"
import { Path, semiCircle, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Sunrise = ({ width }: Props) => (
  <>
    <Path path={[up(width / 2)]} />
    <Path path={[start(-width / 2, 0), semiCircle(width, 1, "down")]} />
  </>
)
