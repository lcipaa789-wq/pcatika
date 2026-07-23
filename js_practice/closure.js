function outer() {
  let secret = "hidden";
  return function inner() {
    console.log(secret);
  };
}
const fn = outer();
console.log("--");
fn();
