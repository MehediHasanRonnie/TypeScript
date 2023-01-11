//constructor class using class and object

class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  //creating display function to console
  display(): void {
    console.log(`userName:${this.userName},age: ${this.age}`);
  }
}
// creating object to pass the variable
let user1 = new User("Mehedi hasan", 26);
user1.display();
