const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arrOne, arrTwo) {
  assertEqual(eqArrays(arrOne, arrTwo), true);
};

module.exports = assertArraysEqual;