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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  const idx = array.findIndex(callback);
  return array.slice(0, idx);
};

const output = (takeUntil(data1, x => x === 4));




assertArraysEqual((output), [ 1,  2, 5, 7, 2, -1, 2]);

assertArraysEqual((output), [ 1,  2, 5, 7, 2, -1]);






