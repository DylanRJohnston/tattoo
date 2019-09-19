import { configure } from '@storybook/react'
import 'storybook-chromatic'
import 'normalize.css'

const req = require.context('../src', true, /\.stories\.tsx?$/)

configure(() => req.keys().forEach(req), module)
