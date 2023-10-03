// Input :
// arr[] = {1, 3, 5, 7, 9}
// k1 = 1
// k2 = 3
// k3 = 4
// k4 = 6
// Output :
// 3 5 7 9 1
// 7 9 1 3 5
// 9 1 3 5 7
// 3 5 7 9 1
// Input :
// arr[] = {1, 3, 5, 7, 9}
// k1 = 14
// Output :
// 9 1 3 5 7
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // In case k is larger than the length of the array
  const rotated = arr.slice(-1).concat(arr.slice(0, n - k));

  return rotated;
}

// Input
const arr = [1, 3, 5, 7, 9];

// Output
const output1 = rotateArray(arr, 1);

// Print the outputs
console.log(output1);
