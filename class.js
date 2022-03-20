class Person {
    constructor( firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}
/*
Class Person มี 2 property 2 method
*/

let p1 = new Person("pakornpong","hiranjaraspiwat")
// console.log('p1', p1.getFullName())

class Rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    draw() {
        for (let i = 0; i < this.height; i++) {
            console.log('#'.repeat(this.width))
        }
    }
}

let react1 = new Rectangle(4,5)
// console.log('react1 Area', react1.getArea())
// console.log('react1 Draw', react1.draw())

class Circle {
    constructor(r) {
        this.radius = r
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}

let circle1 = new Circle(10)
console.log('Area', circle1.getArea())

class Programer extends Person {
    constructor(description) {
        super("firstName", "lastName")
        this.description = description
    }
}

let programer1 = new Programer("test")
console.log('extend', programer1.description)
console.log('extend', programer1.getFullName())
