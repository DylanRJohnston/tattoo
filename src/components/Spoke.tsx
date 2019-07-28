import React from 'react'
import { Arms } from './Arms'

export interface Props {
  arms?: 2 | 3
  body?: 'none' | 'lines' | 'one' | 'two' | 'three' | 'four'
}

export const Spoke = ({ arms = 2, body = 'lines' }: Props) => (
  <>
    <path d="M0 0 v100" stroke="black" strokeWidth={4} />
    <Arms width={15} height={15} />
    {arms === 3 && <Arms width={30} height={15} />}
    {body === 'lines' && (
      <>
        <path d="M-8 77 h 16" stroke="black" strokeWidth={4} />
        <path d="M-8 69 h 16" stroke="black" strokeWidth={4} />
        <path d="M-8 61 h 16" stroke="black" strokeWidth={4} />
      </>
    )}
    {body === 'one' && (
      <>
        <path d="M-15,62 a1,1 0,0,0 30,0" stroke="black" fill="transparent" strokeWidth={4} />
      </>
    )}
     {body === 'two' && (
      <>
        <path d="M-8,77 h16" stroke="black" fill="transparent" strokeWidth={4} />
        <path d="M-15,55 a1,1 0,0,0 30,0" stroke="black" fill="transparent" strokeWidth={4} />
      </>
    )}
    {body === 'three' && (
      <>
        <path d="M15,79 a1,1 0,0,0 -30,0" stroke="black" fill="transparent" strokeWidth={4} />
        <path d="M-8,58 h16" stroke="black" fill="transparent" strokeWidth={4} />
        <path d="M-15,37 a1,1 0,0,0 30,0" stroke="black" fill="transparent" strokeWidth={4} />
      </>
    )}
     {body === 'four' && (
      <>
        <path d="M15,79 a1,1 0,0,0 -30,0" stroke="black" fill="transparent" strokeWidth={4} />
        <path d="M-15,41 a1,1 0,0,0 30,0" stroke="black" fill="transparent" strokeWidth={4} />
      </>
    )}
  </>
)
