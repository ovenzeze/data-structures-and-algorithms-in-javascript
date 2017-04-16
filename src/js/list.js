// 数据结构描述：列表是一组有序的数据，每个列表中的数据项称之为元素。在JavaScript中，列表中的元素可以是任意数据类型
// 不包含任意元素的列表称为空列表，包含元素的个数称为列表的length，可以在列表末尾append一个元素，在给定发的元素后或起止位置insert一个元素，使用remove方法从列表中删除元素，使用clear方法清空列表中所有元素。
function list() {
  this.listSize = 0;
  this.pos = 0;
  this.length = length;
  this.toString = toString;
  this.find = find;//查找列表中指定元素
  this.remove = remove;//在列表中移除指定元素
  this.append = append;//在列表末尾添加新元素
  this.currPos = currPos;//返回列表当前位置
  this.dataStore = [];//使用数组来模拟
  this.clear = clear;//清空列表
  this.insert = insert;//在列表指定位置插入元素
  this.front = front;//移动当前位置到列表第一个元素
  this.end = end;//移动当前位置到列表最后一项
  this.prev = prev;//将当前位置前移一位
  this.next = next;//将当前位置前移一位
  this.moveTo = moveTo;//将当前位置移动到指定位置
  this.getElement = getElement;//返回当前位置的元素
  this.contains = contains;//判断给定值是否在列表中

  function append (element) {
    this.dataStore[this.listSize++] = element;
  };

  function find (element) {
    let elementPos;
    this.dataStore.forEach( (value,index,array) => {
      if(element == value) {
        elementPos = index;
      }
    })
    return elementPos;
  };

  function remove (element) {
    let elementIndex = this.find(element);
    if(elementIndex != -1) {
      this.dataStore.splice(elementIndex,1);
      --this.listSize;
      return true;
    }
    return false;
  };

  function length () {
    return this.listSize;
  };

  function toString () {
    return this.dataStore;
  };

  function currPos () {
    return this.pos;
  };

  function clear () {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
  };

  function insert (element,beforeElement) {
    let insertPos = this.find(beforeElement);
    if(insertPos != -1) {
      this.dataStore.splice(insertPos+1,0,element);
      return true;
    }
    return false;
  };

  function front () {
    this.pos = 0;
  };

  function end () {
    this.pos = this.listSize-1;
  };

  function prev () {
    --this.pos;
  };

  function next () {
    ++this.pos;
  };

  function  moveTo (position) {
    this.pos = position;
  };

  function getElement () {
    return this.dataStore[this.pos];
  };

  function contains (element) {
    return this.find(element) != -1 ? true : false;
  };

};
// test code
var name = new list();
name.append("oven");
name.append("ovenzeze");
name.append("ovenzhang");
name.append("chanzen");
name.append("chanzen.zhang");
console.log(name.toString());
name.remove("chanzen.zhang");
console.log(name.toString());
name.insert("chanzen.zhang","oven");
console.log(name.toString());
console.log(name.getElement());
name.moveTo(2);
console.log(name.getElement());
console.log(name.length());
