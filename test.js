import { compareArrays } from "./util.js";
import 'colors';

export const test = (opts, ...args) => {
  const {
    fn,
    expected,
    // arrayComparator = false,
  } = opts;
  const actual = fn(...args);
  let pass = false;

  const arrayComparator = Array.isArray(actual)

  if (arrayComparator === true) {
    pass = compareArrays(actual, expected);
  } else {
    pass = actual === expected;
  }

  if (pass) {
    console.log('Pass'.green , fn.name);
  } else {
    console.error('Fail'.red, fn.name);
    console.error(`   Expected:`,( expected + '').blue);
    console.error(`   Actual:`, (actual + '').red);
    console.error(`   Arguments:`, ...args)
  }
};
