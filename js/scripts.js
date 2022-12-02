alert("Hi Rashmi, gotta say you something.");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function openvid(){
sleep(3000);
window.open("https://youtube.com/shorts/0FSeplvUVSs?feature=share");
}

function togglegift(){
var image = document.getElementById("gift");
if (image.src.match("closed")){
image.src="img/open.png";
openvid();}
else{
image.src="img/closed.png";}
}
