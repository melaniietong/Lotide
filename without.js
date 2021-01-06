const without = function(arrayList, ignoreWord) {
  let output = [];

  for (let arr of arrayList) {
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