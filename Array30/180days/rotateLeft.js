// [1, 2, 3, 4, 5] and k is 2, the output should be [3, 4, 5, 1, 2].

function leftRotate(arr,k){
    const n= arr.length;
    k=k%n;
    for(i=0;i<k ;i++){
        const firstElement =arr.shift()
        arr.push(firstElement)
    }
    return arr
 

}

const input =[1, 2, 3, 4, 5]
const step=2
const output =leftRotate(input,step)
console.log(output)