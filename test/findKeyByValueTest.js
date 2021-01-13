const assert = require('chai').assert;
const _      = require('../index');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns drama for The Wire", () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for That '70s Show", () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});