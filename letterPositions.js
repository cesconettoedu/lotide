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

module.exports = letterPositions;
    