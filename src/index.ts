import { Stack } from './base/stack'
import { Queue } from './base/queue'

// =============================>>>>Suits

// =============================>>>>Stack
const stack = new Stack(['one', 'two', 'three'])
stack.push('four')
stack.pop()
stack.peek()
console.log('[info][stack][peek]:', stack.peek())
console.log('[info][stack][length]:', stack.length())
stack.clear()
console.log('[info][stack][peek]:', stack.peek())

// =============================>>>>Queue
const queue = new Queue(['one', 'two', 'three', 'four'])
queue.enqueue('five')
console.log('[info][queue]:', queue.display())
queue.dequeue()
console.log('[info][queue]:', queue.display())
console.log('[info][queue][front]:', queue.front())
console.log('[info][queue][back]:', queue.back())
