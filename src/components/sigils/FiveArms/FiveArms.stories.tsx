import { storiesOf } from "@storybook/react"
import { FiveArms } from "./FiveArms"
import React from "react"
import { svg } from "../../../../decorators/svg"

storiesOf("sigils|Five Arms", module)
  .addDecorator(svg(100, 25))
  .add("default", () => <FiveArms />)
