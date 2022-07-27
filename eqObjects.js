const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual}) !== {expected}");
  }
}; 

const eqArrays = function(arrayOne, arrayTwo) {
  let equalCondition = false
  if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
    equalCondition = eqArrays(arrayOne, arrayTwo)
  } if (equalCondition === true) {
    console.log(`😃😃😃Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // Converting object keys into arrays 
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  //Comparing the length of the arrays 
    if (object1Keys.length !== object2Keys.length) return false 
      // Iterating over keys of the object 
      for (let key of object1Keys) { 
        //Checking if value of a given key is of an array data structure 
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          //Checking if those two arrays are equal 
          return eqArrays(object1[key], object2[key]) 
        } 
        // If the values of the key are the same 
        if (object1[key] !== object2[key]) return false 
      } 
        return true 
  }; 


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false