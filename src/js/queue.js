// 队列也是一种特殊的列表，和栈不同的是，队列是一种先进先出的数据结构，
// 只能在队首删除元素，在队尾添加元素。(这也是名字的来源)

function queue() {
    this.dataStore = [];
    // 入队，从队尾添加元素
    this.enqueue = enqueue;
    // 出队，从队首删除元素
    this.dequeue = dequeue;
    // 返回队首元素
    this.front = front;
    // 返回队尾的元素
    this.back = back;
    // 显示队列中所有元素
    this.display = display;
    // 判断队列是否为空
    this.isEmpty = isEmpty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function display() {
    return this.dataStore.slice();
}

function isEmpty() {
    return this.dataStore.length ? false : true;
}

// test code
let q = new queue();
q.enqueue("oven");
q.enqueue("ovenzeze");
q.enqueue("chanzen");
q.enqueue("chanzen_zhang");
q.enqueue("clay");
q.enqueue("clay_zhang");
console.log(`the queue is : ${q.display()}`);
q.dequeue();
console.log(`after dequeue the queue is : ${q.display()}`);
console.log(`front of queue is : ${q.front()}`);
console.log(`back of queue is : ${q.back()}`);
console.log(`queue is empty : ${q.isEmpty()}`);