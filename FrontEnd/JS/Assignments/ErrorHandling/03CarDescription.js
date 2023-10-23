// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.

class Car {
    constructor(company, model, year) {
        this.company = company
        this.model = model
        this.year = year
    }

    getDescription = () => `This is a ${this.year} ${this.company} ${this.model}`;
}

let myCar = new Car("Audi", "R8", 2023)
console.log(myCar.getDescription());