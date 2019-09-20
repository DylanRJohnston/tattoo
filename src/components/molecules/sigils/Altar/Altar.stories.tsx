import { storiesOf } from "@storybook/react";
import { Altar } from "./Altar";
import React from "react";
import { SVG } from "../../../../lib/storyComponents/SVG";
import { Center } from "../../../../lib/storyComponents/Center";

storiesOf("sigils|Altar", module)
  .addDecorator(Center)
  .add("default", () => {
    return (
      <SVG width={100} height={75} strokeWidth={15}>
        {Altar}
      </SVG>
    );
  });
