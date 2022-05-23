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
 
const without = function(source, itemsToRemove) {
  let arrayWithout = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {   //the instructor help me with includes
      arrayWithout.push(source[i]);
    }
  }
  return arrayWithout;
};


console.log(without([1, 2, 3], [1]));
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);

console.log(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["3"]);

