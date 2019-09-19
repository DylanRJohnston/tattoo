import React from 'react'
import { useStrokeWidth } from '../../../lib/hooks/useStrokeWidth'
import { serialisePath, Path as PathType  } from './types';

export interface Props {
  path: PathType
}

export const Path = ({ path }: Props) => (
  <path
    d={serialisePath(path)}
    stroke="black"
    strokeLinecap="square"
    fill="transparent"
    strokeWidth={useStrokeWidth()}
    vectorEffect="non-scaling-stroke"
  />
)
