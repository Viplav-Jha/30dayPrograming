function reverseString(str){
  const reverseStr = str.split(' ').reverse().join(" ")
  return reverseStr;
}

const input = "My name is viplav"
const output =reverseString(input);
console.log(output)