# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @hollyygardner/lotide`

**Require it:**

`const _ = require('@hollyygardner/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(a,b)`: assertion function indicating equality of arrays
- `assertEqual(a,b))`: assertion function with emojis indicating equality of a,b
- `assertObjectsEqual(a,b)`: testing functions indicating equality of objects
- `countLetters`: looping to find number of character occurances
- `countOnly(a,b)`: returning count for subset of items
- `eqArrays(a,b)`: comparing arrays indicating equality
- `eqObjects(a,b)`: object key iteration
- `findKey(a,callback)`: returning first key for which callback returns truthy value
- `findKeyByValue(a,b)`: scanning objects and returning first key
- `head(a)`: returning first element of array
- `letterPositions`: returning indices in string where character is found
- `map(a,callback)`: returning sub-array of a and including first characters
- `middle(a)`: returning middle element of a as array
- `tail(a)`: returning new array removing first element of a
- `takeUntil(a,callback)`: returning slice of array until callback returns truthy value
- `without(a,callback)`: returning new array, removing elements of a
