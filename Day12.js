let bikes = ["BMW", "GT650", "H2R"];
let park = [];
// for (let bike of bikes) {
//   console.log(bike);
//   park.push(bike);
// }
// console.log(park);

for (let num in bikes) {
  park.push(bikes[num]);
}
console.log(park);
