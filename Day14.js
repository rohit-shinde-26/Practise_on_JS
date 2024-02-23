let val1 = "Abhi";
let val2 = 20;

let key1 = "name";
let key2 = "age";

// const obj = {
//   key1: val1,
//   key2: val2,
// };

const obj = {};
obj[key1] = val1;
obj[key2] = val2;
console.log(obj);

const TATA = {
  model: "Harrier Facelift",
  color: "white",
  price: 1600000,
};

const total = { ...obj, ...TATA, mahindra: "thar" };
console.log(total);
