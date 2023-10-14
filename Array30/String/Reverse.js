// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i” 

function Reverse(str) {
    const reversedWords = str.split(' ').reverse().join(' ');
    return reversedWords;
 }
 
 const originalString = "i love programming very much";
 const reversedString = Reverse(originalString);
 console.log(reversedString);
 
 