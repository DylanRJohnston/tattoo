import React, { useEffect, useState } from "react"
import { Names as BowtieNames } from "../../molecules/bowties"
import { Names as SigilNames } from "../../molecules/sigils"
import { Props, Tattoo } from "../../organisms/Tatoo"
import "./App.css"
import { Container } from "./Container"

const numBowties = BowtieNames.types.length
const numSigils = SigilNames.types.length

const spokeRadix = numBowties * numSigils

const numberToTatoo = (num: number, numSpokes: number) => {
  const spokes: Props["spokes"] = []

  let workingNum = num
  for (let i = 0; i < numSpokes; i++) {
    const bowtie = (workingNum % spokeRadix) % numBowties
    const sigil = Math.floor((workingNum % spokeRadix) / numBowties)

    spokes.push({ bowtie: BowtieNames.types[bowtie].value, sigil: SigilNames.types[sigil].value })
    workingNum = Math.floor(workingNum / spokeRadix)
  }

  return spokes
}

export const App = () => {
  const [num, setNum] = useState(1)
  const [Hz, setHz] = useState(1)
  const [random, setRandom] = useState(true)
  const [numSpokes, setNumSpokes] = useState(3)
  const [phase, setPhase] = useState(false)

  const numTatoos = spokeRadix ** numSpokes

  useEffect(() => {
    if (Hz === 0) {
      return
    }
    const interval = Math.floor(1000 / Hz)

    let nextNum = num + 1
    if (nextNum > numTatoos) {
      nextNum = 1
    }

    if (random) {
      nextNum = Math.ceil(Math.random() * numTatoos)
    }

    const timeout = setTimeout(() => setNum(nextNum), interval)

    return () => clearTimeout(timeout)
  }, [num, Hz, random])

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
          <input type="checkbox" checked={random} onChange={() => setRandom(!random)} />
        </div>
        <div className="row">
          <p className={"description"}>Phase</p>
          <input type="checkbox" checked={phase} onChange={() => setPhase(!phase)} />
        </div>
        <div className="row">
          <p className={"description"}>{Hz} Hz</p>
          <input
            className="slider"
            type="range"
            min="0"
            max="20"
            value={Hz}
            onChange={it => setHz(parseInt(it.target.value))}
            id="myRange"
          />
        </div>
        <div className="row">
          <p className={"description"}>{numSpokes} Spokes</p>
          <input
            className="slider"
            type="range"
            value={numSpokes}
            onChange={it => setNumSpokes(parseInt(it.target.value))}
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
