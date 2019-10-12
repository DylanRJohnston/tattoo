import { storiesOf } from "@storybook/react"
import React from "react"
import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"
import { Sunrise } from "./Sunrise"

storiesOf("bowties|Sunrise", module)
  .addDecorator(Center)
  .add("default", () => (
    <SVG width={50} height={25} strokeWidth={15}>
      {Sunrise}
    </SVG>
  ))
