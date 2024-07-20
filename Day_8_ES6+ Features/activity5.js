
// ************************ Enhanced Object Literals **************************


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person = {
    // Property using shorthand syntax
    name: 'Shailesh',
    // Method using shorthand syntax
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
    // Method with a regular function syntax
    introduce: function() {
        return `Nice to meet you! I'm ${this.name}.`;
    }
};


console.log(person);


// Task 9: Create an object with computed property names based on variables and log the object to the console.


// Variables for computed property names
const propName1 = 'firstName';
const propName2 = 'lastName';

// Create an object with computed property names
const user = {
    [propName1]: 'Shailesh',
    [propName2]: 'Prajapati',
    age: 23,
    occupation: 'Developer'
};

console.log(user);
