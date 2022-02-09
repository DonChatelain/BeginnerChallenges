export const reverseArray = (arr) => {
  const newArr = [];
  // loop thru array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
