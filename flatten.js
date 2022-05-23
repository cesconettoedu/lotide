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
 
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
 
const flatten = function(array1) {
  if (Array.isArray(array1) === false) {
    return "its not an array";
  }
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let item = array1[i];
    if (typeof  item === "object") {
      for (let j = 0; j < item.length; j++) {
        newArray.push(item[j]);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};
 
 
// console.log(flatten("eduardo"));
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
// console.log(flatten(["1", "2", "3"], [1, 2, "3"]));
// console.log(assertArraysEqual(flatten(["1", "2", "3"], [1, 2, "3"]), ["3"]));
