// SET VARIABLES TO HOLD TIME VALUE
let seconds =0;
let minutes =0;
let hours =0;

// SET VARIABLES TO HOLD DISPLAY VALUE
let displaySeconds =0;
let displayMinutes =0;
let displayHours =0; 


// Define var to hold setInterval() function
let interval = null;

// Define var to hold stopwatch status
let status = "stopped";




// CREATE A STOPWATCH Function(I.E A LOGIC TO DETERMINE WHEN TO INCREAMENT THE NEXT IDBCursorWithValue.)
function stopwatch(){
    seconds++;

    // logic to determine when to increament the next value.
if (seconds / 60 === 1){
    seconds =0;
    minutes++;

if(minutes / 60 === 1){
    minutes=0
    hours++;
}
}
//  if seconds, minutes, and hours are only one digit, add a leading 0 to the value 
if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
}
else{
    displaySeconds = seconds;
}



if(minutes <10){
    displayMinutes = "0" + minutes.toString();
}else{
    displayMinutes = minutes;
}



if(hours < 10){
        displayHours = "0" + hours.toString();
    }else{
        displayHours = hours;
    }
    // display updates time to users 
    document.getElementById("display").innerHTML = displayHours+ ":" + displayMinutes+ ":" + displaySeconds;
}

function startStop(){
    if(status === "stopped"){

        // start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopwatch, 10);
        document.getElementById("startStop").innerHTML = "Stop" ;
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}
//   function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}
