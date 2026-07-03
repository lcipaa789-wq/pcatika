function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(1));

const sunTon = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(sunTon(5));
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello"));
