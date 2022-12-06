alert("Hi Silky, gotta say you something. Long time no contact.");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function openvid(){
sleep(3000).then(()=> {window.open("https://youtube.com/shorts/0FSeplvUVSs?feature=share");});
}

function togglegift(){
var image = document.getElementById("gift");
if (image.src.match("closed")){
image.src="img/open.png";
if(image.src.match("open")){
openvid();}}
else{
image.src="img/closed.png";}
}
