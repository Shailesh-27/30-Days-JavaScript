// ************************ Tree Traversal (Optional) **************************


// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.


class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Recursive function to perform in-order traversal
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    // Recursively visit the left subtree
    inOrderTraversal(node.left);

    // Visit the root node
    console.log(node.value);

    // Recursively visit the right subtree
    inOrderTraversal(node.right);
}

// Test cases
const testTree1 = new TreeNode(1, 
    null, 
    new TreeNode(2, 
        new TreeNode(3), 
        new TreeNode(4)
    )
);

const testTree2 = new TreeNode(5, 
    new TreeNode(3, 
        new TreeNode(2, 
            null, 
            new TreeNode(1)
        ), 
        new TreeNode(4)
    ), 
    new TreeNode(8, 
        new TreeNode(6), 
        new TreeNode(9)
    )
);

console.log("In-order traversal of testTree1:");
inOrderTraversal(testTree1);

console.log("In-order traversal of testTree2:");
inOrderTraversal(testTree2);


// Task 10 : Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.


// Recursive function to calculate the depth of a binary tree
function calculateDepth(node) {
    // Base case: if the node is null, the depth is 0
    if (node === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // Return the maximum of the two depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}


// Test cases
const testTree3 = new TreeNode(1, 
    null, 
    new TreeNode(2, 
        new TreeNode(3), 
        new TreeNode(4)
    )
);

const testTree4 = new TreeNode(5, 
    new TreeNode(3, 
        new TreeNode(2, 
            null, 
            new TreeNode(1)
        ), 
        new TreeNode(4)
    ), 
    new TreeNode(8, 
        new TreeNode(6), 
        new TreeNode(9)
    )
);

const testTree5 = new TreeNode(10); // Single node tree

console.log("Depth of testTree3:", calculateDepth(testTree3)); // Expected output: 3
console.log("Depth of testTree4:", calculateDepth(testTree4)); // Expected output: 4
console.log("Depth of testTree5:", calculateDepth(testTree5)); // Expected output: 1