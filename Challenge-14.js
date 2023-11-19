/*Write a JavaScript function to concatenate a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

Outputs
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"*/

function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha! ',3));