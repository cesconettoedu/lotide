
const countLetters = (array1) => {
  let output = {};
  let arrayDiv = array1.replace(/\s/g, ''); 
  for (let value of arrayDiv) {
      if (value in output) {
      output[value] += 1;
    } else {
      output[value] = 1;
    }
  }
  return output;
};
 

 
