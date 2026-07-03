"use strict";
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));
console.log(reverseString2("hello"));
function reverseString2(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
