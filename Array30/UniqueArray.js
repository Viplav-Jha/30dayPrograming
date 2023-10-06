// Input: arr[] = {12, 10, 9, 45, 2, 10, 10, 45}
// Output: 12, 10, 9, 45, 2

function UniqueArray(arr){
 let n =arr.length
 let newArray =[]
 for(i=0;i<n;i++){
    if(newArray.indexOf(arr[i])===-1){
        newArray.push(arr[i])
    }
 }
 return newArray;
   
}
const input =[12, 10, 9, 45, 2, 10, 10, 45]
const result =UniqueArray(input)
console.log(result);