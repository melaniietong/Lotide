const findKey = function(obj, callback) {
  let output = undefined;

  for (let o in obj) {
    if (callback(obj[o])) {
      output = o;
      break;
    } 
  }

  return output;
};

module.exports = findKey;