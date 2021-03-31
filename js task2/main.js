function button1(){
    var morningtime = 6;
    var afternoontime = 12;
    var eveningtime = 17;
    var nighttime = 21;

    var text;
    var time = fname.value;
    
    if(time >= morningtime && time < afternoontime){
        text = "Sabahınız xeyir, indi səhər çağıdır"
        document.getElementById("message").innerHTML = text;
    }
    if(time >= afternoontime && time < eveningtime){
        text = "Hər vaxtınız xeyir, indi günorta çağıdır"
        document.getElementById("message").innerHTML = text;
    }
    if(time >= eveningtime && time < nighttime){
        text = "Axşamınız xeyir, indi axşam çağıdır"
        document.getElementById("message").innerHTML = text;
    }
    if(time >= nighttime){
        text = "Gecəniz xeyirə, indi gecədir"
        document.getElementById("message").innerHTML = text;
    }
    if(time < morningtime || time == 00){
        text = "Gecəniz xeyirə, indi gecədir"
        document.getElementById("message").innerHTML = text;
    }
}