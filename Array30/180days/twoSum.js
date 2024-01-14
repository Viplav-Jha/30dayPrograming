// const nums = [2, 7, 11, 15];
// const target = 9;
// // The indices of the elements 2 and 7 add up to the target 9.
// // Therefore, the expected output is [0, 1].

function twoSum(arr, target) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

const input = [2, 11, 7, 15];
const target = 9;
const output = twoSum(input, target);
console.log(output);
