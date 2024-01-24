function missingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  console.log(expectedSum);
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  console.log(actualSum);

  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

const input = [1, 2, 4, 5, 6, 7, 8];
const output = missingNumber(input);
console.log(output);
