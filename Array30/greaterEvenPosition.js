
function greaterEvenPosition(arr){
 let n =arr.length
 for(let i=0;i<n-1;i++){
    if(i % 2===0 && arr[i] > arr[i+1] ) {
        temp =arr[i+1]
        arr[i+1] =arr[i]
        arr[i] =temp
    }
 }
 return arr
}
const input =[1, 2, 2, 1]
greaterEvenPosition(input);
console.log(input)