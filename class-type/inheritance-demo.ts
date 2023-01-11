//inheritance

class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`User Name : ${this.userName}, user age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `UserName : ${this.userName} \nUserAge: ${this.age} \nId; ${this.studentId}`
    );
  }
}
let student1 = new Student("Rabbil", 25, 170100);
student1.display();
