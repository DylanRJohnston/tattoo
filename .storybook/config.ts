import { withKnobs } from "@storybook/addon-knobs"
import { configure } from "@storybook/react"
import { addDecorator } from "@storybook/react"
import "normalize.css"
import "storybook-chromatic"

addDecorator(withKnobs)

const req = require.context("../src", true, /\.stories\.tsx?$/)

configure(() => req.keys().forEach(req), module)
