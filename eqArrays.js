const eqArrays = function(arrOne, arrTwo) {
  let output = true;

  // Is arrays arent' the same length, false.
  if (arrOne.length !== arrTwo.length) {
    output = false;
  }

  // Compares each array's index to make sure they're the same, else false.
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      output = false;
    }
  }

  return output;
}

module.exports = eqArrays;