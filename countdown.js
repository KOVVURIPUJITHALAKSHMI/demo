let hour=window.prompt("enter hours");
min=window.prompt("enter minutes");
sec=window.prompt("enter seconds");
document.getElementsByClassName("hello")[0].innerHTML=hour;
document.getElementsByClassName("hello1")[0].innerHTML=min;
document.getElementsByClassName("hello2")[0].innerHTML=sec;
let s;
let h;
let m;
function start(){
    function hours(){
        
        if(hour===0){
            alert("time is up!");
            stop();
        }
        hour=hour-1;
        document.getElementsByClassName("hello")[0].innerHTML=hour;
    }
    function minute(){
        
        if(min ===0){
            sec=59;
        }
        min=min-1;
        document.getElementsByClassName("hello1")[0].innerHTML=min;
    }
    function second(){
       
        if(sec === 0){
            sec=59;
        }
        sec=sec-1;
        document.getElementsByClassName("hello2")[0].innerHTML=sec;
    }
    h=setInterval(hours,360000);
    m=setInterval(minute,60000);
    s=setInterval(second,1000);

}
function stop(){
    clearInterval(h);
    clearInterval(m);
    clearInterval(s);
}
function reset(){
    hour=1;
    sec=59;
    min=59;
    document.getElementsByClassName("hello")[0].innerHTML ="1";
    document.getElementsByClassName("hello1")[0].innerHTML ="59";
    document.getElementsByClassName("hello2")[0].innerHTML ="59";
    stop();
}