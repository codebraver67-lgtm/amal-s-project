let pencolor="transparent";

function pencolorr(pen){
pencolor = pen ;
}

function setPixelColour(pixel) {
pixel.style.backgroundColor = pencolor;
}


document.getElementById("drop1").addEventListener("click", function() {
  document.body.style.background = "linear-gradient(to bottom, #adcdffff, #ffffff, #adcdffff)";
  document.getElementById("bigtitle").style.color = "#0080ffff";
  document.getElementById("theh3").style.color = "rgb(20, 67, 113)";
  document.getElementById("bigtitle").style.textShadow = "2px 2px 5px #88eba6ff";
  document.getElementById("navul").style.background = "rgb(27, 120, 179)";
  

});
document.getElementById("drop2").addEventListener("click", function() {
  document.getElementById("navul").style.background = "#FD0DBD";
  document.body.style.background = "linear-gradient(to bottom, #ffcfed, #ffffff, #ffcfed)";
  document.getElementById("bigtitle").style.color = "#ff2baa";
  document.getElementById("bigtitle").style.textShadow = "2px 2px 5px #eb88d9";
  document.getElementById("navbar").style.background = "#ffa2f4";
  document.getElementById("startbutton").style.background = "#ffa2f4";
});