// 5. Implementing a Person Class with Default Values

// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.


class Person {
    constructor(name = "Unknown", age = 0) {
        this.Name = name,
        this.Age = age
    }
    getDetails = () => `Name: ${this.Name}, Age: ${this.Age}`;
}

let person1 = new Person("Dev", 20)
let person2 = new Person();

console.log(person1.getDetails())
console.log(person2.getDetails())