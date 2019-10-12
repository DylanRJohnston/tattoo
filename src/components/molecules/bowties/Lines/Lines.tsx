import React from "react"
import { left, Path, right, start, up } from "../../../atoms/Path"

interface Props {
  width: number
  height: number
}

export const Lines = ({ width, height }: Props) => (
  <>
    <Path path={[up(height)]} />
    <Path path={[start(left(width / 2)), right(width)]} />
    <Path path={[start(left(width / 2), up(height / 2)), right(width)]} />
    <Path path={[start(left(width / 2), up(height)), right(width)]} />
  </>
)
