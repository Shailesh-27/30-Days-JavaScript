
const person = {
    name: "Shailesh Prajapati",
    age: 23,
    gender: "male",
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}


module.exports = person;