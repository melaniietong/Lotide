const without = function(arrList, ignoreWord) {
  if (arrList === undefined) {
    return undefined;
  }

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

module.exports = without;