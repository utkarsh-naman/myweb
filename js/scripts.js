alert("Hi Rashmi, gotta say you something.");

function togglegift(){
var image = document.getElementById("gift");
if (image.src.match("closed")){
image.src="img/open.png";
window.open("https://youtube.com/shorts/0FSeplvUVSs?feature=share");}
else{
image.src="img/closed.png";}
}
