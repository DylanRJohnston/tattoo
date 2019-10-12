import React from "react"
import { Path, right, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Lines = ({ width, height }: Props) => (
  <>
    <Path path={[up(height)]} />
    <Path path={[start(-width / 2, 0), right(width)]} />
    <Path path={[start(-width / 2, -height / 2), right(width)]} />
    <Path path={[start(-width / 2, -height), right(width)]} />
  </>
)
