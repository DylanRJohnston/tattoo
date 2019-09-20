<<<<<<< Updated upstream:src/components/primitives/Path/Path.tsx
import React from "react"
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth"
import { Path as PathType, serialisePath } from "./types"
||||||| merged common ancestors
import React from 'react'
import { useStrokeWidth } from '../../../lib/hooks/useStrokeWidth'
import { serialisePath, Path as PathType  } from './types';
=======
import React from "react";
import { useStrokeWidth } from "../../../lib/hooks/useStrokeWidth";
import { serialisePath, Path as PathType } from "./types";
>>>>>>> Stashed changes:src/components/atoms/Path/Path.tsx

export interface Props {
  path: PathType;
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
);
