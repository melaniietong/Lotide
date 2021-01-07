const words = ["ground", "control", "to", "major", "tom"];

const map = (arrList, callback) => {
  const results = [];

  for (let arr of arrList) {
    results.push(callback(arr));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);