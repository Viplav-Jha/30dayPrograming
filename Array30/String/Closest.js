// Input: S = { “the”, “quick”, “brown”, “fox”, “quick”}, word1 = “the”, word2 = “fox”
// Output: 3
// Explanation: Minimum distance between the words “the” and “fox” is 3

// Input: S = {“geeks”, “for”, “geeks”, “contribute”,  “practice”}, word1 = “geeks”, word2 = “practice”
// Output: 2
// Explanation: Minimum distance between the words “geeks” and “practice” is 2

function findMinDistance(words, word1, word2) {
    let index1 = -1; // Initialize with an invalid index
    let index2 = -1; // Initialize with an invalid index
    let minDistance = Infinity;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            index1 = i;
        } else if (words[i] === word2) {
            index2 = i;
        }

        if (index1 !== -1 && index2 !== -1) {
            const distance = Math.abs(index1 - index2);
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
    }

    return minDistance;
}

const words1 = ["the", "quick", "brown", "fox", "quick"];
const word1_1 = "the";
const word2_1 = "fox";
console.log(findMinDistance(words1, word1_1, word2_1)); // Output: 3

const words2 = ["geeks", "for", "geeks", "contribute", "practice"];
const word1_2 = "geeks";
const word2_2 = "practice";
console.log(findMinDistance(words2, word1_2, word2_2)); // Output: 2
