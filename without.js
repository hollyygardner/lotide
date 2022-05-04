const assertArraysEqual = require("./assertArraysEqual")
const eqArrays = require("./eqArrays")

let without = function (source, itemsToRemove) {
  let answer = []
  if (eqArrays(source, itemsToRemove) === false) {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        answer.push(source[i])
      }
    }
    return answer
  }
}

// loop over both arrays
// find indexes in source that arnt in itemsToRemove
// log those indexs



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]