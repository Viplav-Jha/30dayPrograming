// const arr = [1,1,1,2,2,3]
// output=1

function frequenceArray(arr){
    let n= arr.length;
    let newArr =[];
     for(let i=0;i<n-1;i++){
        if(arr.indexOf(arr[i] !==i) && newArr.indexOf(arr[i] ===-1)){
            newArr.push(arr[i]);
            
        }
     }
     return new Set(newArr)
}

const input =  [1,1,1,2,2,3]
const result=  frequenceArray(input)
console.log(result)