const findKeyByValue = function(obj, findThis) {
  for (let o in obj) {
    if (obj[o] === findThis) {
      return o;
    }
  }
}