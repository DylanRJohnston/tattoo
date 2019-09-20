import { storiesOf } from "@storybook/react"
import React from "react"
import { svg } from "../../../../decorators/svg"
import { Altar } from "./Altar"

storiesOf("sigils|Altar", module)
  .addDecorator(svg(100, 66.66))
  .add("default", () => <Altar />)
