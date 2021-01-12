const assert = require('chai').assert;
const _      = require('../index');

describe("#tail", () => {
  const output = _.tail(["Hello", "Lighthouse", "Labs"]);

  it("returns length 2 for tail(output)", () => {
    assert.equal(output.length, 2);
  });

  it("returns Lighthouse for output[0]", () => {
    assert.equal(output[0], "Lighthouse");
  });

  it("returns Labs for output[1]", () => {
    assert.equal(output[1], "Labs");
  });
});