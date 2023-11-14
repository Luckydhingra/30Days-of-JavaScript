function firstNonRepeatedCharacter(string) {  // Create an object to store the frequency of each character
        const charCount = {};

        for (let char of string) { // Iterate through the string to count the occurrences of each character
        charCount[char] = (charCount[char] || 0) + 1;
    }

        for (let char of string) {  // Iterate through the string to find the first character with a count of 1
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;     // If no non-repeated character is found, return null or a default value
}

// Example usage:
const inputString = "ABCD DBA";
const result = firstNonRepeatedCharacter(inputString);
const a = inputString
console.log("Used String : "+ a);
console.log("firstnon repeated word is : " + result); // Output: "c"
const inputString1 = "ABCD DCBA";
const result1 = firstNonRepeatedCharacter(inputString1);
const b = inputString1
console.log("Used String : "+ b);
console.log("firstnon repeated word is : " + result1);
