// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33



// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

function findSubArrywithSum(arr,targetSum){
    let currentSum =arr[0];
    let start =0;

    for(let end = 1;end <=arr.length; end++){
        while (currentSum > target && start <end-1) {
            currentSum -= arr[start];
            start++;
        }
        if(currentSum === targetSum) {
            return[start,end-1]
        }
        if(end <arr.length){
            currentSum +=arr[end]
        }
    }
}

const input = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const result = findSubarrayWithSum(input, targetSum);

if (result) {
    console.log(`Sum found between indexes ${result[0]} and ${result[1]}`);
} else {
    console.log("No subarray found with the given sum.");
}