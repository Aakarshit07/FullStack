// - An Object is an entity with certain state and bheaviour. 
// - example: car, pen, bicycle
// - car: -> is object and it contains "Properties"  and  "Behaviour"
// - Properties that one car can have like its name, fule capacity, manufacturer, etc. properties also knows as keys
// - Behaviour like car start, car stop, can accelerate. also know as values
// - so to identify which car it is we check for the properties and bheaviour of all the cars are same. 


// - Creating Object and Manipulation values in Object

// - Frist way
// - let objectName = {key: value, name: "Alex"};
// console.log(objectName);

let obj = {id: 101, employeeName: "Alex", salary: 10000};
console.log(obj);

// - Second way

let emp = new Object();
emp.id = 102;
emp.name = "Sam";
console.log(emp)

// - Third way 

function Emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e = new Emp(103, "Amily", 12000);
console.log(e)

// - Accessing key values

console.log(emp.id);
console.log(emp['name']);


// - Updating existing key values

emp.id = 113;
emp['salary'] = 13000;
emp['name'] = "Mr. Sam"

// - deleting key values

delete emp.id;

console.log(emp);


// - Object Methods

let employee = {
    id: 101,
    name: "Aakarshit",
    age: 23,

};

// - To get all the keys of object
let keys = Object.keys(employee);
console.log(keys)

// - To get all the values of keys of object
let values = Object.values(employee);
console.log(values);

// - To get all the values and keys of object together 
let entries = Object.entries(employee);
console.log(entries);

// - Freezing Object so that it wont update values or add new ones or delete old ones

// Object.freeze(employee)
// employee.id = 100;
// console.log(employee);

// - seal an Object partially, here we can only update but cant delete old ones and cant add new ones
Object.seal(employee)
employee.id = 111;
delete employee.id;
employee['address'] = "Random";
console.log(employee);

// - To copy the object key values into other object 
let o = Object.assign({address: "randome"}, employee); // assign({here it can be empty object or object with some key values }, object)
console.log(o)


