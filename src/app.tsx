import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { Tatoo } from './tatoo'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

const Container = ({ children }: { children: React.ReactChild }) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}
  >
    <svg viewBox="-60 -60 120 120" style={{ height: '100vmin' }}>
      {children}
    </svg>
  </div>
)

const App = () => {
  const [state, updateState] = useState({})
  useEffect(() => {
    console.log("hey")
    setTimeout(() => updateState({}), 2000)
  }, [state])

  return (
    <Container>
      <Tatoo />
    </Container>
  )
}

render(<App />, root)
