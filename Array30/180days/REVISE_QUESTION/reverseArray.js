function reverseArray(arr) {
    let n=arr.length;
    let new_Array=[]
   for(let i=n-1;i >=0;i--){
       new_Array.push(arr[i])
   }
   console.log(new_Array)
   return new_Array;
  }
  
  const input = [1, 2, 3, 6, 7, 9];
  const output = reverseArray(input);
  console.log(output);