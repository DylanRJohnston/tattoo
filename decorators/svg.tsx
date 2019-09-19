import { StoryDecorator } from '@storybook/react'
import React from 'react'
import { StrokeWidthProvider } from '../src/lib/hooks/useStrokeWidth'
import { number } from '@storybook/addon-knobs'

export const svg = (width: number = 100, height: number = 100, strokeWidth: number = 15): StoryDecorator => story => {
  const content = story()

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StrokeWidthProvider value={number('Stroke Width', strokeWidth)}>
        <svg
          style={{
            width: '50vmin',
            height: '50vin',
            backgroundColor: 'white',
          }}
          viewBox={`-10 -10 ${width + 20} ${height + 20}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform={`scale(${width / 100} ${height / 100})`}>
          {content}
          </g>
        </svg>
      </StrokeWidthProvider>
    </div>
  )
}
