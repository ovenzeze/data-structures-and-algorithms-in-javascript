"use strict";

// 循环链表
//基本实现和单向链表相同，主要区别是循环链表的最后一个节点指向头结点
function Node(element) {
  this.element = element;
  this.next = null;
}
function linkedList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrev = findPrev;
  this.remove = remove;

  //display all element
  function display() {
    var currNode = this.head;
    while (currNode != null && currNode.next.element != "head") {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  // find the Node contain given item in linkedList and return Node
  function find(item) {
    var currNode = this.head;
    //退出循环可能是找到与item相同的值或到了链表的最后一个元素了，再判断一下当前值是否是item即可
    while (currNode.element != item && currNode.next.element != "head") {
      currNode = currNode.next;
    }
    if (currNode.element == item) {
      return currNode;
    }
    return -1;
  }

  // insert element after the given item,return true or false
  function insert(insertElement, item) {
    var newNode = new Node(insertElement);
    var insertPos = this.find(item);
    if (insertPos == -1) {
      return false;
    } else if (insertPos.next.element == "head") {
      insertPos.next = newNode;
      newNode.next = this.head;
      return true;
    } else {
      newNode.next = insertPos.next;
      insertPos.next = newNode;
      return true;
    }
  }

  // find the previous one of the Node contain given item,return the previous Node
  function findPrev(item) {
    var currNode = this.head;
    while (currNode.next.element != item && currNode.next.element != "head") {
      currNode = currNode.next;
    }
    if (currNode.next.element == item) {
      return currNode;
    }
    return -1;
  }

  // remove the Node contain given item,return true or false
  function remove(item) {
    var removePosPrev = this.findPrev(item);
    var removePos = this.find(item);
    if (removePosPrev == -1) {
      return false;
    } else if (removePos.next.element == "head") {
      removePosPrev.next = this.head;
      return true;
    } else {
      removePosPrev.next = removePos.next;
      return true;
    }
  }
}
// test
var linkedListTest = new linkedList();
linkedListTest.insert("oven", "head");
linkedListTest.insert("ovenzeze", "oven");
linkedListTest.insert("ovenerly", "ovenzeze");
linkedListTest.insert("chanzen", "ovenerly");
linkedListTest.insert("chanzen.zhang", "chanzen");
linkedListTest.display();
linkedListTest.remove("chanzen.zhang");
console.log("after remove [chanzen.zhang]");
linkedListTest.display();