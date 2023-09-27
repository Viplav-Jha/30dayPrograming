// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

// function minAndmax(arr){
//     var max=arr[0]

//     for(let i=1;i<arr.length;i++){
//       if(arr[i]>max)
//        max=arr[i]
//     }
//     return max;

// }
// const input =[3,4,,5,1,9]
// const result=minAndmax(input);
// console.log(result);

// function min(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// const input = [3, 4, 5, 1, 9];
// const result = min(input);
// console.log(result);

// const number =[2,6,7,8,3,2,1];
// const max =Math.max(...number)
// console.log(max)

const number =[2,6,7,8,3,2,1];
const min =Math.min(...number)
console.log(min)
