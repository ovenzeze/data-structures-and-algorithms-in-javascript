class Queue {
    private dataSource: any

    constructor(origin: any) {
        if (origin instanceof Array) {
        this.dataSource = origin || []
        }
    }

    public enqueue(item: any) {
        this.dataSource.push(item)
    }

    public dequeue() {
        this.dataSource.shift()
    }

    public front() {
        return this.dataSource[0]
    }

    public back() {
        return this.dataSource[this.dataSource.length - 1]
    }

    public display() {
        return this.dataSource
    }

    public isEmpty() {
        const isEmpty = this.dataSource.length ? false : true
        return isEmpty
    }
}

// =============================>>>>Export
export {
    Queue
}
