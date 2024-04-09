// imp array methods

const arr = [3, 5, 8, 74, 1, 6, 9];

// function myFunc(number,index){
//   console.log(`${index} : ${number}`)
// }
// arr.forEach(myFunc)

// const myFunc = arr.map((Number, index) => {
//   return Number*Number;
// });
// console.log(myFunc);

// const myFunc = arr.filter((Number, index) => {
//   return Number % 2 == 0;
// });
// console.log(myFunc);

// const myFunc = arr.reduce((accumulator, total) => {
//   return accumulator + total;
// });
// console.log(myFunc);

// const myFunc = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(myFunc);

// const myArr = ["Abhay","Akshay","Rohit","Ram"]
// const myFunc = myArr.find((str) => {
//   return str.length>=3
// });
// console.log(myFunc);

// const myFunc = arr.every((num) => {
//   return num%2==0
// });
// console.log(myFunc);

const myFunc = arr.some((num) => {
  return num % 2 == 0;
});
console.log(myFunc);
