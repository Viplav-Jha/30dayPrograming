function arryRotaion(arr,k){
  const n= arr.length;
  const rotateIndex=k%n;
return arr.slice(-rotateIndex).concat(arr.slice(0,rotateIndex))
}

const input =[1,3,4,5,6,7]
const k=3
const output =arryRotaion(input,k)
console.log(output)