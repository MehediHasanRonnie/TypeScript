// build in data type:number,string,boolean, void, undefined, null
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Mehedi";
lastName = "Hasan";
isActivated = true;

fullName = firstName.concat(lastName);

console.log(
  `My user Id : ${userId}, User Name : ${fullName}, Active Status :${isActivated}`
);

console.log(fullName.split(","));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
//console.log(userId.toLowerCase()) it will throw an error

//void
function display(): void {
  console.log("Hello I'm display");
}
display();
