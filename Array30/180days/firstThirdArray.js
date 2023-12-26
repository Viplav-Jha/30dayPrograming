
function firstThirdArray(arr){
  let n= arr.length;
  const sort = arr.sort((a,b)=>a-b);
  return arr[1];
}
const input = [1,1,1,2,2,3]
const result =firstThirdArray(input);
console.log(result)