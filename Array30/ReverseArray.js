// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// function ReverseArray(input){
//     for(let i=0;i<input.length-1;i++){
//         const result = input.split('').reverse().join('');
//         return result
//     }
    
// }

// const input ="arr[] = {4, 5, 1, 2}"
// const Output =ReverseArray(input);
// console.log(input);
// console.log(Output);


 function ReverseArray(arr){
    var left =0;
    var right =arr.length-1;

    while(left< right){
        var temp =arr[left];
         arr[left] =arr[right]
          arr[right] =temp;

        left ++;
        right --;
    }
   
 }

 var myArray =[1,2,3,4,5]
 ReverseArray(myArray);
 console.log(myArray);


 //Python (Revese)

