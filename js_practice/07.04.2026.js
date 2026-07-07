/**
 * Reverse a String
 * ---------------------------------------------------------------
 * Return the string reversed (backwards), using a loop.
 *
 * Examples:
 *   reverseString("hello")   =>  "olleh"
 *   reverseString("abc")     =>  "cba"
 *   reverseString("a")       =>  "a"
 */
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("dagestan"));

function reverseString2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
    // console.log(str[i]);
  }
  return result;
}
console.log(reverseString2("dagestan"));
/**
 * Count Vowels
 * ---------------------------------------------------------------
 * Count how many vowels (a, e, i, o, u) are in the string.
 *
 * Examples:
 *   countVowels("hello")     =>  2   (e, o)
 *   countVowels("xyz")       =>  0
 *   countVowels("aeiou")     =>  5
 */
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("dagestan"));
