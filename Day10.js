let arr1 = ["Apple", "Banana", "Mango", "Grapes"];
// let arr2 = ["TATA", "BMW"];

// console.log(...arr1, ...arr2);
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let arr2 = arr1.slice(0).concat(["RAM", "SHAM"]);
let arr2 = [].concat(arr1, ["RAM", "SHAM"]);
// console.log(arr2);

//for
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
let op = [];
for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i].toLocaleUpperCase());
  op.push(arr1[i].toLocaleUpperCase());
}
console.log(op);
