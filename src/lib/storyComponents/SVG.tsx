import { StrokeWidthProvider } from "../hooks/useStrokeWidth";
import React from "react";
import { number } from "@storybook/addon-knobs";

interface Props {
  strokeWidth: number;
  width: number;
  height: number;
  children: React.FunctionComponent<{ width: number; height: number }>;
}

export const SVG = ({
  strokeWidth,
  width,
  height,
  children: Children
}: Props) => {
  const strokeWidthKnob = number("Stroke Width", strokeWidth, {
    range: true,
    min: 1,
    max: 25,
    step: 1
  });
  const widthKnob = number("Width", width, {
    range: true,
    min: 1,
    max: 150,
    step: 1
  });
  const heightKnob = number("height", height, {
    range: true,
    min: 1,
    max: 150,
    step: 1
  });

  return (
    <StrokeWidthProvider value={strokeWidthKnob}>
      <svg
        style={{
          width: "90vmin",
          height: `${(heightKnob / widthKnob) * 90}vmin`,
          backgroundColor: "white"
        }}
        viewBox={`${-widthKnob / 2 - 10} ${-heightKnob - 10} ${widthKnob +
          20} ${heightKnob + 20}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <Children width={widthKnob} height={heightKnob} />
      </svg>
    </StrokeWidthProvider>
  );
};
