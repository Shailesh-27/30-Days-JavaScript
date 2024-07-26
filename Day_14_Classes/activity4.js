// ************************ Getters and Setters **************************


// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Getter method to return the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method to update the name properties
    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName || '';
        this.lastName = lastName || '';
    }

    greet() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    // Static method
    static genericGreeting() {
        return "Hello from the Person class!";
    }
}

// Create an instance of the Person class
const personInstance = new Person('Shailesh', 'Prajapati', 23);

// Log the full name using the getter
console.log(personInstance.fullName);

// Log the greeting message
console.log(personInstance.greet());

// Update the name using the setter
personInstance.fullName = 'Shailesh Kumawat';

// Log the updated full name
console.log(personInstance.fullName);

// Log the updated greeting message
console.log(personInstance.greet());

