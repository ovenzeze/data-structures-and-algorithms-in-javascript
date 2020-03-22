import { Stack } from './base/stack'
import { Queue } from './base/queue'
import { BinarySearch, BinarySearchRecur, BinarySearchWithDupList, BinarySearchWithDupListRecur, BinarySearchAllIndex } from './base/binary-search'

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
// =============================>>>>BinarySearch
const list = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]
const target = 11
const binarySearchRes = BinarySearch(list, target)
console.log('[info][BinarySearch][list]:', list)
console.log('[info][BinarySearch][target]:', target)
console.log('[info][BinarySearch][result]:', binarySearchRes)
// =============================>>>>BinarySearchWithDupList
const list2 = [1, 2, 3, 3, 3, 3, 5]
const target2 = 3
const binarySearchWithDupListRes = BinarySearchWithDupList(list2, target2)
console.log('[info][BinarySearchWithDupList][list]:', list2)
console.log('[info][BinarySearchWithDupList][target]:', target2)
console.log('[info][BinarySearchWithDupList][result]:', binarySearchWithDupListRes)
// =============================>>>>BinarySearchRecur
const list3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]
const target3 = 20
const BinarySearchRecurRes = BinarySearchRecur(list3, target3)
console.log('[info][BinarySearchRecur][list]:', list3)
console.log('[info][BinarySearchRecur][target]:', target3)
console.log('[info][BinarySearchRecur][result]:', BinarySearchRecurRes)
// =============================>>>>BinarySearchWithDupListRecur
const list4 = [1, 2, 2, 3, 4, 5, 6, 7]
const target4 = 3
const binarySearchWithDupListRecurRes = BinarySearchWithDupListRecur(list4, target4)
console.log('[info][BinarySearchWithDupListRecur][list]:', list4)
console.log('[info][BinarySearchWithDupListRecur][target]:', target4)
console.log('[info][BinarySearchWithDupListRecur][result]:', binarySearchWithDupListRecurRes)
// =============================>>>>BinarySearchAllIndex
const list5 = [1, 2, 2, 2, 3, 4, 5, 6, 7]
const target5 = 2
const BinarySearchAllIndexRes = BinarySearchAllIndex(list5, target5)
console.log('[info][BinarySearchAllIndex][list]:', list5)
console.log('[info][BinarySearchAllIndex][target]:', target5)
console.log('[info][BinarySearchAllIndex][result]:', BinarySearchAllIndexRes)
