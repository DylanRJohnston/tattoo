import { useEffect } from "react"

import { useDependency } from "./useDependency"

export const useRepeatingEffect = (effect: () => unknown) => (interval: number) => {
  const [dep, newDep] = useDependency()
  useEffect(
    () =>
      void setTimeout(() => {
        effect()
        newDep()
      }, interval),
    [dep],
  )
}
