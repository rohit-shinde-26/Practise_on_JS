// rest parameter
// const para = (a, b, ...c) => {
//   console.log(`value of a is ${a}`);
//   console.log(`value of b is ${b}`);
//   console.log(`value of c is ${c}`);
// };
// para(1, 2, 3, 4, 5, 6, 7, 8, 9);

// add numbers using rest parameter
const Add = (...numbers) => {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
};
const ans = Add(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(ans);
