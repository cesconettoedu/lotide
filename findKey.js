const findKey = (namesX, callback) => {
  for (const key in namesX) {
    if (callback(namesX[key])) {
      return key;
    }
  }
};

module.exports = findKey;