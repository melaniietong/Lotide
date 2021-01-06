const tail = function(arrList) {
  let newArr = [];
  for (let i = 1; i < arrList.length; i++) {
    newArr.push(arrList[i]);
  }
  return newArr;
};