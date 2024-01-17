function reverseVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const strArray = str.split("");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(strArray[left])) {
      left++;
    }

    while (left < right && !vowels.has(strArray[right])) {
      right--;
    }

    // Swap the vowels
    const temp = strArray[left];
    strArray[left] = strArray[right];
    strArray[right] = temp;

    left++;
    right--;
  }

  return strArray.join("");
}

// Test cases
console.log(reverseVowels("hello")); // Should output "holle"
console.log(reverseVowels("leetcode")); // Should output "leotcede"
console.log(reverseVowels("aA")); // Should output "Aa"
