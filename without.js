const without = function(arrList, ignoreWord) {
  let output = [];

  for (let arr of arrList) {
    let dontIgnore = true;
    for (let igWo of ignoreWord) {
      if (arr === igWo) {
        dontIgnore = false;
      }
    }

    if (dontIgnore) {
      output.push(arr);
    }
  }

  return output;
};