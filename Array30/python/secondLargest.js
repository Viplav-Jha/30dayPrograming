function secondlargest(arr){

const UniqueArray =[...(new Set(arr))]
const sort = UniqueArray.sort((a,b)=>a-b)
let n= sort.length;
console.log(sort)
return sort[n-2]

}

const input = [10,10,9,2,3,4,5,6,9];
const output = secondlargest(input);
console.log(output)

