// ===== String Manipulation Functions =====
// JavaScript Project 2 – Hakim Athamnia

/**
 * Reverse a String
 * reverseString("hello") ➞ "olleh"
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Count Characters
 * By default every character is counted (spaces included).
 * Pass includeSpaces = false to ignore the spaces.
 * countCharacters("Hello World") ➞ 11
 * countCharacters("Hello World", false) ➞ 10
 */
function countCharacters(str, includeSpaces = true) {
  if (includeSpaces) {
    return str.length;
  }
  let count = 0;
  for (const char of str) {
    if (char !== " ") count++;
  }
  return count;
}

/**
 * Capitalize Words
 * Puts the first letter of each word in uppercase.
 * capitalizeWords("hello world from javascript") ➞ "Hello World From Javascript"
 */
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = { reverseString, countCharacters, capitalizeWords };
