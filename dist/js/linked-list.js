"use strict";

// 链表的节点
function Node(element) {
    this.element = element;
    this.next = null;
}
// 链表类，提供操作链表的一些方法
function linkList() {
    this.head = new Node("head");
    this.find = find; //查找给定值
    this.insert = insert; //在链表插入给定值
    this.remove = remove; //在链表移除给定值
    this.display = display; //显示给定值
    this.findPrevious = findPrevious;

    function find(element) {
        var currNode = this.head;
        while (currNode.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 需要给出在那个元素之后插入元素
    function insert(insertElement, item) {
        var newNode = new Node(insertElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    // 显示链表中所有元素
    function display() {
        var currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    function findPrevious(item) {
        var currNode = this.head;
        while (currNode.next != null && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    function remove(item) {
        var prevNode = this.findPrevious(item);
        if (prevNode.next != null) {
            prevNode.next = prevNode.next.next;
        }
    }
}

// test
var linkedListTest = new linkList();
linkedListTest.insert("oven", "head");
linkedListTest.insert("ovenzeze", "oven");
linkedListTest.insert("ovenerly", "ovenzeze");
linkedListTest.insert("chanzen", "ovenerly");
linkedListTest.insert("chanzen.zhang", "chanzen");
linkedListTest.display();
linkedListTest.remove("chanzen.zhang");
console.log("after remove [chanzen.zhang]");
linkedListTest.display();