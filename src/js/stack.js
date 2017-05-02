// 栈是一种后入先出的数据结构，其实是一种特殊的列表，栈内的元素只能通过
// 列表的一端访问，这一端称为栈顶。所以任何不在栈顶的元素都无法访问，为了
// 访问到栈底的元素，必须先拿到上面的元素。

function stack() {
    this.dataStore = [];
    // Top，记录栈顶位置
    this.top = 0;
    // 入栈，将一个元素压入栈，并返回该元素
    this.push = push;
    // 出栈，将一个元素弹出栈，并返回该元素
    this.pop = pop;
    // 返回栈顶元素，并不删除
    this.peek = peek;
    // 清除栈内的所有元素
    this.clear = clear;
    // 记录栈内元素的个数
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    // 返回栈顶元素，Top值是从1开始计数，数组访问从0开始
    // 此处要明确top--和top-1的区别
    return this.dataStore[this.top - 1];
}

function pop() {
    // 返回栈顶元素 同时将Top值减1，即删除栈顶元素
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

// test
let testStack = new stack();
testStack.push("oven");
testStack.push("oven_zhang");
testStack.push("chanzen");
testStack.push("chanzen_zhang");
testStack.push("clay");
testStack.push("clay_zhang");
console.log(testStack.length());
console.log(testStack.peek());
console.log(testStack.pop());
console.log(testStack.peek());