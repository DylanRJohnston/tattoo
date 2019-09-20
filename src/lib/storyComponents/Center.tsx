import React from "react";
import { StoryDecorator } from "@storybook/react";

export const Center: StoryDecorator = story => (
  <div
    style={{
      width: "100vw",
      height: "100vh",

      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {story()}
  </div>
);
