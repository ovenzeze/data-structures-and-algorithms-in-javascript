# data-structures-and-algorithms-in-frontend
基本数据结构和算法的前端实现（the implementation of basic data structure and  algorithm in JavaScript)[不断补充中]
>>   
推荐给前端工程师的参考书  **数据结构与算法JavaScript描述**    
所有代码在`src/js`目录下

# 数据结构

 ## 数组
 JavaScript已经内建对数组的支持，并且由于JavaScript的灵活性，相比较其他语言的数组，还具有更多的玩法，大家可以自己探索。

 ## 列表
  * 列表的实现(`list.js`)   
    列表的基本操作：
    * append(在尾部添加元素)
    * remove(从列表删除元素)
    * find(在列表中查找某项元素)
    * length(列表的长度)
    * toString(显示列表中的元素)
    * insert(向列表中插入一个元素)
    * clear(清空列表中所有元素)
    * contains(判断列表中是否存在给定值)


 ## 栈
 * 栈的实现（`stack.js`）   
   栈的基本操作：
   * push(入栈)
   * pop(出栈)
   * peek(返回栈顶元素)
   * clear(清空栈)
   * length(栈的长度)

 ## 队列
 * 队列的实现（`queue.js`）
 队列的基本操作：
 * enqueue(向队尾添加元素)
 * dequeue(删除队首的元素)
 * front(读取队首元素)
 * back(读取队尾元素)
 * display(显示队列内所有元素)
 * isEmpty(判断队列是否为空)

 ## 树
 * 二叉树的实现（`binary-tree.js`）
 * 二叉查找树的实现（`binary-tree.js`）
 * 检查二叉树是否是二叉查找树（`check-binary-tree-is-BST.js`）
 * 查找二叉树节点间的最大距离(`max-distance-in-binary-tree.js`)
 * 查找二叉树的最大宽度(`max-width-of-binary-tree.js`)
 * 查找二叉树的最小深度(`min-depths-of-binary-tree.js`)
 * 查找二叉树节点间的最小差值(`min-absolute-difference-in-binary-tree.js`)
 * 镜像翻转二叉树（`reverse-binary-tree.js`）



 ## 链表
 * 单向链表的实现(`linked-list.js`)
 * 双向链表的实现(`doubly-linked-list.js`)
 * 单向循环链表的实现（`singly-linked-circular-list.js`）
 * 双向循环链表的实现（`doubly-linked-circular-list.js`）
 * 判断链表是否有环（`whether-exit-loop-in-linked-list.js`）


# 算法
 ## 排序算法
 排序算法在我的另一个总结里已经写得很详细了，这里就不重复写了。   
 请移步：   [usualSortAlgorithm](https://github.com/ovenzeze/usualSortAlgorithm)
 ## 检索算法
  * 二分查找(`bin-serach.js`)
  * 自组织查找(`self-organization-search.js`)

# 补充知识
  * 根据先序遍历和中序遍历结果画出二叉树（`print-binary-tree-with-preOrder-and-inOrder-traverse-result.md`）
