function reverseArray(arr) {
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }
  return arr;
}

const input = [5, 3, 2, 4, 0];
const output = reverseArray(input); 
console.log(output);
