
    var t = null;
    t = setTimeout(time,1000);//开始执行
    function time(){
    clearTimeout(t);//清除定时器
    var d=new Date();
    var n=d.getFullYear();
    var y=d.getMonth()+1;
    var r=d.getDate();
    var x=d.getDay();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var weekday=new Array(7)
    weekday[0]="日";
    weekday[1]="一";
    weekday[2]="二";
    weekday[3]="三";
    weekday[4]="四";
    weekday[5]="五";
    weekday[6]="六";
    function ling(i){
    if(i<10){
    i = '0' + i;
}
    return i;
}
    document.getElementById("timeShow").innerHTML =n+"年"+ling(y)+"月"+ling(r)+"日"+"星期"+weekday[x]+" "+ling(h)+":"+ling(m)+":"+ling(s);
    t = setTimeout(time,1000); //设定定时器，循环执行
}

