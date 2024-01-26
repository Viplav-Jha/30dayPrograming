function uniqueArray(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let uniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  nums.length = uniqueIndex + 1;
  return nums;
}

const input = [1, 2, 2, 3, 3, 4, 4, 7];
const output = uniqueArray(input);
console.log(output);
