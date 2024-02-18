let myArray = ["ram", "sham", "hari", "om"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray.indexOf("sham"));

console.log(myArray.push("abhay"));
// console.log(myArray.unshift("akash"));

console.log(myArray);
let finalArr = myArray.pop();
// let finalArr = myArray.shift();
console.log(`here is the return array element is => ${finalArr}`);
console.log(myArray);

console.log(Array.isArray(myArray));
