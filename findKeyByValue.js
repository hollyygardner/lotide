const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual}) !== {expected}");
  }
}; 

//console.log(assertEqual(1,1))

const findKeyByValue = function(genre, showName) {
  for (let i in genre) {
    if (genre[i] === showName) {
      return i
    }
  }
return 

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);