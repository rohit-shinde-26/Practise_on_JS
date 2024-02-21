let obj = {
  name: "Ram",
  age: 20,
  class: "TYBCS",
  sub: ["OS", "JAVA", "CC"],
};
console.log(obj);

// for (let key in obj) {
//   console.log(`${key} : ${obj[key]}`);
// }

for (let i of Object.keys(obj)) {
  console.log(obj[i]);
}
