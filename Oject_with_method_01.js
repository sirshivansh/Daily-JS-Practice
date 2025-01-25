// Object with a Method:

// Create an object person with properties firstName, lastName, and a method fullName 
// that returns the full name by combining firstName and lastName.

let person = {
    firstName : "Shivansh",
    lastName : "Mishra",
    fullName : function() { 
        console.log(this.firstName + " " + this.lastName);
    }
};
person.fullName();

// Here Function() method is used!