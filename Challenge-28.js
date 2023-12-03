/*Challenge 28
Description:
Create a proxy object that intercepts and logs all property access.
Solution Approach:
Use the Proxy object to create a wrapper around another object.*/
// My Solution: 
function makeLoggable(target) {
  return new Proxy(target, {
    get(target, property) {
      console.log(`Reading property "${property}"`);
      return target[property];
    }
  });
}   
// Solution using Author's Object:
function makeLoggable(target) {
  return new Proxy(target, {
    get(target, property) {
      console.log(`Reading property "${property}"`);
      return target[property];
    }
  });
}
// Tests
const scaler = {challenge_name: '30 days of Javascript' };
const scalerxtopics = {challenge_peroid: '30 Days' };
const Discord = { server: 'Yoshi' };
const scalerProxy = makeLoggable(scaler);
const scalerxtopicsProxy = makeLoggable(scalerxtopics);
const tomProxy = makeLoggable(Discord);
console.log();
console.log(scalerProxy.challenge_name);
console.log();
console.log(scalerxtopicsProxy.challenge_peroid);
console.log();
console.log(scalerProxy.server);
         
    