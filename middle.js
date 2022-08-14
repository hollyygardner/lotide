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

module.exports = middle