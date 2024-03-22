const myArr = [20, 65, 44, 88, 5];
// myArr.forEach((nums, index) => {
//   console.log(`ine index is ${index} and no is ${nums}`);
// });

// const ans = myArr.map((num) => {
//   return num * num;
// });
// console.log(ans);

// const ans = myArr.filter((num) => {
//   return num % 2 == 0;
// });
// console.log(ans);

// const ans = myArr.reduce((accumulator, main) => {
//   return accumulator + main;
// }, 10);
// console.log(ans);

// const ans = myArr.sort((a, b) => {
//   return a - b;
// });

// console.log(ans);

const showRoom = [
  { id: 1, name: "Mustang", price: 800 },
  { id: 2, name: "Lambo", price: 5000 },
  { id: 3, name: "BMW M5", price: 8000 },
  { id: 4, name: "Cian", price: 800 },
];

// check all car price
// showRoom.forEach((data, index) => {
//   console.log(data.price);
// });

// const ans = showRoom.map((data)=>{
//   return data.price * 2
// })
// console.log(ans)

// const ans = showRoom.reduce((totalPrice, currentProduct) => {
//   return totalPrice + currentProduct.price;
// }, 10);
// console.log(ans);


const ans = showRoom.sort((a,b)=>{
  return b.price-a.price
})
console.log(ans)