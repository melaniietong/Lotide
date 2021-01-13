const assert = require('chai').assert;
const _      = require('../index');

describe("#findKey", () => {
  let obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("returns noma for 2", () => {
    assert.equal(_.findKey(obj, x => x.stars === 2), 'noma');
  });

  it("returns Blue Hill for 1", () => {
    assert.equal(_.findKey(obj, x => x.stars === 1), 'Blue Hill');
  });

  it("returns undefined for undefined", () => {
    assert.equal(_.findKey(), undefined);
  });
});