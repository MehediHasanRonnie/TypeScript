//array data type:its a user define data type
//1.approach of declaring array instade of string we can use number[],boolean[] data type as well
let userName: string[];
userName = ["Mehedi", "Hasan", "Ronnie", "Traveller"];
console.log(userName[2]);

let userId: Array<number>;
userId = [101, 102, 103, 104];
console.log(userId[1]);

//multiple type array

let multipleType: (string | number | boolean)[];
multipleType = [103, "rajhes Khanna", false];
console.log(multipleType[0]);
// console.log(multipleType[1]);
// console.log(multipleType[2]);

//more about array
let users: (string | number)[];
users = ["Mehedi", "buppy", "hasan", "Ronnie"];

for (let index = 0; index < userId.length; index++) {
  //looping
  const elements = users[index];
  console.log(elements);
}

users.forEach((element) => {
  //foreach
  console.log(element);
});

users.sort();
console.log(users);

users.push("limon");
console.log(users);

users.pop();
console.log(users);

users.unshift("Milon");
console.log(users);

users.shift();
console.log(users);
