export const sumNumbers = (array) => {
  let counter = 0;
  for (let num of array) {
    counter += num;
  }
  return counter;
};