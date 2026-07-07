const filterPositives = (nums) => nums.filter((num) => num > 0);

console.log(filterPositives([1, 2, 3, 4, -3, -4, -100]));

const squareNumbers = (nums) => nums.map((num) => num ** 2);
console.log(squareNumbers([1, 2, 3, 4, 5]));

const sumReduce = (nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(sumReduce([12, 3, 4, 5, 6]));

const sumSquaredEvens = (nums) =>
  nums
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((acc, num) => acc + num, 0);
console.log(sumSquaredEvens([1, 2, 3, 4, 5, 6, 7, 8]));
const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Boris" },
  { id: 3, name: "Kate" },
];
function findUserId(users, id) {
  return users.find((user) => user.id === id);
}
console.log(findUserId(users, 2));

const cart = [
  { name: "Coffee", price: 15, inStock: true },
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mug", price: 8, inStock: false },
];
function allInStock(cart) {
  return cart.every((item) => item.inStock);
}
function hasExpensive(cart) {
  return cart.some((item) => item.price > 100);
}
console.log(allInStock(cart));
console.log(hasExpensive(cart));
