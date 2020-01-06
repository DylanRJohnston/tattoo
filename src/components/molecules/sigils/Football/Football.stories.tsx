import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { Football } from "./Football"

storiesOf("sigils|Football", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={75} height={100} strokeWidth={15}>
      {Football}
    </SVG>
  ))
