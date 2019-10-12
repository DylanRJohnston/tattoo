import React from "react"
import { StrokeWidthProvider } from "../../../lib/hooks/useStrokeWidth"

interface Props {
  children: React.ReactChild
}

export const Container = ({ children }: Props) => (
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
    <StrokeWidthProvider value={10}>
      <svg viewBox="-60 -60 120 120" style={{ height: "100vmin" }}>
        {children}
      </svg>
    </StrokeWidthProvider>
  </div>
)
