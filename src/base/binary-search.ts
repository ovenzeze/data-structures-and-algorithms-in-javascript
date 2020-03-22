/**
 * search index of target from a sorted no-duplicate array list
 * @param list: number[]
 * @param target: number
 * @returns index: number
 */
const BinarySearch = (list: number[], target: number) => {
    let index: number = -1
    let left: number = 0
    let right: number = list.length - 1
    let mid: number
    if (list.length === 0) {
        return index
    }
    while (left <= right) {
        console.log('[debug][left]:', left, '[debug][mid]:', mid, '[debug][right]:', right)
        mid = Math.floor(left + (right - left) / 2)
        if (list[mid] > target) {
            right = mid - 1
        } else if (list[mid] < target) {
            left = mid + 1
        } else {
            index = mid
            break
        }
    }
    return index
}
const BinarySearchRecur = (list: number[], target: number, left?: number, right?: number) => {
    left = left || 0
    right = right || list.length - 1
    let mid: number
    mid = Math.floor(left + (right - left) / 2)
    if (left === right && list[left] !== target) {
        return -1
    }
    if (list[mid] > target) {
            return BinarySearchRecur(list, target, left, mid - 1)
        } else if (list[mid] < target) {
            return BinarySearchRecur(list, target, mid + 1, right)
        } else {
            return mid
        }
}
/**
 * search first index of target from a sorted array list, may contains duplicate element
 * @param list: number[]
 * @param target: number
 * @returns list: number[]
 */
const BinarySearchWithDupList = (list: number[], target: number) => {
    let index: number = -1
    let left: number = 0
    let right: number = list.length - 1
    let mid: number
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        console.log('[debug][left]:', left, '[debug][mid]:', mid, '[debug][right]:', right)
        if (list[mid] >= target) {
            right = mid - 1
        } else if (list[mid] < target) {
            left = mid + 1
        }
    }
    index = list[left] === target ? left : index
    return index
}
const BinarySearchWithDupListRecur = (list: number[], target: number, left?: number, right?: number) => {
    let index: number = -1
    left = left || 0
    right = right === 0 ? right : (right || list.length - 1)
    let mid: number
    if (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        console.log('[debug][left]:', left, '[debug][mid]:', mid, '[debug][right]:', right)
        if (list[mid] >= target) {
            return BinarySearchWithDupListRecur(list, target, left, mid - 1)
        } else if (list[mid] < target) {
            return BinarySearchWithDupListRecur(list, target, mid + 1, right)
        }
    }
    index = list[left] === target ? left : index
    return index
}
/**
 * search for all indexes of the target value from an ascending array that may contain duplicate elements
 * @param list: number[]
 * @param target: number
 * @returns list: number[] all index of target
 */
const BinarySearchAllIndex = (list: number[], target: number) => {
    const indexList: number[] = []
    const firstIndex: number = BinarySearchFirstDupElement(list, target)
    const lastIndex: number = BinarySearchLastDupElement(list, target)
    console.log('firstIndex:', firstIndex, 'lastIndex:', lastIndex)
    if (firstIndex === lastIndex && firstIndex !== -1) {
        indexList.push(firstIndex)
    } else if (firstIndex !== lastIndex) {
        for (let i = firstIndex; i <= lastIndex; i++) {
            indexList.push(i)
        }
    }
    return indexList
}
const BinarySearchFirstDupElement = (list: number[], target: number) => {
    let index: number = -1
    let left: number = 0
    let right: number = list.length - 1
    let mid: number
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        console.log('[debug][left]:', left, '[debug][mid]:', mid, '[debug][right]:', right)
        if (list[mid] >= target) {
            right = mid - 1
        } else if (list[mid] < target) {
            left = mid + 1
        }
    }
    // Q: why use left index to check?
    index = list[left] === target ? left : index
    return index
}
const BinarySearchLastDupElement = (list: number[], target: number) => {
    let index: number = -1
    let left: number = 0
    let right: number = list.length - 1
    let mid: number
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        console.log('[debug][left]:', left, '[debug][mid]:', mid, '[debug][right]:', right)
        if (list[mid] > target) {
            right = mid - 1
        } else if (list[mid] <= target) {
            left = mid + 1
        }
    }
    // Q: why use right index to check?
    index = list[right] === target ? right : index
    return index
}
// ============================================>Export
export { BinarySearch, BinarySearchRecur, BinarySearchWithDupList, BinarySearchWithDupListRecur, BinarySearchAllIndex }
