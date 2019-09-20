import { range } from "fp-ts/lib/Array";
import React from "react";
import { Spoke } from "./Spoke";

export interface Props {
  count?: number;
  radius?: number;
  phase?: "odd" | "even";
}

const oneOf = <A,>(as: A[]): A => as[Math.floor(Math.random() * as.length)];

export const Spokes = ({
  count = oneOf([1, 2, 3, 4, 6, 8]),
  radius = 0.9,
  phase = oneOf(["odd", "even"])
}: Props) => (
    <>
      {range(1, count).map(it => (
        <g
          key={it}
          transform={`rotate(${(it * 360) / count +
            (phase === "even" ? 0 : 180 / count)}) scale(${0.5 * radius}, ${0.5 *
            radius})`}
        >
          <Spoke
            sigil={oneOf(["altar", "fountain", "three arms", "five arms"])}
            body={oneOf(["none", "lines", "one", "two", "three", "four"])}
          />
        </g>
      ))}
    </>
  );
