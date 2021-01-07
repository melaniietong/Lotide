const countLetters = function(str) {
  const results = {};
  const singularStr = str.replace(/\s/g, "");

  for (s of singularStr) {
    if (results[s]) {
      results[s]++;
    } else {
      results[s] = 1;
    }
  }

  return results;
};