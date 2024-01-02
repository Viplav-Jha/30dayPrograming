function twoSum(nums,target){
    const hashMap ={};

    for(let i=0; i<nums.length;i++){
        const currentNum =nums[i];
        const compliment =target- nums[i];
         // Check if the complement is in the HashMap
        if(hashMap[compliment] !== undefined){
             // Return the indices of the two numbers that add up to the target
            return [hashMap[compliment],i]
        }
         // Add the current number to the HashMap with its index
           hashMap[currentNum] = i;
    }
    return []

}

const nums = [2, 7, 11, 15];
const target =9;
const result =twoSum(nums,target);
console.log(result);