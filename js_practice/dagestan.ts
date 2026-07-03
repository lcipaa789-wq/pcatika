const reverseString = (str: string): string => str.split("").reverse().join("");
console.log(reverseString("hello"));
console.log(reverseString2("hello"));

function reverseString2(str: string): string {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

const countVowels = (str: string): number => {};
