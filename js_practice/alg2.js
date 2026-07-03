/**
 * Task: Group anagrams
 *
 * Given an array of strings, group the anagrams together.
 * Anagrams are words with the same letters in a different order.
 *
 * Return an array of groups (order of groups doesn't matter).
 *
 * Example:
 *   groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
 *   =>  [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 */

function groupAnangrams(words) {
  //storage: key (sorted letters) --> array of words that share that key
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    //build the fingerprint: split into letters, sort alphabeticaly, join back
    //"eat" -> ["e", "a", "t"] --> ["a", "e", "t"] -> "aet"
    const key = words[i].split("").sort().join("");
    //create an empty bucket ONLY if this key doesnt exist yet
    //without this check, we would oberwrite already-collected words
    if (!map.has(key)) {
      map.set(key, []);
    }
    //push the current word into its bucket
    map.get(key).push(words[i]);
    //spread all Map values (the buckets) into a plain array of arrays
  }
  return [...map.values()];
}
console.log(groupAnangrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function sumArray(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}
console.log(sumArray([1, 2, 3, 4, 5]));
/**
 * Sum of Even Numbers
 * ---------------------------------------------------------------
 * Return the sum of only the EVEN numbers in the array.
 *
 * Examples:
 *   sumEven([1, 2, 3, 4])   =>  6    (2 + 4)
 *   sumEven([1, 3, 5])      =>  0    (no even numbers)
 *   sumEven([2, 4, 6])      =>  12
 */

function sumEven(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result += nums[i];
    }
  }
  return result;
}
console.log(sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
/**
 * Find Maximum
 * ---------------------------------------------------------------
 * Return the largest number in the array.
 *
 * Examples:
 *   findMax([3, 7, 2, 9, 4])   =>  9
 *   findMax([10, 5, 8])        =>  10
 *   findMax([-3, -1, -7])      =>  -1
 */
function findMax(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 88]));
/**
 * Count Positives
 * ---------------------------------------------------------------
 * Return HOW MANY numbers in the array are positive (greater than 0).
 *
 * Examples:
 *   countPositives([1, -2, 3, -4, 5])   =>  3   (1, 3, 5)
 *   countPositives([-1, -2, -3])        =>  0
 *   countPositives([4, 5, 6])           =>  3
 */
function countPositives(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }
  return count;
}
console.log(countPositives([1, -5, 2, -6, 3]));
/**
 * Count Occurrences
 * ---------------------------------------------------------------
 * Count how many times a TARGET value appears in the array.
 * The function takes TWO arguments: the array and the target.
 *
 * Examples:
 *   countOccurrences([1, 2, 2, 3, 2], 2)   =>  3
 *   countOccurrences([5, 5, 5], 5)          =>  3
 *   countOccurrences([1, 2, 3], 9)          =>  0
 */
function countOccurrences(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2));
