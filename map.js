const words = ["ground", "control", "to", "major", "tom"]; 

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); 