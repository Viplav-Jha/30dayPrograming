// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
// Output : arr[] = {2, 4, 6, 8, 0, 0, 0};

function MoveZero(arr) {
  let nonZeoIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeoIndex] = arr[i] * 2;
      if (nonZeoIndex !== i) {
        arr[i] = 0;
      }
      nonZeoIndex++;
    }
  }
  return arr;
}

const input = [1, 2, 0, 0, 0, 3, 6];
MoveZero(input);
console.log(input);
