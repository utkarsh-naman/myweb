alert("Hi Rashmi, gotta say you something.");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function togglegift(){
var image = document.getElementById("gift");
if (image.src.match("closed")){
image.src="img/open.png";
sleep(3000);
window.open("https://youtube.com/shorts/0FSeplvUVSs?feature=share");}
else{
image.src="img/closed.png";}
}
