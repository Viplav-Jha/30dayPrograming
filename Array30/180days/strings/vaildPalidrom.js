function isPalindrome(str) {
    // Your code here
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    console.log(cleanStr)
    const reverseStr = cleanStr.split('').reverse().join('')
    console.log(reverseStr)
     return cleanStr === reverseStr;
  }
  
  console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Should output true
  console.log(isPalindrome("race a car")); // Should output false
  console.log(isPalindrome("Madam, in Eden, I'm Adam")); // Should output true
  