//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function calculatetriangleArea(side1, side2, side3) {
    // Calculate the semi-perimeter
    const s = (side1 + side2 + side3) / 2;
 
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
 }
 
 // Example usage
 const side1 = 5;
 const side2 = 6;
 const side3 = 7;
 const area = calculatetriangleArea(side1, side2, side3);
 console.log("Area of triangle:", area);