// Write a JavaScript function to get all possible subsets with a fixed length  combinations in an array.

function PossibleSubsets(array, length) {
    const result = [];
    for (let i = 0; i < Math.pow(2, array.length); i++) {
      const subset = [];
      for (let j = 0; j < array.length; j++) {
        if ((i & (1 << j)) !== 0) {
          subset.push(array[j]);
        }
      }
      if (subset.length === length) {
        result.push(subset);
      }
    }
    return result;
  }
  
  console.log(PossibleSubsets([1,2,3,4], 1)); 
  console.log(PossibleSubsets([1,2,3], 2));
  