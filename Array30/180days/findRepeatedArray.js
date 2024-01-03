function findRepeated(arr) {
    let slow = arr[0];
    let fast = arr[0];
  
    // Phase 1: Detect if there's a cycle
    do {
      slow = arr[slow];
      fast = arr[arr[fast]];
    } while (slow !== fast);
  
    // Phase 2: Find the repeated element
    slow = arr[0];
    while (slow !== fast) {
      slow = arr[slow];
      fast = arr[fast];
    }
  
    return slow; // The repeated element
  }
  
  const input = [4, 5, 2, 2, 6, 7];
  const output = findRepeated(input);
  console.log(output);
  