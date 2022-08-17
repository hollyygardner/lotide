const middle = function (array) {
  if (array.length <= 2) {
    return []
  }
  const middle = array.length / 2
  if (array.length % 2 !== 0) {
    return [
      array[Math.floor(middle)],
    ]
  } else {
    return [
      array[middle - 1],
      array[middle],
    ]
  }
}

module.exports = middle
