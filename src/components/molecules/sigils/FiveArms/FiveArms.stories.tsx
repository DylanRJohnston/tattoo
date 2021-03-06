import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { FiveArms } from "./FiveArms"

storiesOf("sigils|Five Arms", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={100} height={33.33} strokeWidth={15}>
      {FiveArms}
    </SVG>
  ))
