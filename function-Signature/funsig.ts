// function signature
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => void;
//Application of function signature
userInfo1 = () => {
  console.log("I'm Mehedi and i'm 26 years old");
};
userInfo2 = (name: string) => {
  console.log(`I'm ${name} and i'm 25 years old`);
};
userInfo3 = (name: string, age: number) => {
  console.log(`I'm ${name} and i'm ${age} years old`);
};
userInfo1();
userInfo2("Hasan");
userInfo3("Ronnie", 24);
