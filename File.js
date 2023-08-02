var timeInterval;
var startTime;
var isStart=false;

// Time Format (hh:mm:ss)
function formatTime(time)
{
    const hours= Math.floor(time/3600);
    const min=Math.floor((time%3600)/60);
    const sec=time%60;

    return `${String(hours).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

// To Start Stopwatch
function startTimer(){
    startTime=Date.now();
    timeInterval=setInterval(updateDisplay,1000);
}

// To Stop Stopwatch
function stopTimer(){
    clearInterval(timeInterval);
}

// To Reset Timer
function resetTimer(){
    stopTimer();
    document.getElementById('display').textContent='00:00:00';
}

// To Update Display
function updateDisplay(){
    const currentTime = Math.floor((Date.now() - startTime)/1000);
    document.getElementById('display').textContent=formatTime(currentTime);
}
// To Set Start Button
document.getElementById('start-btn').addEventListener('click',function(){
    if(!isStart)
    {
        startTimer();
        isStart=true;
    }    
});

// To Set Stop Button
document.getElementById('stop-btn').addEventListener('click',function(){
    if(isStart){
        stopTimer();
        isStart=false;
    }
});

// To Set Reset Button
document.getElementById('reset-btn').addEventListener('click',function(){
    resetTimer();
    isStart=false;
});
