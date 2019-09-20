import React from "react";
import { Path } from "../../../atoms/Path/Path";
import { right, up, left } from "../../../atoms/Path/types";

interface Props {
  width: number;
  height: number;
}

export const ThreeArms = ({ width, height }: Props) => (
  <>
    <Path path={[left(width / 2), up(height)]} />
    <Path path={[up(height)]} />
    <Path path={[right(width / 2), up(height)]} />
  </>
);
