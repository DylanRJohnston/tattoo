export const assertNever = (impossible: never): never => {
  // tslint:disable-next-line:no-throw
  throw new Error(`A line of code was reached that was supposed to be impossible: ${impossible}`)
}
