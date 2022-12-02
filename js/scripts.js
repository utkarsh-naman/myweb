alert("Hi Rashmi, gotta say you something.");

function togglegift(){
var Image = document.getElementById("gift");
if (Image.src.match("closed")){
Image.src="img/open.png";
window.open("https://youtube.com/shorts/0FSeplvUVSs?feature=share");}
else{
Image.src="img/closed.png";}
}
