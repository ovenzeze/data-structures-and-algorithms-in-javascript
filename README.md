# Data Structures and Algorithms in JavaScript

![GitHub stars](https://img.shields.io/github/stars/ovenzeze/data-structures-and-algorithms-in-javascript?style=social)
![GitHub license](https://img.shields.io/github/license/ovenzeze/data-structures-and-algorithms-in-javascript)
![Language](https://img.shields.io/github/languages/top/ovenzeze/data-structures-and-algorithms-in-javascript)
![TypeScript](https://img.shields.io/badge/TypeScript-3.8+-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2017+-yellow)

> A foundational course on data structures and algorithms for frontend engineers. All data structures and algorithms are implemented in `JavaScript` and `TypeScript`.

## ✨ Features

- 📚 **Complete Data Structure Implementations**
  - Linear data structures: Arrays, Stacks, Queues, Linked Lists (Singly, Doubly, Circular)
  - Non-linear data structures: Binary Trees, Binary Search Trees (BST)
  
- 🔍 **Common Algorithm Implementations**
  - Binary Search (Iterative and Recursive)
  - Binary Tree Traversal (Pre-order, In-order, Post-order)
  - Binary Tree Algorithms (Max Width, Min Depth, Reversal, etc.)
  - Linked List Detection (Cycle Detection)
  
- 💻 **Dual Language Support**
  - TypeScript for core data structures (type-safe)
  - JavaScript for extended algorithms (better compatibility)
  
- 📖 **Detailed Comments**
  - Each implementation includes comprehensive comments
  - Clear explanations of algorithm logic and implementation details

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
# Development mode (auto-watch file changes)
npm start

# Compile TypeScript
npm run build

# Watch mode compilation
npm run watch
```

### Usage Examples

```typescript
import { Stack } from './src/base/stack'
import { Queue } from './src/base/queue'
import { BinarySearch } from './src/base/binary-search'

// Stack usage
const stack = new Stack(['one', 'two', 'three'])
stack.push('four')
stack.pop()
console.log(stack.peek()) // 'three'

// Queue usage
const queue = new Queue(['one', 'two', 'three'])
queue.enqueue('four')
queue.dequeue()
console.log(queue.front()) // 'two'

// Binary search
const list = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]
const index = BinarySearch(list, 11)
console.log(index) // 9
```

## 📁 Project Structure

```
data-structures-and-algorithms-in-javascript/
├── src/
│   ├── base/              # Core data structures implemented in TypeScript
│   │   ├── stack.ts       # Stack
│   │   ├── queue.ts       # Queue
│   │   ├── linked-list.ts # Linked List
│   │   └── binary-search.ts # Binary Search
│   ├── js/                # Extended algorithms implemented in JavaScript
│   │   ├── binary-tree.js # Binary tree related
│   │   ├── linked-list.js # Linked list related
│   │   └── ...
│   └── index.ts           # Entry file (example code)
├── docs/                   # Documentation
├── dist/                   # TypeScript compilation output
└── package.json
```

## 🛠️ Tech Stack

- **TypeScript** 3.8+ - Type-safe core data structure implementations
- **JavaScript** (ES2017+) - Algorithm implementations
- **Node.js** - Runtime environment

## 📚 Data Structures Explained

### Linear Data Structures

#### Arrays
An array is defined as a linear collection used to store elements. The position of data in this collection is calculated through indices. To ensure efficient data storage and access, indices must be numbers, allowing quick access to the actual data location in memory by calculating offsets through indices.

In JavaScript, arrays are implemented using objects, and numeric indices are converted to strings during use and storage.

#### Stack
A stack can be simply understood as a restricted array. `A stack is a data structure that follows the Last-In-First-Out (LIFO) principle, where only the top element can be accessed or operated on at a time`. A real-world analogy would be a stack of plates waiting to be washed in a restaurant.

Main methods:
- `push(item)` - Push an item onto the stack
- `pop()` - Pop an item from the stack
- `peek()` - Get the top element
- `length()` - Get the stack length
- `clear()` - Clear the stack

#### Queue
Similar to a stack, a queue can be understood as a restricted array. `A queue is a data structure that follows the First-In-First-Out (FIFO) principle, where only the front element can be accessed or operated on, and elements are added at the rear`. A real-world analogy would be people waiting in line at a bank to conduct business.

Main methods:
- `enqueue(item)` - Enqueue an item
- `dequeue()` - Dequeue an item
- `front()` - Get the front element
- `back()` - Get the rear element
- `display()` - Display queue contents

#### Linked List
`A linked list is a non-contiguous, non-sequential storage structure where elements are connected through links (pointers)`. Linked lists include: singly linked lists, doubly linked lists, and circular linked lists.

Compared to arrays, which use indices (offsets) to associate elements, meaning data must be stored in a contiguous memory space with a fixed size, linked lists access elements through their own links (pointers). Each node records the location of the next node, not relying on storage contiguity and sequentiality.

This project implements:
- Singly linked lists
- Doubly linked lists
- Circular linked lists (singly and doubly)
- Linked list cycle detection

### Non-linear Data Structures

#### Binary Tree
A tree is a non-linear data structure that stores data in a hierarchical manner. Trees are commonly used to store data with hierarchical relationships, such as files in a file system.

A binary tree restricts each node to have at most two child nodes. A binary search tree is a special type of binary tree where smaller values are stored in the left node and larger values in the right node.

This project implements:
- Binary Search Tree (BST) insertion, search, and deletion
- Pre-order, in-order, and post-order traversal
- Maximum width of binary tree
- Minimum depth of binary tree
- Binary tree reversal
- Binary search tree validation

## 🔍 Algorithm Implementations

### Search Algorithms

- **Binary Search** (`BinarySearch`)
  - Iterative implementation
  - Recursive implementation
  - Variants for handling duplicate elements
  - Find all matching indices

### Tree Algorithms

- Binary tree traversal (pre-order, in-order, post-order)
- Maximum width calculation
- Minimum depth calculation
- Binary tree reversal
- Binary search tree validation

### Linked List Algorithms

- Cycle detection
- Linked list reversal

## 📖 Learning Value

This project is suitable for:

- ✅ Frontend engineers learning data structures and algorithms
- ✅ Developers preparing for technical interviews
- ✅ JavaScript developers who want to understand underlying implementations
- ✅ Algorithm learners who need reference implementations

### Why JavaScript/TypeScript?

Since JavaScript has inherent limitations in data structure support, this project implements common data structures from scratch to help frontend engineers:
- Gain deep understanding of the underlying principles of data structures
- Master the core concepts of algorithm implementation
- Improve code quality and problem-solving skills

## 🤝 Contributing

Contributions are welcome! Please feel free to submit Issues and Pull Requests!

1. Fork this project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [ISC License](LICENSE).

## 👤 Author

**isake**

- GitHub: [@ovenzeze](https://github.com/ovenzeze)
- Project URL: [data-structures-and-algorithms-in-javascript](https://github.com/ovenzeze/data-structures-and-algorithms-in-javascript)

---

⭐ If this project helps you, please give it a Star!
