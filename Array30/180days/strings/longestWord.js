function longestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(/\s+/);
  
    // Initialize variables to store the longest word and its length
    let longest = "";
    let maxLength = 0;
  
    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Remove any non-alphabetic characters from the word
      const cleanWord = words[i].replace(/[^a-zA-Z]/g, "");
  
      // Check if the current word is longer than the current longest
      if (cleanWord.length > maxLength) {
        maxLength = cleanWord.length;
        longest = cleanWord;
      }
    }
   return longest;
  }
  // Test cases 
  console.log(longestWord("This is an example sentence"));
  console.log(longestWord("Programming is fun"));
  console.log(longestWord("Hello world"));
  