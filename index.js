/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string 
*/

const fakeBin = (x) => {
  // Create empty arr
  let result = [];

  // Iterate through each number of the string
  for (let i = 0; i < x.length; i++) {
    // If num at the iterator position is <5
    if (x[i] < 5) {
      result.push(0);
    } else {
      result.push(1);
    }
  }
  // Return the string formed by the arr
  return result.join('');
};

console.log(fakeBin('45385593107843568')); // Testing value: 01011110001100111
