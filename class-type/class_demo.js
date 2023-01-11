//constructor class using class and object
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    //creating display function to console
    User.prototype.display = function () {
        console.log("userName:".concat(this.userName, ",age: ").concat(this.age));
    };
    return User;
}());
// creating object to pass the variable
var user1 = new User("Mehedi hasan", 26);
user1.display();
