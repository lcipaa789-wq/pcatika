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

/**
 * Most Frequent Element
 * ---------------------------------------------------------------
 * Return the element that appears the MOST times in the array.
 * If there's a tie, return any of the most frequent ones.
 *
 * Examples:
 *   mostFrequent([1, 2, 2, 3, 3, 3])      =>  3
 *   mostFrequent(["a", "b", "a", "a"])    =>  "a"
 *   mostFrequent([5])                      =>  5
 */
function mostFrequent(arr) {

    const count = new Map()
    for(const element of arr){
        if()
    }
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3])); // 3
