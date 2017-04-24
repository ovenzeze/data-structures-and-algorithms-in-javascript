"use strict";

// whether the doubly linked list has a loop
function Node(element) {
    this.element = element;
    this.next = null;
}

function linkedList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.detectLoop = detectLoop;
}

// use two pointer (fast and slow), traversal the linkedList if meet, indicate there exit a loop
function detectLoop() {
    var slow = this.head,
        fast = this.head;
    while (slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
// test
var cycleList = new linkedList();
cycleList.head.next = new Node("oven");
cycleList.head.next.next = new Node("ovenzeze");
cycleList.head.next.next.next = new Node("ovenzhang");
cycleList.head.next.next.next.next = new Node("chanzen");
cycleList.head.next.next.next.next.next = cycleList.head.next.next;
console.log(cycleList.detectLoop());