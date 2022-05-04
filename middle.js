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

 const middle = function(array) {
   let output = true; 
     if (array.length <= 2) {
       return []
     } else if (array.length % 2 !== 0) {  //odds
       return array[Math.floor(array.length / 2)] // what is the middle of an odd array?
     } else if (array.length % 2 === 0) {   //evens 
       return [array[((array.length / 2) -1 )], array[(array.length / 2)],]
 }
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]