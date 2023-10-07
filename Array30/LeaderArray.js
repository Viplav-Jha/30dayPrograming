function LeaderArray(arr) {
    const n = arr.length;
    const leaders = [];
    let maxRight = arr[n - 1]; // Initialize the maximum from the right side
  
    leaders.push(maxRight); // The last element is always a leader
  
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > maxRight) {
        leaders.push(arr[i]);
        maxRight = arr[i]; // Update the maximum from the right side
      }
    }
  
    return leaders.reverse(); // Reverse the array to get the correct order
  }
  
  const input = [16, 17, 4, 3, 5, 2];
  const result = LeaderArray(input);
  console.log(result);
  