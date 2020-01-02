class LinkedListNode {
    public next: any
    private element: any

    constructor(element: any) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    private head: any

    constructor() {
        this.head = new LinkedListNode('head')
    }

    public insert(insertElement: any, element: any) {
        const opNode = this.find(element)
        const insertNode = new LinkedListNode(insertElement)
        insertNode.next = opNode.next
        opNode.element = insertElement
        opNode.next = insertNode
    }

    public delete(deleteElement: any) {
        const opNode = this.findPrev(deleteElement)
        opNode.next = opNode.next.next
    }

    public display() {
        let curNode = this.head
        let nodeNum = 0
        const elementArr = []
        while (curNode.next !== null) {
            elementArr.push(curNode.element)
            nodeNum++
            curNode = curNode.next
        }
        console.log('[linkList][length]:', nodeNum)
        console.log('[linkList][detail]:', elementArr)
    }

    private find(element: any) {
        let curNode = this.head
        let curElement = curNode.element
        while (curElement !== element) {
            curNode = curNode.next
            curElement = curNode.element
        }
        return curNode
    }

    private findPrev(element: any) {
        let curNode = this.head
        let nextElement = curNode.next.element
        while (nextElement !== element) {
            curNode = curNode.next
            nextElement = curNode.next.element
        }
        return curNode
    }
}
