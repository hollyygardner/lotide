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

const takeUntil = function (array, callback) {
  let answer = [];
  for (let elementArray of array) {
    if (callback(elementArray)) {
      break;
    } else {
      answer.push(elementArray);
    }
  }
  return answer;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2])