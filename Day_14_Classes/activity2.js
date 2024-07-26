// ************************ Class Inheritance **************************


// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Define the Student class that extends Person
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
    }

    greet(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId(){
        return `Student ID: ${this.studentId}`;
    }
}

// Create an instance of the Student class
const studentInstance = new Student("Shailesh",23,'1234')

console.log(studentInstance.getStudentId());
console.log(studentInstance.name);
console.log(studentInstance.age);

// Log the overridden greeting message
console.log(studentInstance.greet());

