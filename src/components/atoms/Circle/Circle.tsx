import React from "react";
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth";

interface Props {
  position: [number, number];
  radius: number;
  hollow?: boolean
}

export const Circle = ({ position: [x, y], radius, hollow }: Props) => (
  <circle
    cx={x}
    cy={y}
    r={radius}
    stroke="black"
    strokeWidth={useStrokeWidth()}
    fill={hollow ? "white" : "none"}
    vectorEffect="non-scaling-stroke"
  />
);
