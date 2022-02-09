import { compareArrays } from "./util.js";
import 'colors';


/**
 * helps easily run a test
 * The "test" function's first argument is an object containing the properties:
 *   fn : the function you want to test
 *   expected : the data you expect your function to return and compare to. Some datatypes may not be supported currently
 * The second argument is the input value your function accepts. This can be any number of arguments
 */

export const test = (opts, ...args) => {
  const {
    fn,
    expected,
  } = opts;
  const actual = fn(...args);
  let pass = false;

  if (Array.isArray(actual)) {
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
