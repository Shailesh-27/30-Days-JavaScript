// ************************ Add Two Numbers **************************


// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// - Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// - Create a few test cases with linked lists and log the sum as a linked list.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0); // Dummy node to simplify edge cases
    let current = dummy; // Pointer to build the new list
    let carry = 0; // To handle carry

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry; // Start with carry

        if (l1 !== null) {
            sum += l1.val; // Add value from l1 if present
            l1 = l1.next; // Move to the next node
        }

        if (l2 !== null) {
            sum += l2.val; // Add value from l2 if present
            l2 = l2.next; // Move to the next node
        }

        carry = Math.floor(sum / 10); // Calculate carry for next digit
        current.next = new ListNode(sum % 10); // Create a new node with the digit value
        current = current.next; // Move to the new node
    }

    return dummy.next; // Return the next node of dummy (skipping the dummy node)
}

// Helper function to convert a list to a string (for easy testing)
function listToString(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result.join(' -> ');
}

// Test cases
function runTests() {
    // Test case 1
    let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465
    let result = addTwoNumbers(l1, l2); // Represents 807
    console.log('Test Case 1 Result:', listToString(result)); // Expected: 7 -> 0 -> 8

    // Test case 2
    l1 = new ListNode(0); // Represents 0
    l2 = new ListNode(0); // Represents 0
    result = addTwoNumbers(l1, l2); // Represents 0
    console.log('Test Case 2 Result:', listToString(result)); // Expected: 0

    // Test case 3
    l1 = new ListNode(9, new ListNode(9, new ListNode(9))); // Represents 999
    l2 = new ListNode(1); // Represents 1
    result = addTwoNumbers(l1, l2); // Represents 1000
    console.log('Test Case 3 Result:', listToString(result)); // Expected: 0 -> 0 -> 0 -> 1
}

runTests();