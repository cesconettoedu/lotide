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

const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    output = [];
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1]);
    output.push(array[(array.length / 2)]);
  } else {
    output.push(array[Math.floor(array.length / 2)]);
  }
  return output;
};
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
// console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
// console.log(assertArraysEqual(middle([1]), [])); // => []
// console.log(assertArraysEqual(middle([1, 2]), [])); // => []
// console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2])); // => [3, 4]
