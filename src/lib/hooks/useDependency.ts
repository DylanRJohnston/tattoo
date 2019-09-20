import { useState } from "react"

interface Dependency {}
const newDep = (): Dependency => ({})

export const useDependency = () => {
  const [dep, setDep] = useState(newDep)

  return [dep, () => setDep(newDep)] as const
}
