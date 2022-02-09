import 'colors'; // npm package I added to easily add console.log colors
import { test } from './test.js';
/**
  index.js (ran by either importing in an HTML or running node index.js)
  Essentially define functions for each thing you're trying to do.
  Then call the functions and compare the result to what you can predetermine as the expected value
  Then log out your pass or failures. This is the foundation of unit tests and is really helpful sometimes when writing code
*/
/**
 * Now fill out these functions mother fucker
 * See "expected" values from tests below for help on return value and formatting and tweak "expected" if needed
 * */

const printOneThruTen = () => {

}

const printMultiplyTables = (num) => {

};

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

// LET'S TEST!

test({
  fn: printOneThruTen,
  expected: [1,2,3,4,5,6,7,8,9,10],
})

test({
  fn: printMultiplyTables,
  expected: ['4 x 1 = 4', '4 x 2 = 8', '4 x 3 = 12', '4 x 4 = 16', '4 x 5 = 20'],
}, 4)

test({
  fn: kilosToMiles,
  expected: 6.215040397762586,
}, 10)

test({
  fn: sumNumbers,
  expected: 6,
}, [1, 2, 3])

test({
  fn: reverseArray,
  expected: [5,4,3,2,1],
}, [1, 2, 3, 4, 5])

test({
  fn: sortLowestToHighest,
  expected: [1, 2, 3, 4, 5],
}, [5,1,4,2,3])

test({
  fn: filterOutNegatives,
  expected: [1,1,1],
  }, [-1, 1, -1, 1, 1, -1])

test({
  fn: removeWhitespace,
  expected: 'just a string',
}, '       just a string         ')

test({
  fn: isDivisibleByTen,
  expected: true,
}, 20)

test({
  fn: numberOfVowels,
  expected: 4,
}, 'bitch titties');
