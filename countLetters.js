// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
 
const countLetters = (array1) => {
  let output = {};
  let arrayDiv = array1.replace(/\s/g, ''); // removi espaco
  for (let value of arrayDiv) {
    //console.log(typeof value);
    if (value in output) {
      output[value] += 1;
    } else {
      output[value] = 1;
    }
  }
  return output;
};
 
console.log(countLetters("lighthouse in the house"));
 
//console.log(assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}));
 
//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,}
 
