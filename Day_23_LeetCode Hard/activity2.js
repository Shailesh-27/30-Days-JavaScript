// ************************ Merge k Sorted Lists **************************


// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// - Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// - Create a few test cases with linked lists and log the merged list.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    
    // Initialize the heap with the head of each list
    lists.forEach((list) => {
        if (list) {
            minHeap.push(list);
        }
    });
    
    const dummyHead = new ListNode();
    let current = dummyHead;
    
    while (minHeap.size() > 0) {
        const node = minHeap.pop();
        current.next = node;
        current = current.next;
        
        if (node.next) {
            minHeap.push(node.next);
        }
    }
    
    return dummyHead.next;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return root;
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp(index) {
        const node = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parentNode = this.heap[parentIndex];
            if (parentNode.val <= node.val) break;
            this.heap[index] = parentNode;
            index = parentIndex;
        }
        this.heap[index] = node;
    }
    
    bubbleDown(index) {
        const length = this.heap.length;
        const node = this.heap[index];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swapIndex = null;
            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild.val < node.val) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild.val < node.val) ||
                    (swapIndex !== null && rightChild.val < this.heap[swapIndex].val)
                ) {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }
        this.heap[index] = node;
    }
}

function printList(head) {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummyHead = new ListNode();
    let current = dummyHead;
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummyHead.next;
}

// Test cases
const lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];

const mergedList = mergeKLists(lists);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

const emptyLists = [
    createLinkedList([]),
    createLinkedList([]),
    createLinkedList([])
];

const mergedEmptyList = mergeKLists(emptyLists);
printList(mergedEmptyList); // Output: (empty)

const singleList = [
    createLinkedList([1, 2, 3])
];

const mergedSingleList = mergeKLists(singleList);
printList(mergedSingleList); // Output: 1 -> 2 -> 3

