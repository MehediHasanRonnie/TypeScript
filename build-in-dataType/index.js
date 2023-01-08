// build in data type:number,string,boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Mehedi";
lastName = "Hasan";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("My user Id : ".concat(userId, ", User Name : ").concat(fullName, ", Active Status :").concat(isActivated));
console.log(fullName.split(","));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
//console.log(userId.toLowerCase()) it will throw an error
//void
function display() {
    console.log("Hello I'm display");
}
display();
