// Here we see the String methods also some operations
let str1 = "            Rohit              ";
// str1.toLocaleUpperCase();
str1 = str1.toUpperCase();
console.log(str1);

let str2 = "RAM";
console.log(str1.concat(str2));
console.log(str1.slice(1, 4));
console.log(str1.trim());
console.log(str1.length);

console.log("Conversion with shorthands");
let myNum = 31;
console.log(typeof myNum);
// myNum = String(myNum);
// myNum = myNum.toString();
myNum = myNum + "";
console.log(typeof myNum);

let myStr = +"34";
let newString = "22";
newString = Number(newString);
// newString = +newString;
console.log(typeof newString);
