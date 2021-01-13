const flatten = function(arrList) {
  let newArr = [];

  for (let arr of arrList) {
    // Checks if each index is an array or not.
    if (Array.isArray(arr)) {
      for (let inner of arr) { // Loop through nested array.
        newArr.push(inner);
      }
    } else {
      newArr.push(arr);
    }
  }

  return newArr;
}

module.exports = flatten;