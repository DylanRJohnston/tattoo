// Import { button, number } from "@storybook/addon-knobs"
// Import { storiesOf } from "@storybook/react"
// Import React, { useState } from "react"
// Import { StrokeWidthProvider } from "../../../lib/hooks/useStrokeWidth"
// Import { Center } from "../../../lib/storyComponents/Center"
// Import { Tattoo } from "./Tattoo"

// StoriesOf("organism|Tattoo", module)
//   .addDecorator(Center)
//   .add("default", () => {
//     Const strokeWidthKnob = number("Stroke Width", 3, {
//       Max: 25,
//       Min: 1,
//       Range: true,
//       Step: 1,
//     })

//     Const Component = () => {
//       Const [, setState] = useState({})
//       Button("reset", () => setState({}))

//       Return <Tattoo />
//     }

//     Return (
//       <StrokeWidthProvider value={strokeWidthKnob}>
//         <svg
//           Style={{
//             BackgroundColor: "white",
//             Height: "90vmin",
//             Width: "90vmin",
//           }}
//           ViewBox={`-60 -60 120 120`}
//           PreserveAspectRatio="xMidYMid meet"
//         >
//           <Component />
//         </svg>
//       </StrokeWidthProvider>
//     )
//   })
