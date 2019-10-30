import React from "react"

export const Options = () => (
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
)
