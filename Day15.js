const cars = {
  comapny: "Honda",
  model: "Civic",
  price: 2500000,
};

let { comapny, model } = cars;

console.log(comapny);

const arr1 = [
  { company: "Honda", Model: "City", colour: "white" },
  { company: "TATA", Model: "Safari", colour: "Black" },
  { company: "Mahindra", Model: "Thar", colour: "Red" },
];
console.log(arr1);

let [{ company, colour }] = arr1;
console.log(colour);
