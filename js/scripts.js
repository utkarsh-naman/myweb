alert("Hi Khushi, gotta say you something. Long time no see.");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function openvid(){
sleep(2000).then(()=> {window.open("https://youtu.be/qn0RSYOnlXU");});
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
