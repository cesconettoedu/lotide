const takeUntil = function(array, callback) {
  const idx = array.findIndex(callback);
  return array.slice(0, idx);
};

module.exports = takeUntil;