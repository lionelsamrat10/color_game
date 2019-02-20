var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
	]

var numSquares = 6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click" , function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click" , function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	//GENERATE ALL NEW COLORS
	colors = generateRandomColors(numSquares);
	//NEW RANDOM COLOR FROM ARRAY
	pickedColor = pickColor();
	//CHANGE colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	messageDisplay.textContent = "";
	//CHANGE THE COLOR OF SQUARES
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
} )

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial color to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked color
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			}
			 else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";	
			}
		}
	);
}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	 //change each color to match given color
	 squares[i].style.background = color;
	 } 
	
}

function pickColor(){
	var random = Math.floor((Math.random() * colors.length));
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push onto array
		arr.push(randomColor());
	}
//return that array
	return arr;
}

function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r , g , b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}