import { map, range, scanLeft } from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/pipeable"
import { flow } from "fp-ts/lib/function"
import React, { useCallback, useEffect, useState } from "react"

import { useInputEvent } from "../../../lib/hooks/useInputEvent"
import { Names as BowtieNames } from "../../molecules/bowties"
import { Names as SigilNames } from "../../molecules/sigils"
import { Tattoo } from "../../organisms/Tatoo"

import "./App.css"
import { Container } from "./Container"

const numBowties = BowtieNames.types.length
const numSigils = SigilNames.types.length

const spokeRadix = numBowties * numSigils

const digitToSpoke = (digit: number) => ({
  bowtie: BowtieNames.types[digit % numBowties].value,
  sigil: SigilNames.types[Math.floor(digit / numBowties)].value,
})

const numberToTatoo = (num: number, numSpokes: number) =>
  pipe(
    range(1, numSpokes - 1),
    scanLeft(num, it => Math.floor(it / spokeRadix)),
    map(it => it % spokeRadix),
    map(digitToSpoke),
  )

const incrementTatoo = (numTatoos: number) => (num: number) => (num < numTatoos ? num + 1 : 1)
const randomTatoo = (numTatoos: number) => (_: number) => Math.ceil(Math.random() * numTatoos)

const clamp = (lower: number, upper: number) => (x: number): number =>
  Math.max(Math.min(x, upper), lower)

export const App = () => {
  const [numSpokes, setNumSpokes] = useState(3)
  const onNumSpokesChange = useInputEvent(setNumSpokes)

  const tattooCount = spokeRadix ** numSpokes - 1

  const [tattoo, setTattoo] = useState(0)
  const onTattooChange = useInputEvent(
    flow(
      clamp(0, tattooCount),
      setTattoo,
    ),
  )

  const [animate, setAnimate] = useState(true)
  const onAnimateChange = useCallback(() => setAnimate(!animate), [setAnimate, animate])

  const [Hz, setHz] = useState(1)
  const onHzChange = useInputEvent(setHz)

  const [random, setRandom] = useState(true)
  const onRadomChange = useCallback(() => setRandom(!random), [setRandom, random])

  const [phase, setPhase] = useState(false)
  const onPhaseChange = useCallback(() => setPhase(!phase), [setPhase, phase])

  useEffect(() => {
    if (Hz === 0 || !animate) return

    const intervalHandle = setInterval(() => {
      const nextTattoo = random ? randomTatoo : incrementTatoo

      setTattoo(nextTattoo(tattooCount))
    }, Math.floor(1000 / Hz))

    return () => clearInterval(intervalHandle)
  }, [Hz, animate, tattooCount, random])

  return (
    <>
      <div className="options">
        <div className="row">
          <p className={"description"}>Sigil</p>
          <p>
            <input size={tattoo.toLocaleString().length + 1} value={tattoo.toLocaleString()} onChange={onTattooChange} />
            of {tattooCount.toLocaleString()}
          </p>
        </div>
        <div className="row">
          <p className={"description"}>{numSpokes} Spokes</p>
          <input
            className="slider"
            type="range"
            value={numSpokes}
            onChange={onNumSpokesChange}
            min="1"
            max="8"
          />
        </div>
        <div className="row">
          <p className={"description"}>Phase</p>
          <input type="checkbox" checked={phase} onChange={onPhaseChange} />
        </div>
        <div className="break" />
        <div className="row">
          <p className={"description"}>Animate</p>
          <input type="checkbox" checked={animate} onChange={onAnimateChange} />
        </div>
        <div className="row">
          <p className={"description"}>Random</p>
          <input type="checkbox" checked={random} onChange={onRadomChange} />
        </div>
        <div className="row">
          <p className={"description"}>{Hz} Hz</p>
          <input
            className="slider"
            type="range"
            min="0"
            max="20"
            value={Hz}
            onChange={onHzChange}
            id="myRange"
          />
        </div>
      </div>
      <Container>
        <Tattoo phase={phase ? "odd" : "even"} spokes={numberToTatoo(tattoo, numSpokes)} />
      </Container>
    </>
  )
}
