const assert = require("chai").assert;
const middle = require("../middle")

describe("#middle", () => {
  it("should return the two middle elements of even array", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
  it("should return the middle element of odd array", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it("should return an empty array when given an array length of 2", () => {
    assert.deepEqual(middle([5,'6']), []);
    });
  it("should return an empty array when given an array length of 1", () => {
    assert.deepEqual(middle([1]), []);
    });
  it("should return an empty array when given empty array", () => {
    assert.deepEqual(middle([]), []);
    });
});