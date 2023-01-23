interface IuserFormatter {
  formateuser: () => string;
}
class User implements IuserFormatter {
  constructor(private fullname: string, private age: number) {}
  formateuser = () => {
    return `name: ${this.fullname} and age: ${this.age}`;
  };
}
let user = new User("Mhehedi", 26);
console.log(user.formateuser());
