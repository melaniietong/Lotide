const assert = require('chai').assert;
const _      = require('../index');

describe("#without", () => {
  it(`returns [2, 3] from [1, 2, 3] without 1`, () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });

  it(`returns ["1", "2"] from ["1", "2", "3"] without [1, 2, "3"]`, () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it(`returns undefined from undefined`, () => {
    assert.deepEqual(_.without(), undefined);
  });
});