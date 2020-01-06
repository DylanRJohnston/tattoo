export const matcher = <V extends { type: string }, A>(
  map: { [K in V["type"]]: (it: Extract<V, { type: K }>) => A },
) => (value: V): A => map[value.type as V["type"]](value as Extract<V, { type: V["type"] }>)
