const myArr = ["Ultragear", "RTX3080TI", "Ryzen 5900X"];
myArr.push("XPG 8gb");
console.log(myArr);
const [monitor, ...myStack] = myArr;

console.log(monitor);
console.log(myArr === myStack);

// let i = 0;
// while (i < myStack.length) {
//   console.log(`${myStack[i]}`);
//   i++;
// }

for (let comp of myStack) {
  console.log(comp);
}
for (let comp in myStack) {
  console.log(` ${myStack[comp]}`)
}
