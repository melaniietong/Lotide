const takeUntil = function(arrList, callback) {
  const results = [];

  for (let arr of arrList) {
    if (!callback(arr)) {
      results.push(arr);
    } else {
      return results;
    }
  }
  
  return results;
}

module.exports = takeUntil;