// ************************ Class Definition **************************


// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Create an instance of the Person class
const personInstance = new Person('Shailesh', 21);

console.log(personInstance.greet());

//// Update the age and log the updated age
personInstance.updateAge(23);

// Log the updated greeting message
console.log(personInstance.greet());

