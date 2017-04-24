"use strict";

// Question：
// Mirror of a Tree: Mirror of a Binary Tree T is another Binary Tree M(T) with left and right  // children of all non-leaf nodes interchanged.

function reverse(node) {
  var left = void 0,
      right = void 0;
  if (node == null) {
    return node;
  }
  left = reverse(node.left);
  right = reverse(node.right);
  node.left = right;
  node.right = left;
  return node;
}

// 二叉树
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

// 二叉查找树（BST）
function BST() {
  this.root = null;
  this.insert = insert; //插入节点
  this.preOrder = preOrder; //先序遍历二叉树
  this.reverse = reverse; //mirror the tree
};

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent = void 0;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};
// 先序遍历
// 先访问根节点，然后以同样的方式访问左子树和右子树
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
};

// test code
var nums = new BST();
nums.insert(23);
nums.insert(16);
nums.insert(3);
nums.insert(22);
nums.insert(21);
nums.insert(45);
nums.insert(37);
console.log("\u7FFB\u8F6C\u524D\u5148\u5E8F\u904D\u5386\u7ED3\u679C");
preOrder(nums.root);
nums.reverse(nums.root);
console.log("\u7FFB\u8F6C\u540E\u5148\u5E8F\u904D\u5386\u7ED3\u679C");
preOrder(nums.root);
// console.log(`翻转后先序遍历结果为：${preOrder(nums.root)}`);