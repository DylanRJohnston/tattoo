import { configure } from '@storybook/react'
import 'storybook-chromatic'
import 'normalize.css'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

const req = require.context('../src', true, /\.stories\.tsx?$/)

configure(() => req.keys().forEach(req), module)
