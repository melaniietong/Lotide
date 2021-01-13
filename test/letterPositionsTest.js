const assert = require('chai').assert;
const _      = require('../index');

describe("#letterPositions", () => {
  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for hello", () => {
    assert.deepEqual(_.letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it("returns undefined for no input", () => {
    assert.deepEqual(_.letterPositions(), undefined);
  });
});