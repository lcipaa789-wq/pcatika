/**
 * Shop Statistics
 * ---------------------------------------------------------------
 * Given an array of products, write functions using array methods:
 *
 * 1. getInStockNames(products)  -> array of NAMES of in-stock products
 * 2. getTotalValue(products)    -> total price of ALL products
 *                                  (price * quantity, summed up)
 */
const products = [
  { name: "Laptop", price: 1200, quantity: 2, inStock: true },
  { name: "Mouse", price: 25, quantity: 10, inStock: true },
  { name: "Keyboard", price: 80, quantity: 0, inStock: false },
  { name: "Monitor", price: 300, quantity: 3, inStock: true },
];

const getInStockNames = (products) =>
  products.filter((product) => product.inStock).map((product) => product.name);

console.log(getInStockNames(products));

const getTotalValue = (products) =>
  products.reduce((acc, product) => acc + product.price * product.quantity, 0);

console.log(getTotalValue(products));

//sort()

const nums = [10, 1, 5, 100, 25];
nums.sort((a, b) => a - b);
console.log(nums); // [1,5,10,25,100]

nums.sort((a, b) => b - a);
console.log(nums); //[ 100, 25, 10, 5, 1 ]

///
/**
 * Sort Products
 * ---------------------------------------------------------------
 * Write TWO functions using .sort():
 *
 * 1. sortByPriceAsc(products)  -> products sorted by price, cheapest first
 * 2. sortByNameAsc(products)   -> products sorted by name, A -> Z

 */
const products2 = [
  { name: "Monitor", price: 300 },
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
];

const sortByPriceAsc = (products) => {
  const sortedProducts = [...products];
  return sortedProducts.sort((a, b) => a.price - b.price);
};
const sortByNameAsc = (products) => {
  const sortedProducts = [...products];
  return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
};
console.log(sortByNameAsc(products2));
console.log(sortByPriceAsc(products2));

//
/**
 * Group Products By Category
 * ---------------------------------------------------------------
 * Group products into an object where keys are categories
 * and values are arrays of products in that category.
 *
 * Example output:
 *   {
 *     tech: [ {Laptop}, {Mouse} ],
 *     food: [ {Apple}, {Bread} ]
 *   }
 */
const products3 = [
  { name: "Laptop", category: "tech" },
  { name: "Mouse", category: "tech" },
  { name: "Apple", category: "food" },
  { name: "Bread", category: "food" },
  { name: "Chair", category: "furniture" },
];

const groupByCategory = (products) =>
  products.reduce((acc, product) => {
    const key = product.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(product);
    return acc;
  }, {});

console.log(groupByCategory(products3));
