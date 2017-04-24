// BST is a type of binary tree with following properties:
// • The left subtree of a node contains only nodes with keys less than the node’s key.
// • The right subtree of a node contains only nodes with keys greater than the node’s key.
// • Both the left and right subtrees must also be binary search trees.
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    // this.show = show;
}

function binaryTree() {
    this.root = null;
    this.isBST = isBST;
}
// check a binary tree is BST,return true or false
function isBST() {
    return isBSTUtil(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
}
// return true if the given tree is BST and its data <= the max value of Sub-tree also >= min value of Sub-tree
function isBSTUtil(node, min, max) {
    // empty tree is BST
    if (!node) {
        return true;
    }
    // node data should >= min value also <= max value
    if (node.data < min || node.data > max) {
        return false;
    }
    // if not returned, check the subtrees recursively 
    return isBSTUtil(node.left, min, node.data - 1) && isBSTUtil(node.right, node.data + 1, max);
}

// test
let BSTree = new binaryTree();
BSTree.root = new Node(4, null, null);
BSTree.root.left = new Node(2, null, null);
BSTree.root.right = new Node(5, null, null);
BSTree.root.left.left = new Node(1, null, null);
BSTree.root.left.right = new Node(3, null, null);
let notBSTree = new binaryTree();
notBSTree.root = new Node(5, null, null);
notBSTree.root.left = new Node(4, null, null);
notBSTree.root.right = new Node(2, null, null);
notBSTree.root.right.left = new Node(1, null, null);
notBSTree.root.right.right = new Node(3, null, null);
console.log(BSTree.isBST()); //test BST
console.log(notBSTree.isBST()); // test false BST