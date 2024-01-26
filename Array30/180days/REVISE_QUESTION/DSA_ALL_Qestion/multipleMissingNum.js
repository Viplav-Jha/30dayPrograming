function findMissingNumbers(arr) {
  const n = arr[arr.length - 1];
  const missingNumber = [];
  for (let i = 1; i < n; i++) {
    if (!arr.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

const input = [1, 3, 4, 5, 7, 9, 11, 13];
const missingNumbers = findMissingNumbers(input);
console.log("Missing-numbers:", missingNumbers);
