function maxNumber(nums){
 const n= nums.length;
 if(n===0){
    return `invalid array`
 }

 return Math.max(...nums)

}
const input = [10, 2, 12, 10, 3, 5, 12];
const output = maxNumber(input);
console.log(output);

