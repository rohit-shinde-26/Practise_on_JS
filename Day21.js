// const friends = ["Ram", "Abhi", "Akshay"];
// friends.push("Akay");

// console.log(friends);

// const [...myFriends] = friends;
// console.log(myFriends);

// console.log(friends === myFriends);
// let i = 0;
// while (i < friends.length) {
//   console.log(friends[i]);
//   i++;
// }

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i].toUpperCase());
// }
// for (let friend of friends) {
//   console.log(friend);
// }
// for (let friend in friends) {
//   console.log(`${friends[friend]}`);
// }

// const friends = ["Ram", "Abhi", "Akshay"];
// const [id1, ...other] = friends;
// console.log(id1)

//objects
// const showRoom = {
//   name: "Mustang Gt",
//   colour: "Red",
//   price: 8000000,
// };
// for (let data in showRoom) {
//   console.log(`${data} : ${showRoom[data]}`);
// }
// let myObj = {};
// let key1 = "name";
// let key2 = "age";
// let val1 = "Rohit";
// let val2 = 21;
// myObj[key1] = val1;
// myObj
// console.log(myObj);

// const carsData = {
//   car1: "Mustang",
//   car2: "Civic",
//   car3: "Verna Turbo",
//   car4: "City",
// };
// const { car1, ...other } = carsData;
// console.log(other);

// const showRoom = [
//   { id: 1, name: "Mustang", color: "Red" },
//   { id: 2, name: "Civic", color: "Voilet" },
//   { id: 3, name: "Supra", color: "White" },
//   { id: 4, name: "Verna", color: "Black" },
// ];

// functions
// function add(no1, no2) {
//   console.log(no1 + no2);
// }
// add(3, 7);

// const sub = function (num1, num2) {
//   console.log(num1 - num2);
// };
// sub(8, 2);

// const findStr = (str) => str[0];
// console.log(findStr("Ram"));

// console.log(add(9, 4));
// function add(n1, n2) {
//   return n1 + n2;
// }

// Default parameter
// const add = (a, b) => {
//   if (typeof b == "undefined") {
//     b = 1;
//   }
//   return a + b;
// };
// console.log(add(4));
// const add = (a, b = 4) => {
//   return a + b;
// };
// console.log(add(4));

// parameter destructuring
const myObj = {
  name: "ram",
  age: 21,
};

// const myFunc = (obj) => {
//   console.log(obj.name);
// };

// myFunc(myObj);
// const myFunc = ({ name, age }) => {
//   console.log(name);
// };

// myFunc(myObj);

// rest
// function hello(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total = total + number;
//   }
//   return total;
// }
// const ans = hello(3, 4, 5, 6, 7, 8, 9);
// console.log(ans);

// callback
// const myFunc = (name) => {
//   console.log("this is function");
//   console.log(`my name is ${name}`);
// };
// const anotherFunc = (callback) => {
//   console.log("This is another function");
//   callback("Rohit");
// };
// anotherFunc(myFunc);

// imp array methods
const myArr = [2, 4, 56, 7, 3, 2, 46];
// myArr.forEach((Number, index) => {
//   console.log(`index id ${index} and number is ${Number}`);
// });

// const ans = myArr.map((num, index) => {
//   return num * num;
// });
// console.log(ans);

// const ans = myArr.filter((number) => {
//   return number % 2 === 0;
// });
// console.log(ans);

// const ans = myArr.reduce((accumulator,total)=>{
//   return accumulator + total
// })
// console.log(ans)

// const ans = myArr.sort((a, b) => {
//   return a - b;
// });
// console.log(ans);

const users = [
  { firstName: "Rohit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

// const ans = users.forEach((data, index) => {
//   console.log(`index of ${index} is ${data.firstName}`);
// });

// const ans = users.map((no) => {
//   return no.age * 2;
// });
// console.log(ans);

// const ans = users.reduce((accumulator, friend) => {
//   return accumulator + friend.age;
// },10);
// console.log(ans);

const ans = users.sort((a, b) => {
  return b.firstName - a.firstName;
});
console.log(ans);
