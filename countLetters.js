const countLetters = function(str) {
  if (str === undefined) {
    return undefined;
  }

  const results = {};
  const singularStr = str.replace(/\s/g, "");

  for (let s of singularStr) {
    if (results[s]) {
      results[s]++;
    } else {
      results[s] = 1;
    }
  }

  return results;
};

module.exports = countLetters;