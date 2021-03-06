var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var k = 0;

function changeBackground(){
	body.style.background = 
	  "linear-gradient(to right," +
	  color1.value +
	  ", " +
	  color2.value +
	  ")";

	css.textContent = body.style.background+";";
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function randomBackground() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeBackground();
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
button.addEventListener("click", randomBackground);

changeBackground();

