function createCheckDigit(membershipId) {
    // Ensure the membershipId is not zero
    if (membershipId !== '0') {
      let sum = 0;
      
      // Loop through the characters of the membershipId
      for (let i = 0; i < membershipId.length; i++) {
        // Convert each character to a number and add it to the sum
        sum += parseInt(membershipId[i]);
      }
      
      // Continue summing until you get a single-digit result
      while (sum > 9) {
        let tempSum = 0;
        // Split the sum into its digits and add them
        while (sum > 0) {
          tempSum += sum % 10;
          sum = Math.floor(sum / 10);
        }
        sum = tempSum;
      }
      
      return sum; // Return the single-digit check digit
    } else {
      throw new Error("Membership ID should not be zero.");
    }
  }
  
  console.log(createCheckDigit("55555")); // Output: 5
  