// Variables!
var radius = 5;
var x = 0;
var y = 0;
var color = 'rgb(255, 0, 0)';

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
// var colorPicker = document.querySelector("input");

var Drawing = true;


//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)

//resizes on load//
document.addEventListener('load', resizeCanvas());


// Handles tracing mouse movement and changing draw-values accordingly
	canvas.addEventListener('mousemove', function(e) {
		//console.log(e.pageX);
		//console.log(e.pageY);
		x = e.pageX;
		y = e.pageY;
		if (Drawing === true) {
			drawCircle();
		}
	})

// Handles the custom-color selection
window.addEventListener("input", function(e) {
	console.log("Input_Trigger")
	console.log(e.path[0].value)
	color=e.path[0].value
})

//Listener for the various keydowns with switch cases
document.addEventListener('keydown', function(e){
	console.log("event listener triggered: keypress");
	console.log(e.key)
		// switch cases
		switch(e.key){
			// Case Set: Color Changing
			case "b":
				console.log("Blue");
				// changes value of color variable to blue
				color="rgb(0, 0, 255)";
				break;

			case "g":
				console.log("Green");
				// changes value of color variable to green
				color="rgb(0, 255, 0)";
				break;

			case "r":
				console.log("Red");
				// changes value of color variable to red
				color="rgb(255, 0, 0)";
				break;

			case "y":
				console.log("Yellow");
				// changes value of color variable to yellow
				color="rgb(255, 255, 0)";
				break;

			// Pen Up & Down Cases
			case "ArrowUp":
				console.log("ArrowUp: Drawing Stopped");
				//default "Drawing" variable is true making drawing start automatically, this turns that off
				Drawing = false;
				break;
			case "ArrowDown":
				console.log("ArrowDown: Drawing Started");
				//turns Drawing back on
				Drawing = true;
				break;
			// Unique Case: Space-to-Clear-Canvas
			case " ":
				console.log("Clear the Canvas");
				ctx.clearRect(0,0,canvas.width, canvas.height);
				break;
		}
})

//resizes the canvas on resize of the window
window.addEventListener('resize', function(){
	resizeCanvas();
});

// Functions!
// This draws the circle
function drawCircle(){
	//console.log("I am going to draw!!");
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x,y,radius,0, 2*Math.PI);
	ctx.fill();
}

//handles canvas resizing
function resizeCanvas(){
	canvas.width  = window.innerWidth * 0.75;
	canvas.height = window.innerHeight * 0.75;

}
