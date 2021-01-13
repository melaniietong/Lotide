const assert = require('chai').assert;
const _      = require('../index');

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  it(`returns [ 1, 2, 5, 7, 2 ] from until x < 0 in ${data1.join(' ')}`, () => {
    assert.deepEqual(_.takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it(`returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] from until the first comma in ${data2.join(' ')}`, () => {
    assert.deepEqual(_.takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});