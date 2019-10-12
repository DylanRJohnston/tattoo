import { map, range, scanLeft } from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/pipeable"
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
const nextNum = (numTatoos: number, random: boolean) =>
  random ? randomTatoo(numTatoos) : incrementTatoo(numTatoos)

export const App = () => {
  const [num, setNum] = useState(1)

  const [Hz, setHz] = useState(1)
  const onHzChange = useInputEvent(setHz)

  const [random, setRandom] = useState(true)
  const onRadomChange = useCallback(() => setRandom(!random), [setRandom, random])

  const [phase, setPhase] = useState(false)
  const onPhaseChange = useCallback(() => setPhase(!phase), [setPhase, phase])

  const [numSpokes, setNumSpokes] = useState(3)
  const onNumSpokesChange = useInputEvent(setNumSpokes)

  const numTatoos = spokeRadix ** numSpokes

  useEffect(
    function setNextNum() {
      if (Hz === 0) return

      const timeout = setTimeout(() => setNum(nextNum(numTatoos, random)), Math.floor(1000 / Hz))

      return () => clearTimeout(timeout)
    },
    [num, Hz, numTatoos, random, phase],
  )

  return (
    <>
      <div className="options">
        <div className="row">
          <p className={"description"}>Tattoo</p>
          <p>
            {num.toLocaleString()} of {numTatoos.toLocaleString()}
          </p>
        </div>
        <div className="row">
          <p className={"description"}>Random</p>
          <input type="checkbox" checked={random} onChange={onRadomChange} />
        </div>
        <div className="row">
          <p className={"description"}>Phase</p>
          <input type="checkbox" checked={phase} onChange={onPhaseChange} />
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
      </div>
      <Container>
        <Tattoo phase={phase ? "odd" : "even"} spokes={numberToTatoo(num - 1, numSpokes)} />
      </Container>
    </>
  )
}
