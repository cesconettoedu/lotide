
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (namesX, callback) => {
  for (const key in namesX) {
    if (callback(namesX[key])) {
      return key;
    }
  }
};
