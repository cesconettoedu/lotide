const without = function(source, itemsToRemove) {
  let arrayWithout = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      arrayWithout.push(source[i]);
    }
  }
  return arrayWithout;
};

module.exports = without;