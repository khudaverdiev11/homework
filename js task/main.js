function myfunc(){
    document.getElementById("card1").style.display = "block";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("undersec").style.display = "flex";
}
function myfunc2(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    document.getElementById("card3").style.display = "none";
    document.getElementById("undersec").style.display = "flex";
}
function myfunc3(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    document.getElementById("undersec").style.display = "flex";
}


var date = ["01/02/2016", "05/02/2016", "12/02/2016", "14/02/2016"];
var Merchant = ["Apple", "Jack & Jones", "F&B", "Swarovski"];
var Spend = ["€205.25", "€32.95", "€47.22", "€325.00"];

document.getElementById("date1").innerHTML=date[0];
document.getElementById("date2").innerHTML=date[1];
document.getElementById("date3").innerHTML=date[2];
document.getElementById("date4").innerHTML=date[3];

document.getElementById("merchant1").innerHTML=Merchant[0];
document.getElementById("merchant2").innerHTML=Merchant[1];
document.getElementById("merchant3").innerHTML=Merchant[2];
document.getElementById("merchant4").innerHTML=Merchant[3];

document.getElementById("spend1").innerHTML=Spend[0];
document.getElementById("spend2").innerHTML=Spend[1];
document.getElementById("spend3").innerHTML=Spend[2];
document.getElementById("spend4").innerHTML=Spend[3];

