import 'colors'; // npm package I added to easily add console.log colors

/**
  index.js (ran by either importing in an HTML or running node index.js)
  Essentially define functions for each thing you're trying to do.
  Then call the functions and compare the result to what you can predetermine as the expected value
  Then log out your pass or failures. This is the foundation of unit tests and is really helpful sometimes when writing code
*/
/**
 * Now fill out these fuckers
 */

const printOneThruTen = () => {

}

const printMultiplyTables = (num) => {

};

// find ratio on google. This may fail depending on how many decimals you use in the algorithm
const kilosToMiles = (kilos) => {

};

const sumNumbers = (array) => {

};

const reverseArray = (arr) => {

};

const sortLowestToHighest = (numberArray) => {

};

const filterOutNegatives = (numberArray) => {

};

const removeWhitespace = (str) => {

};

const isDivisibleByTen = (num) => {

};

const numberOfVowels = (str) => {

};

test({
  fn: printOneThruTen,
  expected: [1,2,3,4,5,6,7,8,9,10],
  arrayComparator: true,
})

test({
  fn: printMultiplyTables,
  expected: ['4 x 1 = 4', '4 x 2 = 8', '4 x 3 = 12', '4 x 4 = 16', '4 x 5 = 20'],
  arrayComparator: true,
}, 4)

test({
  fn: sumNumbers,
  expected: 6,
}, [1, 2, 3])

test({
  fn: reverseArray,
  expected: [5,4,3,2,1],
  arrayComparator: true
}, [1, 2, 3, 4, 5])

test({
  fn: sortLowestToHighest,
  expected: [1, 2, 3, 4, 5],
  arrayComparator: true
}, [5,1,4,2,3])

test({
  fn: filterOutNegatives,
  expected: [1,1,1],
  arrayComparator: true
  }, [-1, 1, -1, 1, 1, -1])

test({
  fn: removeWhitespace,
  expected: 'just a string',
  arrayComparator: false
}, '       just a string         ')

test({
  fn: isDivisibleByTen,
  expected: true,
  arrayComparator: false
}, 20)

test({
  fn: numberOfVowels,
  expected: 4,
}, 'bitch titties');

// Comparing array is tricky and you can't just === them for equality
// heres a helper to compare
function compareArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  return arr1.every((primitive, i) => primitive === arr2[i])
}

function test(opts, ...args) {
  const {
    fn,
    expected,
    arrayComparator = false,
  } = opts;
  const actual = fn(...args);
  let pass = false;

  if (arrayComparator === true) {
    pass = compareArrays(actual, expected);
  } else {
    pass = actual === expected;
  }

  if (pass) {
    console.log('Pass'.green , fn.name);
  } else {
    console.error(`Fail`.red, fn.name);
    console.error(`    Expected`, (expected + '').blue)
    console.error(`    Actual`, (actual + '').red);
  }
};