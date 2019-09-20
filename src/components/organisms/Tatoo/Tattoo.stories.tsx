import { storiesOf } from "@storybook/react";
import { Tattoo } from "./Tattoo";
import React, { useState } from "react";
import { Center } from "../../../lib/storyComponents/Center";
import { number, button } from "@storybook/addon-knobs";
import { StrokeWidthProvider } from "../../../lib/hooks/useStrokeWidth";

storiesOf("organism|Tattoo", module)
  .addDecorator(Center)
  .add("default", () => {
    const strokeWidthKnob = number("Stroke Width", 3, {
      range: true,
      min: 1,
      max: 25,
      step: 1
    });

    const Component = () => {
      const [, setState] = useState({})
      button('reset', () => setState({}))

      return <Tattoo />
    }

    return (
      <StrokeWidthProvider value={strokeWidthKnob}>
        <svg
          style={{
            width: "90vmin",
            height: "90vmin",
            backgroundColor: "white"
          }}
          viewBox={`-60 -60 120 120`}
          preserveAspectRatio="xMidYMid meet"
        >
          <Component />
        </svg>
      </StrokeWidthProvider>
    )
  })
