//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  // your code here
   let positive = 0;
   let negative = 0

  if(input === null || input.length === 0) return []
  
  input.forEach((el) => {
    if(el > 0) positive += 1
    
    if(el < 0) negative += el
  })
  return [positive, negative]
}