const timer = document.getElementById("stopwatch");
var hour=0;
var min=0;
var sec=0;
var timestarted=false;

function startTimer(){
    if(timestarted==false){
        timestarted=true;
        timerCycle();
    }
}
function stopTimer(){
if(timestarted==true){
timestarted=false;
}

}
function timerCycle(){
    if(timestarted==true){
        sec=parseInt(sec);
        min=parseInt(min);
        hour=parseInt(hour);
        sec+=1;
        if(sec==60){
            min+=1;
            sec=0;
        }
        if(min==60){
            hour+=1;
            min=0;
            sec=0;
        }
        if(sec<10){
            sec="0"+sec;
        }
        if(min<10){
            min="0"+min;
        }
        if(hour<10){
            hour="0"+hour;
        }
        timer.innerHTML = hour+":"+min+":"+sec;
        setTimeout("timerCycle()",1000);
    }
}

function resetTimer(){
    timer.innerHTML = "00:00:00";
    timestarted =false;
    hour=0;
    min=0;
    sec=0;
}