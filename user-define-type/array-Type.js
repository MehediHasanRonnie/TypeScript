//array data type:its a user define data type
//1.approach of declaring array instade of string we can use number[],boolean[] data type as well
var userName;
userName = ["Mehedi", "Hasan", "Ronnie", "Traveller"];
console.log(userName[2]);
var userId;
userId = [101, 102, 103, 104];
console.log(userId[1]);
//multiple type array
var multipleType;
multipleType = [103, "rajhes Khanna", false];
console.log(multipleType[0]);
// console.log(multipleType[1]);
// console.log(multipleType[2]);
//more about array
var users;
users = ["Mehedi", "buppy", "hasan", "Ronnie"];
for (var index = 0; index < userId.length; index++) {
    //looping
    var elements = users[index];
    console.log(elements);
}
users.forEach(function (element) {
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
