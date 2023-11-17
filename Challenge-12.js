/* Challenge 12
Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output:
"14:37:42"
"14:37:43"
 "14:37:44"
"14:37:45"
"14:37:46"
"14:37:47" */

function rudraClock() {
    let currentTime = new Date();
    let  hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    console.log(hours + ":" + minutes + ":" + seconds);
}
setInterval(rudraClock, 1000);