function divideAndConqure(str){
    if(str.length <=1){
        return str;
    }

    //Divide the string into two halfs
    const mid =Math.floor(str.length/2)
    console.log(mid);
    const leftHalf = str.slice(0,mid)
    console.log(leftHalf)
    const rightHalf =str.slice(mid);
    console.log(rightHalf)
    
    // recursive call
    const reversedLeft =divideAndConqure(leftHalf);
    console.log("Reversed left",reversedLeft)
    const reversedRight =divideAndConqure(rightHalf);
    console.log("reverseRight",reversedRight)

    return reversedRight +reversedLeft
    
}
const input = 'hello';
const output = divideAndConqure(input);
console.log(output);  // Output: 'olleh'