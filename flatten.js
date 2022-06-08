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

module.exports = flatten;