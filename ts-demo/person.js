"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(fname) {
        var _this = this;
        this.speak = function () {
            console.log("Hello " + _this.firstname);
        };
        this.firstname = fname;
    }
    return Person;
}());
exports.Person = Person;
