const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual}) !== {expected}");
  }
}; 

const eqArrays = function(arrayOne, arrayTwo) {
  let answer = true;
  for (let i = 0; i < arrayOne.length; i ++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      answer = false;
    }
  }


  return answer;
  }

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);