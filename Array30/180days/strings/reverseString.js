// function reverseString(str){
//   const reverseStr = str.split('').reverse().join(" ")
//   return reverseStr;
// }

// const input = "My name is viplav"
// const output =reverseString(input);
// console.log(output)

function reverseString(str){
     let reverseStr = '';
     for(let i =str.length-1; i>=0 ;i--){
        reverseStr += str[i];
     }
     return reverseStr
  }
  
  const input = "My name is viplav"
  const output =reverseString(input);
  console.log(output)