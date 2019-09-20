import { storiesOf } from "@storybook/react";
import { ThreeArms } from "./ThreeArms";
import React from "react";
import { SVG } from "../../../../lib/storyComponents/SVG";
import { Center } from "../../../../lib/storyComponents/Center";

storiesOf("sigils|Three Arms", module)
  .addDecorator(Center)
  .add("default", () => {
    return (
      <SVG width={100} height={50} strokeWidth={15}>
        {ThreeArms}
      </SVG>
    );
  });
