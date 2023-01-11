abstract class Student {
  Name: string;
  Age: number;

  constructor(Name: string, Age: number) {
    this.Name = Name;
    this.Age = Age;
  }

  abstract display(): void; //abstruct method(display()Method)
}

class info extends Student {
  Id: number;

  constructor(Name: string, Age: number, Id: number) {
    super(Name, Age);
    this.Id = Id;
  }
  display(): void {
    console.log(`Name: ${this.Name}\nAge:${this.Age}\nId:${this.Id}`);
  }
}
let information = new info("Akib Hassan", 28, 102);
information.display();
