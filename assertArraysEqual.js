const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("โโโ Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("๐๐๐ Assertion Failed: ${actual}) !== {expected}");
  }
}; 

const eqArrays = function(arrayOne, arrayTwo) {
  let equalCondition = false
  if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
    equalCondition = eqArrays(arrayOne, arrayTwo)
  } if (equalCondition === true) {
    console.log(`๐๐๐Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`โโโAssertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false

