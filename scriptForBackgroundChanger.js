var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var css = document.querySelector(".css")
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";
	css.textContent = body.style.background + ";";
}

color3.addEventListener("input", function(){
	body.style.background = color3.value;
})

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

