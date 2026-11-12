// ===== Mathematical Functions =====
// JavaScript Project 2 – Hakim Athamnia

/**
 * Factorial: n! = 1 × 2 × ... × n, and 0! = 1
 * Returns undefined for negative or non-integer numbers (factorial is not defined).
 * factorial(5) ➞ 120     factorial(0) ➞ 1
 */
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Prime Number Check
 * A prime number is greater than 1 and only divisible by 1 and itself.
 * We only test divisors up to √n: if n = a × b, one of them is always ≤ √n.
 * isPrime(7) ➞ true     isPrime(9) ➞ false     isPrime(1) ➞ false
 */
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false;
  for (let divisor = 2; divisor * divisor <= n; divisor++) {
    if (n % divisor === 0) return false;
  }
  return true;
}

/**
 * Fibonacci Sequence
 * Each term is the sum of the two previous ones: 0, 1, 1, 2, 3, 5, 8, ...
 * Returns the first `terms` numbers of the sequence.
 * fibonacci(7) ➞ [0, 1, 1, 2, 3, 5, 8]     fibonacci(0) ➞ []
 */
function fibonacci(terms) {
  const sequence = [];
  for (let i = 0; i < terms; i++) {
    if (i < 2) {
      sequence.push(i); // the first two terms are 0 and 1
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

module.exports = { factorial, isPrime, fibonacci };
