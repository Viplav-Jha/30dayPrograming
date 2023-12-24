function mostOccurence(arr,k){
 let newArr =[];
 let n= arr.length;
  for(let i=0;i<n;i++){
    const element=arr[i];
    const occurence= arr.filter((el)=>el===element).length

    if(occurence ===k && newArr.indexOf(element) ===-1){
        newArr.push(element)
    }
  }
  return newArr
}

const input =[1,1,1,2,2,3]
const k=3;
const result = mostOccurence(input,k)
console.log(result)