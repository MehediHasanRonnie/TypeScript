//object data type  using  TypeScript
//1st approach
var user1;
user1 = { userName: "Mehedi", userId: 101 };
console.log(user1);
//2nd approach using Object Array
var students;
students = [{ name: "Mehedi" }, { id: 101 }, { phone: "01718295482" }];
console.log(students[1]);
//3rd approach appending value in the object
var info;
info = [];
var infostu1;
infostu1 = { Name: "Mehedi", Id: 101 };
info.push(infostu1);
var infostu2;
infostu2 = { Name: "Hasan", Id: 102 };
info.push(infostu2);
for (var key in info) {
    console.log(info[key]["Id"]);
}
