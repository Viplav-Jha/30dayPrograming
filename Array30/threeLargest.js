function threeLargest(arr) {
  var largest = arr[0];
  var secondLargest = arr[0];
  var thirdLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (
      arr[i] > thirdLargest &&
      arr[i] !== secondLargest &&
      a[i] !== largest
    ) {
      thirdLargest = arr[i];
    }
  }

  return {
    largest,
    secondLargest,
    thirdLargest,
  };
}

const input = [2, 5, 6, 8, 4, 9];
const result = threeLargest(input);

console.log(result);
