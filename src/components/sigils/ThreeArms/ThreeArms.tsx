import React from 'react'
import { Path } from '../../primitives/Path/Path'
import { right, up, start, left } from '../../primitives/Path/types';

export const ThreeArms = () => (
  <>
    <Path path={[start(50, 100), left(50), up(100)]} />
    <Path path={[start(50, 100), right(50), up(100)]} />
    <Path path={[start(50, 100), up(100)]} />
  </>
)
