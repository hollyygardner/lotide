const eqArrays = function(arrayOne, arrayTwo) {
  let answer = true;
  for (let i = 0; i < arrayOne.length; i ++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      answer = false;
    }
  }


  return answer;
  }

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let answer = false
  if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
    answer = eqArrays(arrayOne, arrayTwo)
  } if (answer === true) {
    console.log(`😃😃😃Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'))
console.log(assertArraysEqual(letterPositions("hello").e, [1]));