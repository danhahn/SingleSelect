export const getLongestLabel = data => {
  const newData = Array.from(data);
  const [longestName] = newData.sort((a, b) => b.length - a.length);
  return "ii".repeat(longestName.length);
};
