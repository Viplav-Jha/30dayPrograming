// Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5}
// Output: 2 4 6 8 7 9 1 3 5

// function seperateEvenOdd(arr) {
//   let n = arr.length;
//   let evenArr = [];
//   let oddArr = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArr.push(arr[i]);
//     } else {
//       oddArr.push(arr[i]);
//     }
//   }

//   return evenArr.concat(oddArr);
// }

//using two pointer
function segregateOddEven(arr) {
    let left = 0; // Pointer starting from the beginning
    let right = arr.length - 1; // Pointer starting from the end
  
    while (left < right) {
      // Move the left pointer to find an odd number
      while (arr[left] % 2 !== 0 && left < right) {
        left++;
      }
  
      // Move the right pointer to find an even number
      while (arr[right] % 2 === 0 && left < right) {
        right--;
      }
  
      // Swap the odd and even numbers
      if (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = [7, 2, 9, 4, 6, 1, 3, 8, 5];
  const result = segregateOddEven(inputArray);
  console.log(result); // Output: [7, 9, 1, 3, 5, 2, 4, 6, 8]
  