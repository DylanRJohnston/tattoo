import { StoryDecorator } from "@storybook/react"
import React from "react"

export const Center: StoryDecorator = story => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      width: "100vw",
    }}
  >
    {story()}
  </div>
)
