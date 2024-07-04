


export const getCounterClockwise = (rotation: number) => {
  return (((rotation - 1) + 4 - 1) % 4) + 1
}

export const getClockwise = (rotation: number) => {
  return ((rotation) % 4) + 1
}