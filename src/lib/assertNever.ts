export const assertNever = (impossible: never): never => {
  throw new Error(`A line of code was reached that was supposed to be impossible: ${impossible}`)
}
