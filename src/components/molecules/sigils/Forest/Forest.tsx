import React from "react"

import { bar, left, Path, right, start, up } from "../../../atoms/Path"

interface Props {
  readonly height: number
  readonly width: number
}

export const Forest = ({ width, height }: Props) => (
  <>
    {/* Left Arm */}
    <Path path={[left(width / 2), up(height)]} />
    {/* Left Decorators */}
    <Path path={[start(left((width * 3) / 8)), up(height / 8)]} />
    <Path path={[start(left(width / 2), up(height)), bar(width / 8)]} />
    <Path path={[start(left(width / 2), up((height * 3) / 4)), bar(width / 8)]} />

    {/* Right Arm */}
    <Path path={[right(width / 2), up(height)]} />
    {/* Right Decorators */}
    <Path path={[start(right((width * 3) / 8)), up(height / 8)]} />
    <Path path={[start(right(width / 2), up(height)), bar(width / 8)]} />
    <Path path={[start(right(width / 2), up((height * 3) / 4)), bar(width / 8)]} />

    {/* Central */}
    <Path path={[up(height), bar(width / 8)]} />
    <Path path={[start(up(height / 4)), left(width / 4), up((height * 4) / 8)]} />
    <Path path={[start(up(height / 4)), right(width / 4), up((height * 4) / 8)]} />
  </>
)
