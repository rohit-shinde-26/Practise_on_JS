// see the truthy and falsy values

// falsy values
// false
// undefined
// null
// 0
// ""

let myValue = 0;
if (myValue) {
  console.log("if run");
} else {
  console.log("else part run ");
}

// truthy values
// true
// "heelo,anything"
// 1 ,3

let val = 16;
if (val % 2 === 0) {
  console.log(val * 2);
} else {
  console.log("odd");
}

// ternary operator
let age = 18;
let result;
// let result = age > 12 ? "teen" : "child";
// console.log(result);

// && or || operator

let myDrink = "coffee";
let anotherDrink = "chai";

// if (myDrink[0] === "c" && anotherDrink[0] === "c") {
//   console.log("enjoy same");
// } else {
//   console.log("enjoy different");
// }

let resultDrink =
  myDrink[0] === "c" && anotherDrink[1] === "c"
    ? console.log("enjoy same")
    : console.log("enjoy different");
