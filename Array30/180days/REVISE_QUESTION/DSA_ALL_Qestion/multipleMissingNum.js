function multipleMissing(arr) {
  const n = arr.length + 1;
  const missingNumber = [];
  for (let i = 1; i < n; i++) {
    if (!arr.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

const input = [1, 3, 4, 5, 7];
const output = multipleMissing(input);
console.log(output);
