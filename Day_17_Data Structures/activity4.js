// ************************ Binary Tree **************************


// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.


class TreeNode{
    constructor(value = null, left = null, right = null) {
        this.value = value;   
        this.left = left;     
        this.right = right;   
    }

    // Method to display the node's value and its children
    display() {
        const leftValue = this.left ? this.left.value : 'null';
        const rightValue = this.right ? this.right.value : 'null';
        console.log(`Node(value=${this.value}, left=${leftValue}, right=${rightValue})`);
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);

// Create a simple tree
node1.left = node2;    // Node 2 is the left child of Node 1
node1.right = node3;   // Node 3 is the right child of Node 1

// Display nodes
node1.display(); // Output: Node(value=1, left=2, right=3)
node2.display(); // Output: Node(value=2, left=null, right=null)
node3.display(); // Output: Node(value=3, left=null, right=null)


// Task 8: Implement a Binary Tree class with methods for inserting values and performing in-order traversal to display nodes.

class TreeNode1 {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
    constructor() {
        this.root = null;
    }

    // Method to insert a new value into the tree
    insert(value) {
        const newNode = new TreeNode1(value);

        if (this.root === null) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
        } else {
            // Otherwise, insert the new node in the appropriate position
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Insert in the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            // Insert in the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Method to perform in-order traversal and display node values
    inOrderTraversal() {
        this._inOrderTraversal(this.root);
    }

    _inOrderTraversal(node) {
        if (node !== null) {
            this._inOrderTraversal(node.left);   // Visit left subtree
            console.log(node.value);             // Visit node itself
            this._inOrderTraversal(node.right);  // Visit right subtree
        }
    }
}

const tree = new BinaryTree();

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log('In-Order Traversal:');
tree.inOrderTraversal();