const cart = [
  { name: "Burger", price: 12, quantity: 2 },
  { name: "Pizza", price: 18, quantity: 1 },
  { name: "Salad", price: 9, quantity: 3 },
];

const totalPrice = (arr) =>
  arr.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(totalPrice(cart));

const foods = [
  { name: "Burger", price: 12 },
  { name: "Salad", price: 9 },
  { name: "Pasta", price: 15 },
  { name: "Pizza", price: 18 },
];

const findMostExpensive = (arr) =>
  arr.reduce((acc, item) => {
    if (acc.price > item.price) {
      return acc;
    }
    return item;
  });

const findMostExpensive2 = (arr) =>
  arr.reduce((acc, item) => (acc.price > item.price ? acc : item));
console.log(findMostExpensive(foods));
console.log(findMostExpensive2(foods));
