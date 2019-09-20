import { number } from "@storybook/addon-knobs"
import React from "react"
import { StrokeWidthProvider } from "../hooks/useStrokeWidth"

interface Props {
  strokeWidth: number
  width: number
  height: number
  children: React.FunctionComponent<{ width: number; height: number }>
}

export const SVG = ({ strokeWidth, width, height, children: Children }: Props) => {
  const strokeWidthKnob = number("Stroke Width", strokeWidth, {
    max: 25,
    min: 1,
    range: true,
    step: 1,
  })
  const widthKnob = number("Width", width, {
    max: 150,
    min: 1,
    range: true,
    step: 1,
  })
  const heightKnob = number("height", height, {
    max: 150,
    min: 1,
    range: true,
    step: 1,
  })

  return (
    <StrokeWidthProvider value={strokeWidthKnob}>
      <svg
        style={{
          backgroundColor: "white",
          height: `${(heightKnob / widthKnob) * 90}vmin`,
          width: "90vmin",
        }}
        viewBox={`${-widthKnob / 2 - 10} ${-heightKnob - 10} ${widthKnob + 20} ${heightKnob + 20}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <Children width={widthKnob} height={heightKnob} />
      </svg>
    </StrokeWidthProvider>
  )
}
