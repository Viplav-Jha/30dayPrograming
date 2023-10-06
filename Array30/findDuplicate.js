function findDuplicate(arr){
    let n=arr.length
    let newArray =[]
    for(i=0;i<n;i++){
        if(arr.indexOf(arr[i])!==i && newArray.indexOf(arr[i])===-1){
        newArray.push(arr[i])
        }
    }
    return newArray
}
const input=[2,3,4,4,4,5,5,6]
const result= findDuplicate(input)
console.log(result)