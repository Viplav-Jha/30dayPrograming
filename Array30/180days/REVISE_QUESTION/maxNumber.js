function maxNumber(nums) {
  const n = nums.length;
  let max = 0;
  if (n === 0) {
    return `not a vaild string`;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

const input = [10, 2, 12, 10, 3, 5, 12];
const output = maxNumber(input);
console.log(output);
