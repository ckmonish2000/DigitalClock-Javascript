function clock(){
var fulldate=new Date();
var hours=fulldate.getHours();
var minutes=fulldate.getMinutes();
var seconds=fulldate.getSeconds();


if(hours<9){
    hours="0"+hours;
}
if(minutes<9){
    minutes="0"+minutes;
}
if(seconds<9){
    seconds="0"+ seconds;
}
document.getElementById('hour').innerHTML=hours+':';
document.getElementById('minute').innerHTML=minutes+':';
document.getElementById('second').innerHTML=seconds;
}
setInterval(clock,100);