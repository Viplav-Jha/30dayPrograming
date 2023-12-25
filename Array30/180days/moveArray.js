function moveArray(arr){
    let n= arr.length;
 let lastElement =arr[n-1]
  
 for(let i=n-1;i>0;i--){
    arr[i] =arr[i-1]

 }
 arr[0] =lastElement;
 return arr;

}

const input= [1,2,3,4,4,5]
const result =moveArray(input)
console.log(result)