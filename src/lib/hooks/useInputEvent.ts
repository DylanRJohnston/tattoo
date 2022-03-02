import { useCallback } from "react"

export const useInputEvent = (f: (n: number) => void) =>
  useCallback(
    (it: React.ChangeEvent<HTMLInputElement>) =>
      f(parseInt(it.target.value.replace(",", "") || "0", 10)),
    [f],
  )
