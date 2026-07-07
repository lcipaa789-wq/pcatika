function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return reversed === str;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("home"));

function isPalindromeTwoPointers(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindromeTwoPointers("level"));
console.log(isPalindromeTwoPointers("home"));

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function twoSums(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
console.log(twoSums([1, 3, 4, 5, 8, 10, 101], 9));

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
console.log(removeDuplicates([1, 1, 2, 2, 3]));
