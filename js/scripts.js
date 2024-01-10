alert("Hi Kripa, there's something for you");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function openvid(){
sleep(2000).then(()=> {window.open("https://youtube.com/shorts/0FSeplvUVSs");});
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
