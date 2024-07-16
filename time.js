function fun(){
    var date = new Date()
    document.getElementsByClassName("hello")[0].innerHTML = date.getHours();
    document.getElementsByClassName("hello1")[0].innerHTML = date.getMinutes();
    document.getElementsByClassName("hello2")[0].innerHTML = date.getSeconds();
}
setInterval(fun,1000);