import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"

import { Starjump } from "./Starjump"

storiesOf("bowties|Starjump", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={50} height={65} strokeWidth={15}>
      {Starjump}
    </SVG>
  ))
