const assert = require('chai').assert;
const _      = require('../index');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it(`returns [ 'g', 'c', 't', 'm', 't' ] for first letter of ${words}`, () => {
    assert.deepEqual(_.map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it(`returns [ 'r', 'o', 'o', 'a', 'o' ] for second letter of ${words}`, () => {
    assert.deepEqual(_.map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
  });

  it(`returns [] for undefined`, () => {
    assert.deepEqual(_.map(), undefined);
  });
});