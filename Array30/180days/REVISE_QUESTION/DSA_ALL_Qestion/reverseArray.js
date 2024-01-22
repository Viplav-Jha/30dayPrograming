function reverseStringDivideAndConquer(str) {
    // Base case: if the string has 0 or 1 characters, it's already reversed
    if (str.length <= 1) {
      return str;
    }
  
    // Divide the string into two halves
    const mid = Math.floor(str.length / 2);
    const leftHalf = str.slice(0, mid);
    const rightHalf = str.slice(mid);
  
    // Recursively reverse each half
    const reversedLeft = reverseStringDivideAndConquer(leftHalf);
    const reversedRight = reverseStringDivideAndConquer(rightHalf);
  
    // Combine the reversed halves
    return reversedRight + reversedLeft;
  }
  
  const input = 'hello';
  const output = reverseStringDivideAndConquer(input);
  console.log(output);  // Output: 'olleh'
  