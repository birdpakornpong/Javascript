/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/OOP.ts ***!
  \********************/
/* Abstraction แปลว่า สิ่งที่เป็นนามธรรม */
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName}`;
    }
}
let s1 = new Student("birdtest", "lastName");
console.log('s1', s1.getFullName());
// console.log('s1', s1.lastName)
class StudentBird extends Student {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    age() {
        return 25;
    }
    protectedTest() {
        return this.lastName; // ได้ protected
    }
    privateTest() {
        // return this.firstName ไม่ได้ private
    }
}
let birdStudent = new StudentBird("birdStart", "lastBirth");
console.log('birdasd', birdStudent.age());
console.log('testProtected', birdStudent.protectedTest());
// console.log('testProtected', birdStudent.lastName) ไม่ได้ ติิด protected
/*
    Abstration นามธรรม
    Encapsulation การจัดการข้อมูล ปกป้องข้อมูล private protected public
    Inheritance การสืบทอด extend class
    Polymorphism เปลี่ยนรูปได้
*/
class Flyable {
    fly() {
        return "บินนนน~";
    }
}
class Bird extends Flyable {
    fly() {
        return "นกบิน";
    }
}
class Airplane extends Flyable {
    fly() {
        return "เครื่องบินบิน";
    }
}
class Drone extends Flyable {
    fly() {
        return "โดรนบิน";
    }
}
let air = new Airplane();
let drone = new Drone();
console.log('air', air.fly());
console.log('drone', drone.fly());

/******/ })()
;
//# sourceMappingURL=index.js.map