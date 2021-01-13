const assert = require('chai').assert;
const _      = require('../index');

describe("#countLetters", () => {
  it("returns 2 L's and 1 H for LHL", () => {
    assert.deepEqual(_.countLetters('LHL'), {L: 2, H: 1});
  });

  it("returns undefined if no string given", () => {
    assert.deepEqual(_.countLetters(), undefined);
  });
});