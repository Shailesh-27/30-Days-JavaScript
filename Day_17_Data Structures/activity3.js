// ************************ Queue **************************


// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).


class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift(); // `shift` removes the first element from the array
    }

    // Return the element at the front of the queue without removing it
    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Display all elements in the queue
    display() {
        console.log(this.items.join(' <- '));
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Output: 10 <- 20 <- 30

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10
queue.display(); // Output: 20 <- 30

console.log(queue.size()); // Output: 2

console.log(queue.isEmpty()); // Output: false

queue.dequeue(); // Removes 20
queue.dequeue(); // Removes 30
console.log(queue.isEmpty()); // Output: true



// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

function simulatePrinterQueue(){
    const printerQueue = new Queue();

    // Add print jobs to the queue
    printerQueue.enqueue('Print Job 1: Document1.pdf');
    printerQueue.enqueue('Print Job 2: Document2.pdf');
    printerQueue.enqueue('Print Job 3: Document3.pdf');

    console.log('Current Printer Queue:');
    printerQueue.display(); // Output: Print Job 1: Document1.pdf <- Print Job 2: Document2.pdf <- Print Job 3: Document3.pdf

    while (!printerQueue.isEmpty()) {
        const currentJob = printerQueue.dequeue();
        console.log(`Processing: ${currentJob}`);
        // Simulate the time taken to process the print job
        // (Here you could add a delay if desired)
    }

    console.log('Printer Queue after processing:');
    printerQueue.display(); // Output: (should be empty)

}

simulatePrinterQueue();