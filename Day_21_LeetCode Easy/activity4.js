// ************************ Merge Two Sorted Lists **************************


// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// - Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// - Create a few test cases with linked lists and log the merged list.


// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1,l2){
    // Create a dummy node to simplify merging
    const dummy = new ListNode();
    let current = dummy;

    // Traverse both lists
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

     // Attach the remaining nodes
     if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

// Test cases
const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);

// Additional Test Cases
const l3 = createLinkedList([]);
const l4 = createLinkedList([0]);

const mergedList2 = mergeTwoLists(l3, l4);
printLinkedList(mergedList2);

const l5 = createLinkedList([1, 3, 5]);
const l6 = createLinkedList([2, 4, 6]);

const mergedList3 = mergeTwoLists(l5, l6);
printLinkedList(mergedList3);
