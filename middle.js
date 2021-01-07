const middle = function(arrList) {
  let newArr = [];

  if (arrList.length > 2) {
    // If even
    if (arrList.length % 2 == 0) {
      newArr.push(arrList[arrList.length/2]-1); // Lower middle
      newArr.push(arrList[Math.ceil(arrList.length/2)]); // Upper middle
    } else { // If odd
      newArr.push(arrList[Math.floor(arrList.length/2)]);
    }
  } 

  return newArr
};