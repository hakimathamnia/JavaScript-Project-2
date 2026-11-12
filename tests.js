// Run with: node tests.js
const { reverseString, countCharacters, capitalizeWords } = require("./src/stringFunctions");
const { findMax, findMin, sumArray, filterArray } = require("./src/arrayFunctions");
const { factorial, isPrime, fibonacci } = require("./src/mathFunctions");

const tests = [
  // String functions
  ["reverseString", reverseString("hello"), "olleh"],
  ["reverseString (empty)", reverseString(""), ""],
  ["countCharacters", countCharacters("Hello World"), 11],
  ["countCharacters (no spaces)", countCharacters("Hello World", false), 10],
  ["capitalizeWords", capitalizeWords("hello world from javascript"), "Hello World From Javascript"],
  ["capitalizeWords (one word)", capitalizeWords("gomycode"), "Gomycode"],

  // Array functions
  ["findMax", findMax([3, 9, -2, 7]), 9],
  ["findMax (negatives)", findMax([-5, -1, -8]), -1],
  ["findMax (empty)", findMax([]), undefined],
  ["findMin", findMin([3, 9, -2, 7]), -2],
  ["findMin (one element)", findMin([42]), 42],
  ["sumArray", sumArray([1, 2, 3, 4]), 10],
  ["sumArray (empty)", sumArray([]), 0],
  ["filterArray (even numbers)", filterArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0), [2, 4, 6]],
  ["filterArray (long words)", filterArray(["sun", "planet", "sky", "galaxy"], w => w.length > 3), ["planet", "galaxy"]],

  // Math functions
  ["factorial(5)", factorial(5), 120],
  ["factorial(0)", factorial(0), 1],
  ["factorial(-3)", factorial(-3), undefined],
  ["isPrime(7)", isPrime(7), true],
  ["isPrime(9)", isPrime(9), false],
  ["isPrime(1)", isPrime(1), false],
  ["isPrime(97)", isPrime(97), true],
  ["fibonacci(7)", fibonacci(7), [0, 1, 1, 2, 3, 5, 8]],
  ["fibonacci(1)", fibonacci(1), [0]],
  ["fibonacci(0)", fibonacci(0), []],
];

let passed = 0;
for (const [name, result, expected] of tests) {
  const ok = JSON.stringify(result) === JSON.stringify(expected);
  if (ok) passed++;
  console.log(`${ok ? "✅" : "❌"} ${name}: ${JSON.stringify(result)}`);
}
console.log(`\n${passed}/${tests.length} tests passed`);
process.exit(passed === tests.length ? 0 : 1);
