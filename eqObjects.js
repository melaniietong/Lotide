const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let output;

  if (keys1.length === keys2.length) {
    for (let k1 of keys1) {
      for (let k2 of keys2) {
        // If the value is an array.
        if (Array.isArray(object1[k1]) && Array.isArray(object2[k1])){
          if (eqArrays(object1[k1], object2[k1])) {
            output = true;
          } else {
            return false;
          }
        } else { // If not an array, compare as primitive values.
          if (object1[k1] === object2[k1]){
            output = true;
          } else {
            return false;
          }
        }
      } 
    }
  } else {
    return false;
  }

  return output;
};

module.exports = eqObjects;