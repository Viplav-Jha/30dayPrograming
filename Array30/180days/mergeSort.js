// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// output = [1, 2, 2, 3, 5, 6]
function mergeSort(nums1,nums2,m,n){
    const merge = nums1.slice(0,m).concat(nums2);

    const sort = merge.sort((a,b)=>a-b)
 
  
  return sort;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 =[2, 5, 6];
const m =3
const n=3
const output = mergeSort(nums1,nums2,m,n)
console.log(output)