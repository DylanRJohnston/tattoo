import { useCallback } from "react"

export const useInputEvent = (f: (n: number) => void) =>
  useCallback((it: React.ChangeEvent<HTMLInputElement>) => f(parseInt(it.target.value, 10)), [f])
