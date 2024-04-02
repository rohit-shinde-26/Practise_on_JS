// more useful things
// iterables
// const arr = ["ram", "Sham", "Hari", "Om"];
// console.log(arr.length);
// for (let ele of arr) {
//   console.log(ele);
// }

// let str = "Rohit";
// for (let ind of str) {
//   console.log(ind);
// }

// Sets

// const data = new Set();
// data.add(1);
// data.add(2);
// data.add(3);
// data.add(4);
// data.add(5);
// data.add(6);
// data.add(["ram", "sham", "hari"]);
// console.log(data);
// for (let ele of data) {
//   console.log(ele);
// }

// const data = [5, 6, 8, 2, 6, 4];
// const myData = new Set(data);
// let length = 0;
// for (let ele of data) {
//   length++;
// }
// console.log(length);

// maps
// const data = new Map();
// data.set("firstName", "Rohit");
// data.set([1, 21, 3], "Hello");
// console.log(data);
// for (let key of data.keys()) {
//   console.log(key, typeof key);
// }

// for (let [key, value] of data) {
//   console.log(key, value);
// }

// const data = new Map([
//   ["firstName", "Rohit"],
//   ["age", 21],
// ]);
// console.log(data);

// const info = new Map();
// const person = {
//   firstname: "Rohit",
//   age: 22,
//   email: "rohit@google.com",
// };

// info.set(person, { gender: "male" });
// console.log(info.get(person).gender);

// object assign
const obj1 = {
  name: "ram",
  age: "infinity",
};
// const obj2 = obj1;
// const obj2 = Object.assign({email : "ram@gmail.com"}, obj1);
const obj2 = {...obj1}
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
