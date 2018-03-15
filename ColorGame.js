var modebtn = document.querySelectorAll(".mode");/*by selected the mode classes, 
we can select all mode in one loop, instead of selecting different mode button*/
var h1 = document.querySelector("h1");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;/*set a varoable to defined how many random colors we need*/
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var colors = generateRandomColors(numSquares);




/*When we use the rgb notation, remenber to leave a space after the commons,
in order to match with the system*/
var pickedcolor = colors[pickcolor(numSquares)];
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedcolor;

for(var i = 0; i < modebtn.length; i++){
	modebtn[i].addEventListener("click", function(){
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");
		/*asign numsquares*/
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	})

	modebtn[i].addEventListener("mouseover", function(){
		this.classList.add("hover");
	})

	modebtn[i].addEventListener("mouseout", function(){
		this.classList.remove("hover");
	})
}

/*creat a function to reset the squares, when click the mode buttons*/
function reset(){
	colors = generateRandomColors(numSquares); /*Genrate all new colors*/
	pickedcolor = colors[pickcolor(numSquares)]; /*pick a new random color*/
	colorDisplay.textContent = pickedcolor; /*change the text of picked color*/
	/*set new colors for squares*/
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){   
		squares[i].style.background = colors[i];
		}else{
			squares[i].style.background = "none";
			/*hide the last three squres*/
		}
		}
	h1.style.background = "rgb(129, 216, 208)";
	messageDisplay.textContent = "Pick One";
}

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	/*asign all the colors from the colors array to the squares*/
	squares[i].addEventListener("click",function(){
		var SeletedColor = this.style.background; /*make a variable to compare*/
		if(SeletedColor === pickedcolor){
			h1.style.background = pickedcolor;
			messageDisplay.textContent = "Well done";
			ChangeColors(pickedcolor);
			///resetButton.textContent = "New Game";
		} else{
			this.style.background = "#232323" ;/*make this square "dispear" */
			messageDisplay.textContent = "Try Again"; 
		}
	});
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");	/*add background color for the button selected*/
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3; /*set the size of squares*/
// 	colors = generateRandomColors(numSquares); /*Genrate all new colors*/
// 	pickedcolor = colors[pickcolor(numSquares)]; /*pick a new random color*/
// 	colorDisplay.textContent = pickedcolor; /*change the text of picked color*/
// 	/*set new colors for squares*/
// 	h1.style.background = "rgb(129, 216, 208)";
// 		messageDisplay.textContent = "Pick One";
	
// 	for(var i = 0; i < squares.length; i++){
		
// 		if(colors[i]){ 
// 		squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.background = "none";
// 			/*hide the last three squres*/
// 		}
// 		}
// })

/*change the color when hover on or out 
of the easy button or hard button*/

// easyBtn.addEventListener("mouseover", function(){
// 	easyBtn.classList.add("hover");
// })

// easyBtn.addEventListener("mouseout", function(){
// 	easyBtn.classList.remove("hover");
// })

// hardBtn.addEventListener("mouseover", function(){
// 	hardBtn.classList.add("hover");
// })

// hardBtn.addEventListener("mouseout", function(){
// 	hardBtn.classList.remove("hover");
// })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares); /*Genrate all new colors*/
// 	pickedcolor = colors[pickcolor(numSquares)]; /*pick a new random color*/
// 	colorDisplay.textContent = pickedcolor; /*change the text of picked color*/
// 	/*set new colors for squares*/
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		}
// 	h1.style.background = "rgb(129, 216, 208)";
// 	messageDisplay.textContent = "Pick One";
// })

/*add the color while hover on the button*/
resetButton.addEventListener("mouseover", function(){
	this.classList.add("hover");
})

resetButton.addEventListener("mouseout", function(){
	this.classList.remove("hover");
})

resetButton.addEventListener("click", function(){
	reset();
})

/*a function to change all color to the picked color when the user pick the right one*/
function ChangeColors(color){
	for(var i = 0; i < squares.length; i++){
		if(colors[i])
		squares[i].style.background = color;
		/*need to use squares array
		,instead of colors array, cause 'background' is defined by squares*/
	}

}

/*generate a index number for pickcolor*/
function pickcolor(numSquares){
	var random = Math.floor(Math.random()*(numSquares-1) + 1);
	return random;
	/*Math.random Generate floating random number in [0,1)*/
}

/*generate a colors array that has num nodes*/
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(RandomColor());
	}
	return arr;
}

function RandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	/*Generate r g b*/
	return "rgb(" + r + ", " + g + ", "+ b + ")";
	/*return rgb color as a string*/ 
}