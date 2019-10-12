// import { button, number } from "@storybook/addon-knobs"
// import { storiesOf } from "@storybook/react"
// import React, { useState } from "react"
// import { StrokeWidthProvider } from "../../../lib/hooks/useStrokeWidth"
// import { Center } from "../../../lib/storyComponents/Center"
// import { Tattoo } from "./Tattoo"

// storiesOf("organism|Tattoo", module)
//   .addDecorator(Center)
//   .add("default", () => {
//     const strokeWidthKnob = number("Stroke Width", 3, {
//       max: 25,
//       min: 1,
//       range: true,
//       step: 1,
//     })

//     const Component = () => {
//       const [, setState] = useState({})
//       button("reset", () => setState({}))

//       return <Tattoo />
//     }

//     return (
//       <StrokeWidthProvider value={strokeWidthKnob}>
//         <svg
//           style={{
//             backgroundColor: "white",
//             height: "90vmin",
//             width: "90vmin",
//           }}
//           viewBox={`-60 -60 120 120`}
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <Component />
//         </svg>
//       </StrokeWidthProvider>
//     )
//   })
