/**
  index.js (ran by either importing in an HTML or running node index.js)
  Essentially define functions for each thing you're trying to do.
  Then call the functions and compare the result to what you can predetermine as the expected value
  Then log out your pass or failures. This is the foundation of unit tests and is really helpful sometimes when writing code
*/

const printOneThruTen = () => {
  const nums = [];
  for (let i = 1; i <= 10; i++) {
    nums.push(i);
  }
  return nums;
}

{
  const expected = [1,2,3,4,5,6,7,8,9,10]
  const actual = printOneThruTen();

  if (compareArrays(expected, actual)) {
    console.log('Pass printOneThruTen');
  } else {
    console.error('fail printOneThruTen');
  }
}

const printMultiplyTables = (num) => {
  const tables = [];
  for (let i = 1; i <= 5; i++) {
    tables.push(`${num} x ${i} = ${num * i}`)
  }
  return tables;
};

{
  const expected = ['4 x 1 = 4', '4 x 2 = 8', '4 x 3 = 12', '4 x 4 = 16', '4 x 5 = 20']
  const actual = printMultiplyTables(4);

  if (compareArrays(expected, actual)) {
    console.log('Pass printMultipyTables');
  } else {
    console.error('printMultipyTables failed');
  }
}

// found ratio on google
const kilosToMiles = (kilos) => {
  return kilos / 1.609;
};

{
  // got this from a calculator
  const expected = 6.215040397762586
  const actual = kilosToMiles(10);

  if (expected === actual) {
    console.log('Pass kilosToMiles');
  } else {
    console.error('kilosToMiles failed');
  }
}

const sumNumbers = (array) => {
  let counter = 0;
  for (let num of array) {
    counter += num;
  }
  return counter;
};

{
  const expected = 6;
  const actual = sumNumbers([1, 2, 3]);

  if (expected === actual) {
    console.log('Pass sumNumbers');
  } else {
    console.error('sumNumbers failed');
  }
}

const reverseArray = (arr) => {
  const newArr = [];
  // loop thru array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

{
  const expected = [5,4,3,2,1];
  const actual = reverseArray([1, 2, 3, 4, 5]);

  if (compareArrays(expected, actual)) {
    console.log('Pass reverseArray');
  } else {
    console.error('reverseArray failed');
  }
}

const sortLowestToHighest = (numberArray) => {
  return numberArray.sort((a, b) => {
    return a - b;
  })
};

{
  const expected = [1, 2, 3, 4, 5];
  const actual = sortLowestToHighest([5,1,4,2,3]);

  if (compareArrays(expected, actual)) {
    console.log('Pass sortLowestToHighest');
  } else {
    console.error('sortLowestToHighest failed');
  }
}

const filterOutNegatives = (numberArray) => {
  return numberArray.filter(num => num >= 0);
};

{
  const expected = [1, 1, 1];
  const actual = filterOutNegatives([-1, 1, -1, 1, 1, -1]);

  if (compareArrays(expected, actual)) {
    console.log('Pass filterOutNegatives');
  } else {
    console.error('filterOutNegatives failed');
  }
}

const removeWhitespace = (str) => {
  return ('' + str).trim();
};

{
  const expected = 'just a string';
  const actual = removeWhitespace('   just a string           ');

  if (expected === actual) {
    console.log('Pass removeWhitespace');
  } else {
    console.error('removeWhitespace failed');
  }
}

const isDivisibleByTen = (num) => {
  return num % 10 === 0;
};

{
  const expected = true;
  const actual = isDivisibleByTen(20);

  if (expected === actual) {
    console.log('Pass isDivisibleByTen');
  } else {
    console.error('isDivisibleByTen failed');
  }
}

const numberOfVowels = (str) => {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
};

{
  const expected = 4;
  const actual = numberOfVowels('bitch titties');

  if (expected === actual) {
    console.log('Pass numberOfVowels');
  } else {
    console.error('numberOfVowels failed');
  }
}


// Comparing array is tricky and you can't just === them for equality
// heres a helper to compare
function compareArrays(arr1, arr2) {
  return arr1.every((primitive, i) => primitive === arr2[i])
}