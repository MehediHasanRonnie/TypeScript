//object data type  using  TypeScript

//1st approach
let user1: { userName: string; userId: number };
user1 = { userName: "Mehedi", userId: 101 };
console.log(user1);

//2nd approach using Object Array

let students: object[];
students = [{ name: "Mehedi" }, { id: 101 }, { phone: "01718295482" }];
console.log(students[1]);

//3rd approach appending value in the object

let info: object[];

info = [];
let infostu1: { Name: string; Id: number };
infostu1 = { Name: "Mehedi", Id: 101 };
info.push(infostu1);

let infostu2: { Name: string; Id: number };
infostu2 = { Name: "Hasan", Id: 102 };
info.push(infostu2);

for (const key in info) {
  console.log(info[key]["Id"]);
}
