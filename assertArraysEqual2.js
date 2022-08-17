
const eqArrays = require('./eqArrays')

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

module.exports = assertArraysEqual2
