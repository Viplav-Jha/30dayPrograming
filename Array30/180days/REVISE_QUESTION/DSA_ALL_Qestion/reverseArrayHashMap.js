function uniqueHashMap(nums){
const n =nums.length;
if( n<=1){
    return nums;
}
const seen ={};
let uniqueIndex=0;
for(let i=0;i<n;i++){
    if(!seen[nums[i]]){
        seen[nums[i]]=true;
        nums[uniqueIndex] = nums[i];
        uniqueIndex++;
    }
}
nums.length =uniqueIndex;
return nums
}

const input =[1,2,3,3,3,4,5,6,7]
const output=uniqueHashMap(input);
console.log(input);

