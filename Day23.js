const myArr = [2, 6, 8, 5, 2, 1, 4];

// myArr.forEach((Number, index) => {
//   console.log(`${Number} : ${index}`);
// });

// const ans = myArr.map((number) => {
//   return number * 2;
// });
// console.log(ans);

// const ans = myArr.filter((num) => {
//   return num % 2 == 0;
// });
// console.log(ans);

// const ans = myArr.reduce((accumulator, total) => {
//   return accumulator + total;
// });
// console.log(ans);

// const ans = myArr.sort((a, b) => {
//   return a - b;
// });
// console.log(ans);

const arr = ["Ram", "Abhi", "Akash", "Akay"];

// const ans = arr.find((num) => {
//   return num.length == 3;
// });
// console.log(ans);

// const ans = myArr.every((num) => {
//   return num % 2 == 0;
// });
// console.log(ans);

// const ans = myArr.some((num) => {
//   return num % 2 == 0;
// });
// console.log(ans);

// myArr.fill(0, 2, 5);

myArr.splice(1, 2, 5);
console.log(myArr);
