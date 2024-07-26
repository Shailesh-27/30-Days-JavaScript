// ************************ Static Methods and Properties **************************


// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

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

    // Static method
    static genericGreeting() {
        return "Hello from the Person class!";
    }
}

// Define the Student class that extends Person
class Student extends Person{
    // Static property to keep track of the number of students created
    static studentCount = 0;

    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    greet(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId(){
        return `Student ID: ${this.studentId}`;
    }

    // Static method to get the student count
    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

// Call the static method without creating an instance of the class
console.log(Person.genericGreeting());

// Create instances of the Student class
const student1 = new Student('Shailesh', 23, '1234');
const student2 = new Student('Yash', 22, '1235');

console.log(Student.getStudentCount());

