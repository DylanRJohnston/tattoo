import React from "react"
import { render } from "react-dom"
import { App } from "./components/pages/App"

const root = document.createElement("div")
root.setAttribute("id", "root")
document.body.appendChild(root)

render(<App />, root)
