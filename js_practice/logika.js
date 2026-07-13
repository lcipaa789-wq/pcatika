/**
 * First Non-Repeating Character
 * ---------------------------------------------------------------
 * Return the FIRST character in the string that appears only once.
 * If there is no such character, return null.
 *
 * Examples:
 *   firstUnique("leetcode")     =>  "l"
 *   firstUnique("aabb")         =>  null
 *   firstUnique("loveleetcode") =>  "v"
 */

function firstUnique(str) {
  const counts = new Map();
  for (const char of str) {
    if (counts.has(char)) {
      counts.set(char, counts.get(char) + 1);
    } else {
      counts.set(char, 1);
    }
  }
  //   console.log(counts);
  for (const char of str) {
    if (counts.get(char) === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstUnique("leetcode"));
