# JavaScript Project 2 – Functions

**Author:** Hakim Athamnia ([@hakimathamnia](https://github.com/hakimathamnia)) · GoMyCode – Introduction to Problem-Solving Techniques, JavaScript Foundations

Nine JavaScript functions for manipulating strings, working with arrays and solving classic math problems.

## Project structure

```
src/
├── stringFunctions.js   → reverseString, countCharacters, capitalizeWords
├── arrayFunctions.js    → findMax, findMin, sumArray, filterArray
└── mathFunctions.js     → factorial, isPrime, fibonacci
tests.js                 → 25 tests covering normal cases and edge cases
```

## 1. String Manipulation Functions

| Function | What it does | Example |
|----------|--------------|---------|
| `reverseString(str)` | Reverses a string with `split` → `reverse` → `join` | `"hello"` ➞ `"olleh"` |
| `countCharacters(str, includeSpaces = true)` | Counts the characters; can ignore the spaces | `"Hello World"` ➞ `11` (or `10` without spaces) |
| `capitalizeWords(sentence)` | Capitalizes the first letter of each word | `"hello world"` ➞ `"Hello World"` |

## 2. Array Functions

| Function | What it does | Example |
|----------|--------------|---------|
| `findMax(numbers)` | Loops through the array and keeps the biggest value | `[3, 9, -2, 7]` ➞ `9` |
| `findMin(numbers)` | Loops through the array and keeps the smallest value | `[3, 9, -2, 7]` ➞ `-2` |
| `sumArray(numbers)` | Adds all the elements with `reduce` | `[1, 2, 3, 4]` ➞ `10` |
| `filterArray(arr, condition)` | Keeps the elements for which `condition` returns `true` (a callback function) | `filterArray([1,2,3,4,5,6], n => n % 2 === 0)` ➞ `[2, 4, 6]` |

`findMax` and `findMin` return `undefined` for an empty array, since there is no maximum or minimum to return.

## 3. Mathematical Functions

| Function | What it does | Example |
|----------|--------------|---------|
| `factorial(n)` | n! = 1 × 2 × … × n, with 0! = 1 | `5` ➞ `120` |
| `isPrime(n)` | Checks if n is only divisible by 1 and itself | `7` ➞ `true`, `9` ➞ `false` |
| `fibonacci(terms)` | Generates the first `terms` numbers of the Fibonacci sequence | `7` ➞ `[0, 1, 1, 2, 3, 5, 8]` |

### Choices I made

- **Factorial** uses a loop instead of recursion: it is just as clear and avoids filling the call stack for big numbers. It returns `undefined` for negative or decimal numbers, because factorial is not defined for them.
- **Prime check** only tests divisors up to **√n**: if n = a × b, one of the two factors is always ≤ √n. For 97, that means 8 checks instead of 95.
- **Fibonacci**: each term is the sum of the two previous ones, starting with 0 and 1. The terms are stored in an array, so each new term reuses the last two values instead of recalculating them.
- **filterArray** is written with a `for...of` loop to show how a filter works inside, instead of only calling the built-in `Array.filter()`.

## Run it

```bash
node tests.js
```

You need [Node.js](https://nodejs.org). All 25 tests pass ✅
