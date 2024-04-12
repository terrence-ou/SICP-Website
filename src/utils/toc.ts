export const getSections = (range: string): number[] => {
  const [start, end] = range.split(" - ");
  const startIdx = Number(start.split(".")[1]);
  const endIdx = Number(end.split(".")[1]);
  return Array.from(
    { length: endIdx - startIdx + 1 },
    (_, index: number) => startIdx + index
  );
};
