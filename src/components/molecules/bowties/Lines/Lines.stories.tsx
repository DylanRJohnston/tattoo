import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { Lines } from "./Lines"

storiesOf("bowties|Lines", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={50} height={50} strokeWidth={15}>
      {Lines}
    </SVG>
  ))
