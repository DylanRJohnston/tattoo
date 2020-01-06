import { select } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import React from "react"

import { Center } from "../../../lib/storyComponents/Center"
import { SVG } from "../../../lib/storyComponents/SVG"
import { Names as BowtieNames } from "../bowties"
import { Names as SigilNames } from "../sigils"

import { Spoke } from "./Spoke"

storiesOf("molecules|Spoke", module)
  .addDecorator(Center)
  .add("Default", () => (
    <SVG width={100} height={100} strokeWidth={10}>
      {() => (
        <Spoke
          sigil={select("Sigil", SigilNames.types.map(it => it.value), "ThreeArms")}
          bowtie={select("Bowtie", BowtieNames.types.map(it => it.value), "None")}
        />
      )}
    </SVG>
  ))
