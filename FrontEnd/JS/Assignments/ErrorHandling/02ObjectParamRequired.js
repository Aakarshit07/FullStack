/*
2. Building Robust Functions in JavaScript
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.
*/

function getPerson(person) {
    try {
        
        let res = {}
        res.Name = person.name;
        res.Age = person.age;
        
        if(res.hasOwnProperty("Name") && res.hasOwnProperty("Age") && res.Name && res.Age ){
            return res;
        } else {
            throw new Error("Invalid parameter type")
        }
        
    } catch (error) {
        return error.message
    }
}

// console.log(getPerson({name: "Dev", age: 20})); { Name: 'Dev', Age: 20 }
console.log(getPerson([{name: "Dev", age: 30}])); //Invalid parameter type
console.log(getPerson({name: "Dev"})); //Invalid parameter type