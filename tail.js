const tail = function(rest) {
  return rest.slice(1);
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);


module.exports = tail;