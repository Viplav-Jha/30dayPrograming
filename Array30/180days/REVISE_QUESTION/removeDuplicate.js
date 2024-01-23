function removeDuplicate(nums) {
  const n = nums.length;
  if (n <= 1) {
    return nums;
  }
  const uniqueArray = new Set([...nums]);
  return uniqueArray;
}

const input = [2, 2, 5, 6, 7, 8, 4, 4, 4];
const output = removeDuplicate(input);
console.log(output);
