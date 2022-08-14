const head   = require('./head');
const tail   = require('./tail');
const map    = require('./map');
const middle = require('./middle');
const without   = require('./without');
const eqObjects = require('./eqObjects');
const eqArrays  = require('./eqArrays');
const countOnly = require('./countOnly');
const takeUntil = require('./takeUntil');
const findKey   = require('./findKey');
const findKeyByValue  = require('./findKeyByValue');
const countLetters    = require('./countLetters');
const letterPositions = require('./letterPositions');
const assertEqual     = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual  = require('./assertArraysEqual');
module.exports = {
  head,
  tail,
  middle,
  map,
  without,
  takeUntil,
  eqObjects,
  eqArrays,
  countOnly,
  findKey,
  findKeyByValue,
  countLetters,
  letterPositions,
  assertEqual,
  assertObjectsEqual,
  assertArraysEqual,
};