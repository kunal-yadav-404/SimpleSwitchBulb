// let bulbOn = document.getElementById("on");
// let bulbOff = document.getElementById("off");
// let image = document.getElementById("bulb");

// bulbOn.onclick = "image.src='./img/pic_bulbon.gif'";
// document.getElementById("msg").innerHTML = "Hello";
var flag = false;

function switchOn() {
  let bulb = document.getElementById("bulb");
  var btn = document.getElementById("btn");
  //   var btns = document.getElementById("btnChange");
  if (flag == false) {
    document.getElementById("bulb").src = "./img/pic_bulbon.gif";
    document.getElementById("btn").innerHTML = "Switch Off";
    // document.getElementById("btns").style.backgroundColor = "red";

    flag = true;
  } else {
    document.getElementById("bulb").src = "./img/pic_bulboff.gif";
    document.getElementById("btn").innerHTML = "Switch On";
    flag = false;
  }
}
