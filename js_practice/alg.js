function twoSum(nums, target) {
  //Map() stores: number -> index
  //we use it to instantly check if the "commplement" was already seen
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    //Complement is the number we need to reach the target
    //e.g. target = 9, current num = 2 -> we need 7
    const complement = target - nums[i];

    //have already seen the complement earlier in the array?
    //Map.has() lookup is 0(1) on avarage
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    //havent found a pair yet  -> remember current number and its index
    //Important: we need after the check, so we never use the same ellement twice
    seen.set(nums[i], i);
  }
  //per the problem statement a solution always exists
  //but returning something here keeps the funcition save
}
console.log(twoSum([1, 2, 3, 4, 5, 6], 7));

function twoSum2(nums, target) {
  //check every possible pair (i,j) where j>i
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // j starts at i + 1, so we never use the same element twice
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
console.log(twoSum2([1, 2, 3, 4, 5, 6], 7));

//
function sortedSquares(nums) {
  return nums.map((n) => n ** 2).sort((a, b) => a - b);
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
