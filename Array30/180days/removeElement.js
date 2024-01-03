// const nums = [3, 2, 2, 3];
// const val = 3;
// After removing all instances of 3, nums becomes [2, 2].
// The new length is 2.


function removeElement(arr,val){
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j]!==val){
            arr[i] =arr[j]
            i++
        }
    }
    arr.length =i;
    return arr.length;
}

const input =[3, 2, 2, 3]
const val=3
const output =removeElement(input,val)
console.log(input)
console.log(output)