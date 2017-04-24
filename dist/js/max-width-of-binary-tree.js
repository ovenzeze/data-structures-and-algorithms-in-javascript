"use strict";

// Question：
// Maximum width of a binary tree
// Given a binary tree, write a function to get the maximum width of the given tree. Width of a tree is maximum of widths of all levels.
//
// Let us consider the below example tree.
//
//          1
//         /  \
//        2    3
//      /  \     \
//     4    5     8
//               /  \
//              6    7
// For the above tree,
// width of level 1 is 1,
// width of level 2 is 2,
// width of level 3 is 3,
// width of level 4 is 2.
// So the maximum width of the tree is 3.

function maxWidth(node) {
  var height = void 0,
      maxWidth = 0;
  // this function computed the max height of binary tree
  function getHeight(node) {
    var lHeight = void 0,
        rHeight = void 0;
    if (node == null) {
      return 0;
    } else {
      lHeight = getHeight(node.left);
      rHeight = getHeight(node.right);
      return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
    }
  }
  // this function computed width of given level
  function getWidth(node, level) {
    if (!node) {
      return 0;
    }
    if (level == 1) {
      return 1;
    } else if (level > 1) {
      return getWidth(node.left, level - 1) + getWidth(node.right, level - 1);
    }
  }

  height = getHeight(node); //get the height of binary tree
  for (var i = 1; i < height + 1; i++) {
    width = getWidth(node, i);
    if (width > maxWidth) {
      maxWidth = width;
    }
  }
  return maxWidth;
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
  this.maxWidth = maxWidth; //查找二叉树节点间的最大距离
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
console.log("\u6700\u5927\u5BBD\u5EA6\u4E3A\uFF1A" + maxWidth(nums.root));