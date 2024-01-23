function sumArray(nums) {
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return sum;
}

const input = [2, 3, 4, 5, 6];
const output = sumArray(input);
console.log(output);
