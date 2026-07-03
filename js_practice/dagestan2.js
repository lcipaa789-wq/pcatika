const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("hello"));

function findLargest(arr) {
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}
console.log(findLargest([1, 2, 3, 4, 4, 5, 6, 7]));

function removeDuplicates(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));

function positiveSum(arr) {
  let result = 0;
  for (let num of arr) {
    if (num > 0) {
      result += num;
    }
  }
  return result;
}
console.log(positiveSum([1, 2, 3, -4, -5]));

function findSmallest(arr) {
  let smallest = arr[0];
  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
}
console.log(findSmallest([1, 2, 3, 4, 5, 6]));

const countChars = (str) => {
  const result = {};
  for (let char of str) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};
console.log(countChars("hello"));
