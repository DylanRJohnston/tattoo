import { createContext, useContext } from "react"

const defaultStrokeWidth = 15
const StrokeWidthCtx = createContext(defaultStrokeWidth)

export const StrokeWidthProvider = StrokeWidthCtx.Provider
export const useStrokeWidth = () => useContext(StrokeWidthCtx)
