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

module.exports = middle;

