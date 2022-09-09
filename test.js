const chai = window.chai;
const expect = chai.expect;

describe("SumTwoFound", () => {
  it("Should be true, if target found", function () {
    let numbers = [2, 7, 11, 15];
    let target = 9;
    let size = numbers.length;
    expect(findTarget(numbers, size, target)).to.be.true;
  });
  it("Should be true, if target found", function () {
    let numbers = [0, -1, 2, -3, 1];
    let target = -2;
    let size = numbers.length;
    expect(findTarget(numbers, size, target)).to.be.true;
  });
  it("Should be true, if target found", function () {
    let numbers = [1, 4, 45, 6, 10, -8];
    let target = 16;
    let size = numbers.length;
    expect(findTarget(numbers, size, target)).to.be.true;
  });
  it("Should be false, if target not found", function () {
    let numbers = [1, 4, 45, 6, 10, -8];
    let target = 106;
    let size = numbers.length;
    expect(findTarget(numbers, size, target)).to.be.false;
  });
});
