// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.

class Employee {
    constructor(name, position, salary) {
        this.name = name,
        this.position = position,
        this.salary = salary
    };

    getSalary = () => `Salary: ${this.salary}`;

}

const employee1 = new Employee("Dev", "SDE III", "50,00,000");

console.log(employee1.getSalary());
