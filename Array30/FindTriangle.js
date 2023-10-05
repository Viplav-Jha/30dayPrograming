function FindTrinagle(arr){
 let n=arr.length
 let count=0;
 for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        for(let k=j+1;k<n;k++ ){
            if(arr[i]+arr[j] > arr[k] && arr[j]+arr[k] >arr[i] && arr[i]+arr[k] >arr[j]){
                count++;
            }
        }
    }
 }
 return count;

}

const input =[10, 21, 22, 100, 101, 200, 300]
const result =FindTrinagle(input)
console.log(result)