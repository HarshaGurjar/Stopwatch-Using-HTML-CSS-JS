var hr=0;
var min=0;
var sec=0;
var ms=0;
var timer=false;

function start(){
    
    timer=true;
    watch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    min=0;
    sec=0;
    ms=0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("ms").innerHTML = "00";

}
function watch(){
    
    if(timer==true){
        ms=ms+1;

        if(ms==100){
            sec = sec+1;
            ms=0;
        }    
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }
        var mStr= ms;
        var minstr=min;
        var secstr=sec;
        var hrstr=hr;

        if(hr<10){
            hrstr="0"+hrstr;
        }
        if(min<10){
            minstr="0"+minstr;
        }
        if(sec<10){
            secstr="0"+secstr;
        }
        if(ms<10){
            mStr="0"+mStr;
        }
        document.getElementById("hr").innerHTML = hrstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("ms").innerHTML = mStr;

        setTimeout("watch()", 10);
    }
}
