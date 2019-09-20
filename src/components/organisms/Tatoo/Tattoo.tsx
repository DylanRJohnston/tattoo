import React from "react";
import { OutterRing } from "../../molecules/rings/OuterRing";
import { InnerRing } from "../../molecules/rings/InnerRing";
import { Spokes } from "../../molecules/spoke/Spokes";

export const Tattoo = () => (
  <>
    <OutterRing />
    <Spokes />
    <InnerRing />
  </>
);
