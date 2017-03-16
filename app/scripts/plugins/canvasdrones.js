document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {

    	var 
    		canvas = document.querySelector("#header-dronesback"),
			canvasWidth = canvas.width = window.innerWidth,
			canvasHeight= canvas.height = window.innerHeight;

		var ctx = canvas.getContext("2d");

		// var patternImage = new Image();

		// function onPatternImageLoaded() {
		// 	console.log("loaded");
		// 	var pattern = ctx.createPattern(patternImage, "repeat");
		// 	ctx.fillStyle = pattern;
		// 	ctx.fillRect(0,0,canvasWidth,canvasHeight);
		// }

		// patternImage.onload = onPatternImageLoaded;
		// // patternImage.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFZdayt84qGb-tKXAwcjDF1oF2NwZJZoQqRLKrnvWSDDr1CKfgtA";
		// patternImage.src = "assets/i/pattern_drone.svg";



		  
		// Load up our image.
		var source = new Image();
		source.src = 'assets/i/pattern_drone.svg';
		source.width = '50';
		source.height = '50';
		// Render our SVG image to the canvas once it loads.
		source.onload = function(){
		    ctx.drawImage(source,0,0);
		}


	}
});


