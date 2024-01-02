function firstThirdArray(arr) {
  let n = arr.length;
  const UniqueArray = [...new Set(arr)];
  if (UniqueArray.length >= 3) {
    const sort = UniqueArray.sort((a, b) => a - b);
    console.log(sort);
    return sort[2];
  } else {
    return "not found any value";
  }
}
const input = [1, 1, 1, 2, 2, 3, 4, 5];
const result = firstThirdArray(input);
console.log(result);
