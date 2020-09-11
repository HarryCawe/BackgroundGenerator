var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
	 	+ color1.value 
	 	+ ", " 
	 	+ color2.value 
	 	+ ")";

	 	h3.textContent = body.style.background + ";";
}

// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php
	//#Source https://bit.ly/2neWfJ2 
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

function randomColor () {
	color1.value = random_hex_color_code()
	color2.value = random_hex_color_code()
	setGradient()
}


color1.value = "#ff0000"
color2.value = "#ffff00"
h3.textContent = "linear-gradient(to right, " + color1.value + ", " 	+ color2.value + ");";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);