export const getRandomIndex = (array: number[]) => {
  if (array.length === 0) {
    return 0; // Return null if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};
export function getInitialTileNumber(count: number, startFrom = 2) {
  const sequence = [startFrom];
  for (let i = 1; i < count; i++) {
    sequence.push(sequence[i - 1] * 2);
  }
  return sequence;
}
