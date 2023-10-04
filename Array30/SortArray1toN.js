// Input : arr[] = {10, 7, 9, 2, 8, 3, 5, 4, 6, 1};
// Output : 1 2 3 4 5 6 7 8 9 10 

function SortArray1toN(arr){
    let n= arr.length
    for(let i=0;i<n-1;i++){
      let minIndex =i;
      for(j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
      } 
      if(minIndex !==i)
      temp=arr[i]
      arr[i]=arr[minIndex] 
      arr[minIndex]=temp
    }
    return arr
}

const input =[10, 7, 9, 2, 8, 3, 5, 4, 6, 1]
const result =SortArray1toN(input)
console.log(result)