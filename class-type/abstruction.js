var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    return Student;
}());
var info = /** @class */ (function (_super) {
    __extends(info, _super);
    function info(Name, Age, Id) {
        var _this = _super.call(this, Name, Age) || this;
        _this.Id = Id;
        return _this;
    }
    info.prototype.display = function () {
        console.log("Name: ".concat(this.Name, "\nAge:").concat(this.Age, "\nId:").concat(this.Id));
    };
    return info;
}(Student));
var information = new info("Akib Hassan", 28, 102);
information.display();
