const findKey = function(obj, callback) {
  for (let o in obj) {
    if (callback(obj[o])) {
      return o;
    }
  }
};