// methods
// function myFunc(val1, val2) {
//   console.log(
//     `hey i am ${this.name} and my age is ${this.age} & my hobby is ${val1} also ${val2}`,
//   );
// }

// const person1 = {
//   name: "Ram",
//   age: 22,
//   about: myFunc,
// };

// const person2 = {
//   name: "Sham",
//   age: 12,
// };
// // person1.about.call(person2);
// // myFunc.call(person2);

// // myFunc.apply(person2, ["coding", "Gaming"]);
// const ans = myFunc.bind(person2, "Gaming", "Coding");
// ans();

// iterables
// sets
// const hello = new Set();
// hello.add(1);
// hello.add("abc");
// hello.add(["abhi", "aki"]);
// console.log(hello);
// for (let key of hello) {
//   console.log(key);
// }

// map
// const hello = new Map([
//   ["name", "Ram"],
//   ["age", 22],
// ]);

// console.log(hello);

// const hello = new Map();
// const obj = {
//   name: "ram",
//   age: 22,
// };
// hello.set(obj);

// hello.set(obj, { gender: "male" });
// // console.log(hello.get(obj).gender);
// // console.log(hello);

// for (let [key, val] of hello) {
//   console.log(key, val);
// }

// const info = new Map();
// info.set("name", "Ram");
// info.set("age", 22);
// info.set(1, "one");

// for (let [key, val] of info) {
//   console.log(key, typeof key);
// }

