const map = (arrList, callback) => {
  if (arrList === undefined) {
    return undefined;
  }
  
  const results = [];

  for (let arr of arrList) {
    results.push(callback(arr));
  }
  
  return results;
};

module.exports = map;