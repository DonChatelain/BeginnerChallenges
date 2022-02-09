
// Comparing array is tricky and you can't just === them for equality
// heres a helper to compare
export function compareArrays(arr1, arr2) {
  return arr1.every((primitive, i) => primitive === arr2[i])
}