"use strict";

// Question:
// The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two leaves in the tree. The diagram below shows two trees each with diameter nine, the leaves that form the ends of a longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).

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
  this.diamter = diamter; //查找二叉树节点间的最大距离
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

function diamter(node) {
  var lHeight = void 0,
      rHeight = void 0,
      lDiamter = void 0,
      rDiamter = void 0;
  // this function computed the Height of a child tree
  // Height is the longest path from the root node to the leaf node
  function height(node) {
    if (node == null) {
      return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
  }
  // Height end

  if (node == null) {
    return 0;
  }
  // computed Height of the left&right sub Tree
  lHeight = height(node.left);
  rHeight = height(node.right);
  // computed diamter of the left&right sub Tree
  lDiamter = diamter(node.left);
  rDiamter = diamter(node.right);
  // return the max value of following:
  // 1: the diamter of left sub tree
  // 2: the diamter of right sub tree
  // 3: Height of left sub tree + Height of right sub tree + 1
  return Math.max(lHeight + rHeight + 1, Math.max(diamter(node.left), diamter(node.right)));
}

// test code
var nums = new BST();
nums.insert(23);
nums.insert(16);
nums.insert(3);
nums.insert(22);
nums.insert(21);
nums.insert(22);
nums.insert(45);
nums.insert(37);
console.log("\u6700\u8FDC\u8DDD\u79BB\u4E3A\uFF1A" + diamter(nums.root));