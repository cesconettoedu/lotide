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
 
const eqObjects = function(object1, object2) {  //when call eqObject , eqarray will be call autom.
  if (Object.keys(object1).length !== Object.keys(object2).length) {  // check the size of objects are same
    return false;
  }
  for (let value1 in object1) {
    if (Array.isArray(object1[value1]) && Array.isArray(object2[value1]))  { // check if its a array
      if (!eqArrays(object1[value1], object2[value1])) {  // eqarrays compare arrays
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
 
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
 
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const vx = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(vx, ba); // => true
// assertObjectsEqual(ab, ba); // => true
// assertObjectsEqual(ab, abc);// => false
 
 
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true
 
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false

