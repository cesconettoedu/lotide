const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let value1 in object1) {
    if (Array.isArray(object1[value1]) && Array.isArray(object2[value1])) {
      if (!eqArrays(object1[value1], object2[value1])) {
        return false;
      }
    } else {
      if (object1[value1] !== object2[value1]) {
        return false;
      }
    }
        
  }
  return true;
};

module.exports = eqObjects;