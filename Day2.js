// sees some declaration using var
var myName = "Rohit";
var myName = "RAM";
var myNam = "Rudra";
console.log(myName);

// sees with the let also
let myName1 = "Rohit";
// let myName1 = "RAM";
myNam1 = "Rudra";
console.log(myName1);

// sees with const also
const myName2 = "Rohit";
// const myName2 = "RAM";
// myNam2 = "Rudra";
console.log(myName2);

console.log(
  "----------------------- STRING ----------------------------------",
);
let str1 = "Rohit";
console.log(str1[2]);

let age = 20;
console.log("my name is " + str1 + " and my age is " + age);
console.log(`My name is ${str1} and my age is ${age}`);

console.log(str1.length);
console.log(str1.toUpperCase());

str1.toLowerCase();

str1 = str1.toLowerCase();
console.log(str1);
