/**
 * Order Analytics
 * ---------------------------------------------------------------
 * Given an array of orders, compute some analytics.
 * Each order: { id, customer, total, status }
 *
 * Write a function that returns an object with:
 *   - completedCount: how many orders are "completed"
 *   - totalRevenue: sum of "total" for COMPLETED orders only
 *   - topCustomer: name of the customer with the highest single order
 *
 * Use the array methods you've learned.
 */
const orders = [
  { id: 1, customer: "Anna", total: 250, status: "completed" },
  { id: 2, customer: "Boris", total: 800, status: "pending" },
  { id: 3, customer: "Kate", total: 1200, status: "completed" },
  { id: 4, customer: "Anna", total: 150, status: "completed" },
  { id: 5, customer: "Boris", total: 500, status: "cancelled" },
];

function getAnalytics(orders) {
  const completedCount = orders.filter((o) => o.status === "completed").length;
  const totalRevenue = orders
    .filter((o) => o.status === "completed")
    .reduce((acc, o) => acc + o.total, 0);
  const topCustomer = orders.reduce((best, order) => {
    return order.total > best.total ? order : best;
  }).customer;
  return {
    completedCount,
    totalRevenue,
    topCustomer,
  };
}
console.log(getAnalytics(orders));
