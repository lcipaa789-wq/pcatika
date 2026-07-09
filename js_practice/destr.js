const user = {
  name: "Anna",
  age: 30,
  city: "NYC",
};
const { name, age } = user;
console.log(name);
console.log(age);

//
/**
 * Remove Password
 * ---------------------------------------------------------------
 * Given a user object, return a NEW object without the password field.
 * Use destructuring with rest.
 *
 * Example:
 *   const user = { id: 1, name: "Anna", password: "secret123", email: "a@b.c" };
 *   removePassword(user)  =>  { id: 1, name: "Anna", email: "a@b.c" }
 */

const user2 = {
  id: 1,
  name: "Anna",
  password: "secret123",
  email: "a@b.c",
};
const removePassword = (user) => {
  const { password, ...rest } = user;
  return rest;
};
console.log(removePassword(user2));
