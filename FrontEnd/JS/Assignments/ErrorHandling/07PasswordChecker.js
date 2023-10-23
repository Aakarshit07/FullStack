// 7. Password Checker.


// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.


// class User {
//     constructor(username, password){
//         this.username = username,
//         this.password = password
        
//     }
//     get result(){
//         return this.setPassword(); 
       
//     }

//     setPassword(password) {
//         let res = "";
//         for(let i = 0; i < password.length; i++){

//           if(password.length <= 8){
//             return "Error: Paaword must be at least 8 characters long and contain at least one number and one uppercase letter."

//           } else if(!/[A-Z]/.test([password] || !/[0-9]/.test(password))){

//             return "Error: Paaword must be at least 8 characters long and contain at least one number and one uppercase letter."

//           } else {
//             res += "*"
//           }
//         }
//         return res;
//     }
// }

// const user = new User("Dev", "Password123");
// console.log(user.setPassword("Password123"));

// console.log(user.setPassword("pasword"));
// console.log(user.setPassword("mypassword"));

// Second Approach ***********************************************

class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; // Use a private property with an underscore
    }

    get password() {
        // Getter to return the password with asterisks
        return this._password.replace(/./g, '*');
    }

    set password(newPassword) {
        // Setter to check and set a new password
        if (
            newPassword.length >= 8 &&
            /[A-Z]/.test(newPassword) &&
            /[0-9]/.test(newPassword)
        ) {
            this._password = newPassword;
        } else {
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

const user = new User("Dev", "Password123");

user.password = "NewPassword123"; // Setting a valid password
console.log(user.password); // Outputs: ***********

user.password = "pass"; // Setting an invalid password
// Outputs: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
