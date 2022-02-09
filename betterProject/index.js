/**
  index.js (ran by either importing in an HTML or running node index.js)
  Essentially define functions for each thing you're trying to do.
  Then call the functions and compare the result to what you can predetermine as the expected value
  Then log out your pass or failures. This is the foundation of unit tests and is really helpful sometimes when writing code
*/

import { printOneThruTen } from "./functions/printOneThruTen.js";
import { printMultiplyTables } from "./functions/printMultiplyTables.js";
import { sumNumbers } from './functions/sumNumbers.js';
import { reverseArray } from './functions/reverseArray.js';
import { sortLowestToHighest } from './functions/sortLowestToHighest.js';
import { filterOutNegatives } from './functions/filterOutNegatives.js';
import { removeWhitespace } from "./functions/removeWhitespace.js";
import { isDivisibleByTen } from "./functions/isDivisibleByTen.js";
import { numberOfVowels } from "./functions/numberOfVowels.js";

import { test } from "./test.js";

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
