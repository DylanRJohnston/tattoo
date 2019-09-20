import React from "react"
import { useRepeatingReRender } from "../../lib/hooks/useRepeatingReRender"
import { StrokeWidthProvider } from "../../lib/hooks/useStrokeWidth"
import { Tattoo } from "../organisms/Tatoo/Tattoo"

const Container = ({ children }: { children: React.ReactChild }) => (
  <div
    style={{
      alignItems: "center",
      boxSizing: "border-box",
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <StrokeWidthProvider value={3}>
      <svg viewBox="-60 -60 120 120" style={{ height: "100vmin" }}>
        {children}
      </svg>
    </StrokeWidthProvider>
  </div>
)

export const App = () => {
  useRepeatingReRender(2000)

  return (
    <Container>
      <Tattoo />
    </Container>
  )
}
