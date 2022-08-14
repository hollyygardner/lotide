const eqArrays = function(arrayOne, arrayTwo) {
  let answer = true;
  for (let i = 0; i < arrayOne.length; i ++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      answer = false;
    }
  }


  return answer;
  }; 

  module.exports = eqArrays