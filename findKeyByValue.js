const bestTVShowsByGenre = {
  // key       searchFor
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
  
const findKeyByValue = function(show, searchFor) {
  let output = '';
  
  Object.keys(show).forEach(function(key) {
    if (show[key] !== searchFor) {
      output = undefined;
    } else {
      output = key;
    }
  });
  return output;
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
 