import { storiesOf } from "@storybook/react"
import React from "react"
import { Center } from "../../../../lib/storyComponents/Center"
import { SVG } from "../../../../lib/storyComponents/SVG"
import { Altar } from "./Altar"

storiesOf("sigils|Altar", module)
  .addDecorator(Center)
  .add("default", () => {
    return (
      <SVG width={100} height={75} strokeWidth={15}>
        {Altar}
      </SVG>
    )
  })
