const myStack = {
  monitor: "Ultragear",
  processor: "Ryzen 5900x",
  keyboard: "ReadGear",
};

myStack.monitor = "Acer";
myStack["Mouse"] = "ANT Esport";
console.log(myStack);

for (let comp in myStack) {
  console.log(` ${comp}`);
}

let key1 = "laptop";
let key2 = "mobile";
let val1 = "hp";
let val2 = "A52s";
const myFav = {};
myFav[key1] = val1;

console.log(myFav);

const showRoom = [
  { id: 1, mName: "Samsung s24 ultra", price: 140000 },
  { id: 2, mName: "iphone 14 pro", price: 150000 },
  { id: 1, mName: "Samsung fold Z", price: 120000 },
  { id: 1, mName: "Vivo x90", price: 80000 },
];
console.log(showRoom);
for (let piece of showRoom) {
  console.log(piece.mName.toUpperCase());
}
