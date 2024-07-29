// ************************ Linked List **************************


// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.


class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }

    // toString(){
    //     return `Node(value=${this.value}, next=${this.next})`;
    // }

    toString(){
        let result = '';
        let current = this;
        while(current !== null){
            result += `Node(value=${current.value}) => `;
            current = current.next;
        }
        result += 'null';
        return result;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.toString());  // Output: Node(value=1, next=[object Object])
// console.log(node2.toString());  // Output: Node(value=2, next=[object Object])
// console.log(node3.toString());  // Output: Node(value=3, next=null)


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.


class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // Add a node to the end of the list
    add(value){
        const newNode = new Node(value);

        if(this.tail){
            this.tail.next = newNode;
        }
        else{
            this.head = newNode;
        }
        this.tail = newNode;
    }

    // Remove a node from the end of the list
    remove(){
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            // If there's only one node, remove it and update head and tail to null
            const value = this.head.value;
            this.head = this.tail = null;
            return value;
        }
        // Traverse the list to find the second-to-last node
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }

        // Remove the tail node
        const value = this.tail.value;
        this.tail = current;
        this.tail.next = null;
        return value;
    }

    // Display all nodes in the list
    display() {
        let result = '';
        let current = this.head;
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        result += 'null'; // End of the list
        console.log(result);
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();  // Output: 1 -> 2 -> 3 -> null

list.remove();   // Removes 3
list.display();  // Output: 1 -> 2 -> null

list.remove();   // Removes 2
list.display();  // Output: 1 -> null

list.remove();   // Removes 1
list.display();  // Output: null (list is empty)