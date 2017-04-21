// 循环链表
//基本实现和单向链表相同，主要区别是
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
    let currNode = this.head;
    while(currNode != null && currNode.next.element != "head") {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  function find(item) {
    let currNode = this.head;
    while(currNode.element != item && currNode.next.element != "head") {
        currNode = currNode.next;
    }
    if(currNode.element == item) {
      return currNode;
    }
    return -1;
  }

  function insert(data) {

  }


}
