const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let count in itemsToCount) {
    if (itemsToCount[count] && allItems.includes(count)) {
      results[count] = 0;
    }
  }

  for (const item of allItems) {
    for (let count in itemsToCount) {
      if (itemsToCount[count] && item === count) {
        results[count]++;
      }
    }
  }

  console.log(results);

  return results;
};