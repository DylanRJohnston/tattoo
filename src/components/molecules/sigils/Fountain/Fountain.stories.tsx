import { storiesOf } from "@storybook/react"
import React from "react"
import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"
import { Fountain } from "./Fountain"

storiesOf("sigils|Fountain", module)
  .addDecorator(Center)
  .add("default", () => {
    return (
      <SVG width={100} height={50} strokeWidth={15}>
        {Fountain}
      </SVG>
    )
  })
