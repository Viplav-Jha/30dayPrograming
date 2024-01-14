function thirdDistinctElement(arr) {
  const elementCounts = new Map();

  for (const element of arr) {
    // Increment count for each element
    elementCounts.set(element, (elementCounts.get(element) || 0) + 1);

    // Check if the current element is the third distinct element
    if (elementCounts.size === 3) {
      return element;
    }
  }

  // Handle the case where there are not enough distinct elements
  return "Not enough distinct elements";
}

const input = [1, 1, 2, 1, 2, 2, 3];
const result = thirdDistinctElement(input);
console.log(result);
