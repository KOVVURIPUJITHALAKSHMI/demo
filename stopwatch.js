
let hour=0;
let min=0;
let sec=0;

let s;
let m;
let h;

function start(){   
    function hours(){
        hour=hour+1;
        if(hour === 11){
            hour=0;
        }
    
        document.getElementsByClassName("hello")[0].innerHTML =hour;
    }
    
    function minute(){
        min=min+1;
        if(min === 59){
            min=0;
        }
        document.getElementsByClassName("hello1")[0].innerHTML = min;
    }
    
    function second(){
        sec=sec+1;
        if(sec === 59){
            sec=0;
        }
        document.getElementsByClassName("hello2")[0].innerHTML =sec;
    }
    s = setInterval(second,1000);
    m = setInterval(minute,60000);
    h = setInterval(hours,360000);

}

function stop(){
    clearInterval(s);
    clearInterval(m);
    clearInterval(h);
}

function reset(){
    hour=0;
    min=0;
    sec=0;
    document.getElementsByClassName("hello")[0].innerHTML ="00";
    document.getElementsByClassName("hello1")[0].innerHTML ="00";
    document.getElementsByClassName("hello2")[0].innerHTML ="00";
    stop();

}
