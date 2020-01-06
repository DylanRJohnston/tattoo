import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { Peek } from "./Peek"

storiesOf("bowties|Peek", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={50} height={60} strokeWidth={15}>
      {Peek}
    </SVG>
  ))
