// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The contiguous subarray [4, -1, 2, 1] has the largest sum (6).

function maxSumSubArray(arr){
let maxEnd =arr[0]
let maxsoFar=arr[0]

for(let i=1;i<arr.length;i++){
  maxEnd = Math.max(arr[i],maxEnd+arr[i])
  maxsoFar =Math.max(maxEnd,maxsoFar)
}
 return maxsoFar;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const output =maxSumSubArray(input)
console.log(output)