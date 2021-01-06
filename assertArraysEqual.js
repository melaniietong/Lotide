const assertArraysEqual = function(arrOne, arrTwo) {
  let output = true;

  // Is arrays arent' the same length, false.
  if (arrOne.length !== arrTwo.length) {
    output = false;
  } else {
    // Compares each array's index to make sure they're the same, else false.
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        output = false;
      }
    }
  }

  // Console log if arrays are equal or not.
  if (output === true) {
    return `✅ Assertion Passed: [${arrOne}] === [${arrTwo}]`;
  } else {
    return `🛑 Assertion Failed: [${arrOne}] !== [${arrTwo}]`;
  }
}