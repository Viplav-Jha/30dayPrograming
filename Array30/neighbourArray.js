// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

function neighbourArray(arr) {
  let newArr = [];
  let n = arr.length;
  for (let i = 0; i < n; i++)
    if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
      newArr.push(arr[i]);
    }
  return newArr;
}

const input = [5, 10, 20, 15];
const result = neighbourArray(input);
console.log(result);
