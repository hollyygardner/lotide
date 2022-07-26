// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual}) !== {expected}");
  }
}; 

const countLetters = function(string) {
  //create the object 
  const resultObject = {}; 
  for (let i = 0; i < string.length; i++) {
    if (resultObject[string[i]]) {
      resultObject[string[i]] += 1
    } else {
      resultObject[string[i]] = 1
    }
    
  }
  return resultObject
} 
console.log(countLetters("hello"))
assertEqual(countLetters("Hello").l,2)