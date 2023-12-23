// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the
// array is 35 and the second
// largest element is 34

// function second_find_Largest(arr){
//   let largest =arr[0];
//   let secondLarg = arr[0];
//   for(let i=1;i<arr.length;i++){
//     if(arr[i]>largest) {}
//     secondLarg=largest
//     largest=arr[i]
//   if(arr[i] >secondLarg && arr[i] <largest )
//   secondLarg =arr[i];
//   }
//   return `Second largest is ${secondLarg}`
// }

// const input =[12,35,1,10,34,1]
// const secondLargest = second_find_Largest(input)
// console.log(secondLargest);

function secondLargest(arr) {
  let largestSecond = arr.sort((a, b) => a - b); //
  let n = arr.length;
  console.log(largestSecond);

  return arr[n - 2];
}

const input = [12, 35, 1, 10, 34, 1];
const result = secondLargest(input);
console.log(result);
