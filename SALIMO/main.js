function bigImg() {
    document.getElementById("left1").style.display = "block";
    document.getElementById("left2").style.display = "block";
    document.getElementById("left3").style.display = "block";
  }
  function normalImg() {
    document.getElementById("left1").style.display = "none";
    document.getElementById("left2").style.display = "none";
    document.getElementById("left3").style.display = "none";
  }
  function bigImg1() {
    document.getElementById("right1").style.display = "block";
    document.getElementById("right2").style.display = "block";
    document.getElementById("right3").style.display = "block";
  }
  function normalImg1() {
    document.getElementById("right1").style.display = "none";
    document.getElementById("right2").style.display = "none";
    document.getElementById("right3").style.display = "none";
  }

function navcontent(){
  document.getElementById("navcontent1").style.display ="block";
  document.getElementById("navcontent2").style.display ="none";
  document.getElementById("navcontent3").style.display ="none";
  document.querySelector('.missionnav').style.cssText = 'color:yellow';
  document.querySelector('.advnav').style.cssText = 'color:white';
  document.querySelector('.guarnav').style.cssText = 'color:white';
}
function navcontent1(){
  document.getElementById("navcontent2").style.display ="block";
  document.getElementById("navcontent1").style.display ="none";
  document.getElementById("navcontent3").style.display ="none";
  document.querySelector('.advnav').style.cssText = 'color:yellow';
  document.querySelector('.missionnav').style.cssText = 'color:white';
  document.querySelector('.guarnav').style.cssText = 'color:white';
}
function navcontent2(){
  document.getElementById("navcontent3").style.display ="block";
  document.getElementById("navcontent1").style.display ="none";
  document.getElementById("navcontent2").style.display ="none";
  document.querySelector('.guarnav').style.cssText = 'color:yellow';
  document.querySelector('.missionnav').style.cssText = 'color:white';
  document.querySelector('.advnav').style.cssText = 'color:white';
}