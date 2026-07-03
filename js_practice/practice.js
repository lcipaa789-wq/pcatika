const foods = [
  { name: "Burger", price: 12 },
  { name: "Salad", price: 9 },
  { name: "Pasta", price: 15 },
  { name: "Pizza", price: 18 },
];

const onlyUnder15$ = (foods) => foods.filter((food) => food.price < 15);
// console.log(onlyUnder15$(foods));

const onlyNames = (foods) => foods.map((food) => food.name);
console.log(onlyNames(foods));

const sumOffoods = (foods) => foods.reduce((acc, food) => acc + food.price, 0);
console.log(sumOffoods(foods));
