import { storiesOf } from "@storybook/react";
import { FiveArms } from "./FiveArms";
import React from "react";
import { Center } from "../../../../lib/storyComponents/Center";
import { SVG } from "../../../../lib/storyComponents/SVG";

storiesOf("sigils|Five Arms", module)
  .addDecorator(Center)
  .add("default", () => {
    return (
      <SVG width={100} height={33.33} strokeWidth={15}>
        {FiveArms}
      </SVG>
    );
  });
