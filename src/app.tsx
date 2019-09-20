import React from "react"
import { render } from "react-dom"
import { useRepeatingReRender } from "./lib/hooks/useRepeatingReRender"
import { Tattoo } from "./Tattoo"

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
    <svg viewBox="-60 -60 120 120" style={{ height: "100vmin" }}>
      {children}
    </svg>
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

const root = document.createElement("div")
root.setAttribute("id", "root")
document.body.appendChild(root)

render(<App />, root)
