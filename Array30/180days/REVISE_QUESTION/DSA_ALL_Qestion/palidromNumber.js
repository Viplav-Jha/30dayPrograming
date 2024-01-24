function palidromCheck(arr){
  const reversed = [...arr].reverse();
  console.log(reversed)
  return JSON.stringify(arr) === JSON.stringify(reversed)
}
console.log(palidromCheck([1, 2, 3, 2, 1]))
console.log(palidromCheck([1,2,1,0,2,1]))