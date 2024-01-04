function rotateArray(arr,k){
    const n = arr.length;
    k =k%n
    for(let i=0;i<k;i++){
     const lastElement = arr.pop()
      arr.unshift(lastElement)
    }
    return arr;
}

const input = [2,3,4,5,6,7,8,9,10]
const k1=4
const output=rotateArray(input,k1);
console.log(output)