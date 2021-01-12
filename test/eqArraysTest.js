const assert   = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 3, 5] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 3, 5], [1, 2, 3]), false);
  });

  it("returns false for [1] and [1, 2]", () => {
    assert.strictEqual(eqArrays([1], [1, 2]), false);
  });
});