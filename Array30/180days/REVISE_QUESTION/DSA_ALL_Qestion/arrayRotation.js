function arrayRotation(arr) {
       const n = arr.length;
       const new_Array = [];
     
       for (let i = n - 1; i >= 0; i--) {
         new_Array.push(arr[i]);
       }
     
       return new_Array;
     }
     
     const input = [2, 3, 4, 5, 6, 7];
     const output = arrayRotation(input);
     console.log(output);
     