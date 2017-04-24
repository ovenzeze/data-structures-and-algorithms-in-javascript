"use strict";

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
  this.minDepths = minDepths; //查找二叉树最小深度
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

// 查找二叉树最小深度
// 根节点为空，返回0；
// 只有左（右）子节点，返回1；
// 如果左右节点都不为空，则分别计算左子树和右子数的深度，最小深度就是这两者的深度中的较小值；
function minDepths(node, minDeep) {
  minDeep = minDeep ? minDeep : 1;
  if (node.left == null || node.right == null) {
    return minDeep;
  } else {
    minDeep++;
    return Math.min(minDepths(node.left, minDeep), minDepths(node.right, minDeep));
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
console.log("\u6700\u5C0F\u6DF1\u5EA6\u4E3A\uFF1A" + minDepths(nums.root));