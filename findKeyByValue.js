const findKeyByValue = function(obj, value) {
  for (const key in obj) {

    if (value === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
