import { useProfunctorState } from "@staltz/use-profunctor-state"
import { map, range, scanLeft } from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/pipeable"
import React, { useEffect } from "react"
import { Names as BowtieNames } from "src/components/molecules/bowties"
import { Names as SigilNames } from "src/components/molecules/sigils"
import { Options } from "src/components/organisms/Options"
import { Tattoo } from "src/components/organisms/Tatoo"

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

interface State {
  readonly hz: number
  readonly numSpokes: number
  readonly phase: boolean
  readonly random: boolean
  readonly tattooNum: number
}

const tattooNumLens = Lens.fromProp<State>()("tattooNum")

export const App = () => {
  const config = useProfunctorState<State>({
    hz: 1,
    numSpokes: 3,
    phase: false,
    random: true,
    tattooNum: 1,
  })

  const tattooNum = config.promap(lens)

  const numTatoos = spokeRadix ** config.state.numSpokes

  useEffect(
    function setNextNum() {
      if (config.state.numSpokes === 0) return

      const timeout = setInterval(() => setNum(nextNum(numTatoos, random)), Math.floor(1000 / Hz))

      return () => clearInterval(timeout)
    },
    [config.state],
  )

  return (
    <>
      <Options />
      <Container>
        <Tattoo
          phase={config.state.phase ? "odd" : "even"}
          spokes={numberToTatoo(config.state.tattooNum - 1, config.state.numSpokes)}
        />
      </Container>
    </>
  )
}
