// const friends = ["Ram", "Abhi", "Akshay"];
// friends.push("Akay");

// console.log(friends);

// const [...myFriends] = friends;
// console.log(myFriends);

// console.log(friends === myFriends);
// let i = 0;
// while (i < friends.length) {
//   console.log(friends[i]);
//   i++;
// }

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i].toUpperCase());
// }
// for (let friend of friends) {
//   console.log(friend);
// }
// for (let friend in friends) {
//   console.log(`${friends[friend]}`);
// }

// const friends = ["Ram", "Abhi", "Akshay"];
// const [id1, ...other] = friends;
// console.log(id1)

//objects
// const showRoom = {
//   name: "Mustang Gt",
//   colour: "Red",
//   price: 8000000,
// };
// for (let data in showRoom) {
//   console.log(`${data} : ${showRoom[data]}`);
// }
// let myObj = {};
// let key1 = "name";
// let key2 = "age";
// let val1 = "Rohit";
// let val2 = 21;
// myObj[key1] = val1;
// myObj
// console.log(myObj);

const carsData = {
  car1: "Mustang",
  car2: "Civic",
  car3: "Verna Turbo",
  car4: "City",
};
const { car1, ...other } = carsData;
console.log(other);

const showRoom = [
  { id: 1, name: "Mustang", color: "Red" },
  { id: 2, name: "Civic", color: "Voilet" },
  { id: 3, name: "Supra", color: "White" },
  { id: 4, name: "Verna", color: "Black" },
];
