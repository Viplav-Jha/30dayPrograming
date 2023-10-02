// Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5}
// Output: 2 4 6 8 7 9 1 3 5

function seperateEvenOdd(arr) {
  let n = arr.length;
  let evenArr = [];
  let oddArr = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }

  return evenArr.concat(oddArr);
}

const input = [7, 2, 9, 4, 6, 1, 3, 8, 5];
const result = seperateEvenOdd(input);
console.log(result);
