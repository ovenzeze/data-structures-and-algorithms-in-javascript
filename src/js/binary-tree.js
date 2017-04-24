// 树是一种非线性的数据结构，以分层的方式存储数据。树通常用于存储具有层级关系的数据，比如文件系统中的文件。
// 二叉树和二叉查找树，二叉树每个节点的子节点不允许超过两个。二叉查找树是一种特殊的二叉树，相对较小的值保存在做节点，较大的值保存在右节点。

 // 二叉树
 function Node(data,left,right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
 }

 function show () {
   return this.data;
 }

 // 二叉查找树（BST）
 function BST() {
   this.root = null;
   this.insert = insert;//插入节点
   this.inOrder = inOrder;//中序遍历
   this.preOrder = preOrder;//先序遍历
   this.postOrder = postOrder;//后序遍历
   this.getMax = getMax;
   this.getMin = getMin;
   this.find = find;
 };

 function insert(data) {
   //创建一个Node将数据传入
  //  检查BST是否有根节点，如果没有此节点设置为根节点，插入结束
  //  如果不是根节点，则遍历BST，找到插入的适当位置。
  //  查找正确插入点的算法：
  // 1：设根节点为当前节点；
  // 2：如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点，反之，执行第四步。
  // 3：如果当前节点的左节点为null，就将新节点插入这个位置，退出循环；反之，继续执行下一次循环；
  // 4：设新的当前节点为原节点的右节点；
  // 5：如果当前节点的右节点为null，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。
   let n = new Node(data,null,null);
   if(this.root == null) {
     this.root = n;
   }else {
     let current = this.root;
     let parent;
     while(true) {
       parent = current;
       if(data < current.data) {
         current = current.left;
         if(current == null) {
           parent.left = n;
           break;
         }
       }
       else {
         current = current.right;
         if(current == null) {
           parent.right = n;
           break;
         }
       }
     }
   }
 };

// 中序遍历
// 按照节点上的键值，以升序的方式访问BST上的所有节点
// 先访问左子树，再访问根节点，最后访问右子树
 function inOrder (node) {
   if(!(node == null)) {
     inOrder(node.left);
     console.log(node.show());
     inOrder(node.right);
   }
 };
// 先序遍历
// 先访问根节点，然后以同样的方式访问左子树和右子树
 function preOrder (node) {
   if(!(node == null)) {
     console.log(node.show());
     preOrder(node.left);
     preOrder(node.right);
   }
 };
// 后序遍历
// 先访问叶子节点，从左子树到右子树，再到根节点
function postOrder(node) {
  if(!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
};

// 查找二叉树最大值
function getMax() {
  let currentNode = this.root;
  while(!(currentNode.right == null)) {
    currentNode = currentNode.right;
  }
  return currentNode.data;
};

// 查找二叉树最小值
function getMin() {
  let currentNode = this.root;
  while(!(currentNode.left == null)) {
    currentNode = currentNode.left;
  }
  return currentNode.data;
};

// 在二叉搜索树查找给定值
function find(data) {
  let current = this.root;
  while(current != null) {
    if(current.data == data) {
      return current;
    }else if(data < current.data){
      current = current.left;
    }else {
      current = current.right;
    }
  }
  return null;
};
 let nums = new BST();
 nums.insert(23);
 nums.insert(16);
 nums.insert(3);
 nums.insert(22);
 nums.insert(21);
 nums.insert(22);
 nums.insert(45);
 nums.insert(37);
 // nums.insert(99);
 console.log("中序遍历");
 inOrder(nums.root);
 console.log("先序遍历");
 preOrder(nums.root);
 console.log("后序遍历");
 postOrder(nums.root);
 console.log(`最小值为：${nums.getMin()}`);
 console.log(`最大值为：${nums.getMax()}`);
 console.log(`指定值所在的节点为：${nums.find(3)}`);
