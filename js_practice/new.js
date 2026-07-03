function fizzBizz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
}
console.log(fizzBizz(5));
console.log(fizzBizz(3));
console.log(fizzBizz(15));
//
const flatten = (arr) => arr.reduce((acc, item) => acc.concat(item), []);
console.log(flatten([1, [2], [4]]));

const isPalindrome = (srt) => {
  const cleaned = srt.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};
console.log(isPalindrome("racecar"));

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
