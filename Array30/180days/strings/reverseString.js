function reverseString(str){
  
  return str.split('').reverse().join("")
}

const input = "Hello World!!"
const output =reverseString(input);
console.log(output)

// function reverseString(str){
//      let reverseStr = '';
//      for(let i =str.length-1; i>=0 ;i--){
//         reverseStr += str[i];
//      }
//      return reverseStr
//   }
  
//   const input = "My name is viplav"
//   const output =reverseString(input);
//   console.log(output)