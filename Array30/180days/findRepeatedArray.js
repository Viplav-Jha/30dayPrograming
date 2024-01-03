function repeated(arr){
 let n = arr.length;
 const newArr =[];
 for(let i=0;i<n;i++){
    if(arr.indexOf(arr[i])!==i && newArr.indexOf(arr[i]!== -1)){
        newArr.push(arr[i])
    }
 }
 return newArr;
}

const input = [4,5,2,2,6,7]
const output =repeated(input)
console.log(output)