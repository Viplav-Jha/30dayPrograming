function secondlargest(arr){

const uniqueArray = [...(new Set(arr))]
if(uniqueArray.length <2 ){
    return " No second largest element exits"
}
const sort = uniqueArray.sort((a,b)=>b-a)

return sort[1]
}

const input = [10,10,9,2,3,4,5,6,9];
const output = secondlargest(input);
console.log(output)

