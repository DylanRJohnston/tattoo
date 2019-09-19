import React from 'react';
import { OutterRing } from "./components/OuterRing";
import { InnerRing } from "./components/InnerRing";
import { Spokes } from './components/Spokes';

export const Tattoo = () => (
  <>
    <OutterRing />
    <Spokes />
    <InnerRing />
  </>
)