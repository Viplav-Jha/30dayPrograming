function NonDuplicate(arr){
      let newArr =[]
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const input =[4, 2, 7, 2, 4]
const output =NonDuplicate(input)
console.log(output)