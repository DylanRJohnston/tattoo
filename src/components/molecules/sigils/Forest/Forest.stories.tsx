import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { Forest } from "./Forest"

storiesOf("sigils|Forest", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={100} height={50} strokeWidth={15}>
      {Forest}
    </SVG>
  ))
