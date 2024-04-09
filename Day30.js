// iterables

// sets
// const myset = new Set();
// myset.add(3);
// myset.add(4);
// myset.add(4);
// myset.add(7);
// myset.add(8);

// console.log(myset);

// for(let ele of myset){
//   console.log(ele)
// }

// Maps
// const myObj = new Map();
// myObj.set("firstName", "Rohit");
// myObj.set("lastNAme", "Shinde");
// myObj.set("email", "rohit@google.com");

// console.log(myObj);

// const person1 = {
//   name: "ram",
//   age: 22,
// };
// const details = new Map();
// details.set(person1);

// details.set(person1, { gmail: "hello@123" });

// console.log(details.get(person1).gmail)

// object assign

// const obj1 = {
//   name : "Ram",
//   age : 22
// }

// const obj2 = ({},obj1)

// console.log(obj2)

// optional chaining
const obj = {
  name: "Ram",
  // about: {
  //   houseno: "64654645",
  // }
};

console.log(obj.name);
console.log(obj?.about?.houseno);
