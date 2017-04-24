"use strict";

// 二分查找
// 从一个从小到大排列的有序数组中找出指定值的位置
function binSearch(arr, data) {
  var len = arr.length - 1,
      startPivot = 0,
      mid = void 0;
  while (startPivot <= len) {
    mid = Math.floor((len + startPivot) / 2);
    console.log(mid);
    if (arr[mid] < data) {
      startPivot = mid + 1;
    } else if (arr[mid] > data) {
      len = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

var arr = [1, 3, 5, 7, 10, 13, 24, 35, 38, 40, 44, 56, 66, 77, 88, 99, 123];
console.log(binSearch(arr, 24));