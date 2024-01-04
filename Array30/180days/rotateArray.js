// Input: [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
// Explanation: The array is rotated to the right by 3 steps.

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  return arr;
}

const input = [1, 2, 3, 4, 5, 6, 7,9];
const steps = 3;
const output = rotateArray(input, steps);
console.log(input);
