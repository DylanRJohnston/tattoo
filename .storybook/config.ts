import { configure } from '@storybook/react'
import 'normalize.css'

const req = require.context('../src', true, /\.stories\.tsx?$/)

configure(() => req.keys().forEach(req), module)
