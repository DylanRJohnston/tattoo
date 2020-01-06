import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { ThreeArms } from "./ThreeArms"

storiesOf("sigils|Three Arms", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={100} height={50} strokeWidth={15}>
      {ThreeArms}
    </SVG>
  ))
