// 6. Using Static Method to Add Two Numbers with Calculator Class

// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method

class Calculator {
    static add = (a, b) => a + b; 
}

console.log(Calculator.add(20, 10));


// About StaticMethod
// Certainly! In JavaScript, the static keyword is used inside a class to define methods or properties that are associated with the class itself, not with instances (objects) of the class.

// Here's a simple explanation:

// Imagine you have a class for cars. A regular method inside the class, like startEngine(), would apply to a specific car object, like "myCar.startEngine()." But a static method inside the class, like countCars(), doesn't apply to any specific car; instead, it counts all cars, like "Car.countCars()."

// So, in simple terms, a static method or property in a class is something you can use without creating an instance of the class. It's like a class-level feature rather than an instance-level feature.





