import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { Tower } from "./Tower"

storiesOf("bowties|Tower", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={50} height={40} strokeWidth={15}>
      {Tower}
    </SVG>
  ))
