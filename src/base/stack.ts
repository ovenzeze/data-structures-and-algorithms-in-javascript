class Stack {
    private dataSource: any
    private top: number

    constructor(origin: any) {
        if (origin instanceof Array) {
        this.dataSource = origin || []
        this.top = origin.length || 0
        }
    }

    public push(item: any) {
        this.dataSource[this.top++] = item
    }

    public pop() {
        if (this.top !== 0) {
        return this.dataSource[--this.top]
        }
    }

    public peek() {
        return this.dataSource[this.top - 1]
    }

    public length() {
        return this.top
    }

    public clear() {
        this.top = 0
    }
}

// =============================>>>>Export
export {
    Stack
}
