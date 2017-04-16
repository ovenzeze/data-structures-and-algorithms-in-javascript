"use strict";

// 双向链表，每一个节点不仅保存指向下一个节点的链接还保存着指向前一个节点的链接
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
function dbLinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.dispReverse = dispReverse;
  this.findLast = findLast;
  this.remove = remove;

  // 根据传入的数据返回对应的节点
  function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  // 根据要插入的元素和要被插入的位置的前一个元素进行插入操作
  function insert(insertElement, item) {
    var newNode = new Node(insertElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    // currNode.next.previous = newNode;
    currNode.next = newNode;
  }
  // 查找链表的最后一个节点
  function findLast() {
    var currNode = this.head;
    while (currNode.next != null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  // 按顺序显示链表中的元素
  function display() {
    var currNode = this.head;
    while (currNode.next != null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
  // 倒序显示链表中的元素
  function dispReverse() {
    var currNode = this.findLast();
    while (currNode.previous != null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
  // 根据传入的元素删除对应的节点
  function remove(item) {
    var currNode = this.find(item);
    if (currNode.next == null) {
      currNode.previous.next = currNode.next;
    } else {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }
}

// test
var dbLinkedListTest = new dbLinkedList();
dbLinkedListTest.insert("oven", "head");
dbLinkedListTest.insert("ovenzeze", "oven");
dbLinkedListTest.insert("ovenerly", "ovenzeze");
dbLinkedListTest.insert("chanzen", "ovenerly");
dbLinkedListTest.insert("chanzen.zhang", "chanzen");
dbLinkedListTest.display();
console.log("reverse display----------------");
dbLinkedListTest.dispReverse();
dbLinkedListTest.remove("chanzen");
console.log("after remove [chanzen]");
dbLinkedListTest.dispReverse();