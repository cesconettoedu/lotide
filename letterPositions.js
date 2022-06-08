

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    } else if (sentence[i] in results) {
      results[sentence[i]].push(i);
    } else (results[sentence[i]] = [i]);
  }
  return results;
};
    
letterPositions("lighthouse in the house");
console.log(letterPositions("lighthouse in the house"));
// console.log(assertEqual(letterPositions("lighthouse in the house")));

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }