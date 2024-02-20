const arr1 = ["ram", "sham", "hari", "om"];
arr1.push("abhi");
console.log(arr1);

const sBikes = ["H2R", "Z900", "Zx10R", "GT650"];
const newStock = [];

// for (let i = 0; i < sBikes.length; i++) {
//   // console.log(sBikes[i].toLowerCase());
//   newStock.push(sBikes[i].toLocaleLowerCase());
// }
// console.log(newStock);

let i = 0;
while (i < sBikes.length) {
  // console.log(sBikes[i]);
  newStock.push(sBikes[i].toLowerCase());
  i++;
}
console.log(newStock);
