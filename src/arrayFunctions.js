// ===== Array Functions =====
// JavaScript Project 2 – Hakim Athamnia

/**
 * Find Maximum
 * Goes through the array and keeps the biggest value found so far.
 * findMax([3, 9, -2, 7]) ➞ 9      findMax([]) ➞ undefined
 */
function findMax(numbers) {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

/**
 * Find Minimum
 * Same idea as findMax, keeping the smallest value.
 * findMin([3, 9, -2, 7]) ➞ -2     findMin([]) ➞ undefined
 */
function findMin(numbers) {
  if (numbers.length === 0) return undefined;
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

/**
 * Sum of Array
 * sumArray([1, 2, 3, 4]) ➞ 10     sumArray([]) ➞ 0
 */
function sumArray(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

/**
 * Filter Array
 * Keeps only the elements for which condition(element) returns true.
 * The original array is not modified.
 * filterArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0) ➞ [2, 4, 6]
 */
function filterArray(arr, condition) {
  const result = [];
  for (const element of arr) {
    if (condition(element)) {
      result.push(element);
    }
  }
  return result;
}

module.exports = { findMax, findMin, sumArray, filterArray };
