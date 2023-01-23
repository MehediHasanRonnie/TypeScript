// access modifier-- public,private,protacted,readonly
class User {
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log("Hi");
  }
}
class Students extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName} \nage: ${this.age} \nStudent Id:${this.studentId}`
    );
  }
  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}
let Student1 = new Students("Mehedi", 26, 101);
Student1.display();
//..................................................
let user1 = new Students("Hasan", 25, 102);
user1.userName = "Ronnie";
user1.setStudentId(324354);
console.log(user1.getStudentId());
//user1.display();
