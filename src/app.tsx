import React from 'react'
import { render } from 'react-dom'
import { Tattoo } from './Tattoo'
import { useRepeatingReRender } from './lib/hooks/useRepeatingReRender';

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


export const App = () => {
  useRepeatingReRender(2000);

  return (
    <Container>
      <Tattoo />
    </Container>
  )
}

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

render(<App />, root)
