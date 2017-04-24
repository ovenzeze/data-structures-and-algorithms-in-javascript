"use strict";

// doubly circual linkedList
// the only difference with doubly linkedList is the next pointer of the last Node point to the first node ,and the previous pointer of the first Node point to the last Node
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
function linkedList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.head.previous = this.head;
  // four methods: find  insert remove display
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  // exit the loop:find the Node contain given item or find the last Node
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
  } else if (insertPos.element == "head") {
    insertPos.next = newNode;
    insertPos.previous = newNode;
    newNode.next = insertPos;
    newNode.previous = insertPos;
    return true;
  } else if (insertPos.next.element == "head" && insertPos.element != "head") {
    insertPos.next = newNode;
    newNode.next = this.head;
    newNode.previous = insertPos;
    return true;
  } else {
    newNode.next = insertPos.next;
    insertPos.next = newNode;
    newNode.previous = insertPos;
    return true;
  }
}

// remove the Node contain given item,return true or false
function remove(item) {
  var removePos = this.find(item);
  if (removePos == -1) {
    return false;
  } else {
    removePos.previous.next = removePos.next;
    return true;
  }
}

//display all element
function display() {
  var currNode = this.head;
  while (currNode != null && currNode.next.element != "head") {
    console.log(currNode.next.element);
    currNode = currNode.next;
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