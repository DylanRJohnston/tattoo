import { storiesOf } from "@storybook/react"
import { ThreeArms } from "./ThreeArms"
import React from "react"
import { svg } from "../../../../decorators/svg"

storiesOf("sigils|Three Arms", module)
  .addDecorator(svg(100, 50))
  .add("default", () => <ThreeArms />)
