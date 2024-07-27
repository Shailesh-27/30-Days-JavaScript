// ************************ Practical Closures **************************


// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generatRandomID(){
    let lastID = 0;

    function getID(){
        lastID++;
        return lastID
    }
    return getID;
}

const generateId = generatRandomID();

console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greet(){
    function greetingMsg(name){
        return `Welcome ${name}!`
    }
    return greetingMsg;
}

const greetingFunction = greet();
console.log(greetingFunction("Shailesh Prajapati"));