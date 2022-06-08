const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

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
