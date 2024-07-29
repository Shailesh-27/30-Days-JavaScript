// ************************ Stack **************************


// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack{
    constructor(){
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Display all elements in the stack
    display() {
        console.log(this.items.join(' <- '));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Output: 10 <- 20 <- 30

console.log(stack.peek()); // Output: 30

console.log(stack.pop());  // Output: 30
stack.display(); // Output: 10 <- 20

console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

stack.pop(); // Remove 20
stack.pop(); // Remove 10
console.log(stack.isEmpty()); // Output: true


// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str){
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for(let char of str){
        stack.push(char);
    }

    let reversed = '';

    while(!stack.isEmpty()){
        reversed += stack.pop();
    }

    return reversed;
}

const originalString = 'Shailesh';
const reversedString = reverseString(originalString);

console.log("Original String:", originalString);  // Output: Shailesh
console.log("Reversed String:", reversedString);  // Output: hseliahS
