// 对于未排序的数据来说，当被查找的数据位于数据集的起始位置时，
// 查找的速度是最快的。
// 自组织查找的策略就是：将频繁被查找的数据放到数据集的靠前位置（前20%）
// 来最小化查找的次数。

function selfOrgSearch(arr, data) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === data && i > len * 0.2) {
            swap(arr, i, 0);
            return true;
        } else if (arr[i] === data) {
            return true;
        }
    }

    function swap(arr, indexCurr, indexOrig) {
        let temp = arr[indexCurr];
        arr[indexCurr] = arr[indexOrig];
        arr[indexOrig] = temp;
    }
}

// test
let arrTest = [];
for (let i = 0; i < 10; i++) {
    arrTest[i] = i * 11;
}
console.log(`origin array is : ${arrTest}`);
selfOrgSearch(arrTest, 88);
console.log(`after search 88 array is : ${arrTest}`);