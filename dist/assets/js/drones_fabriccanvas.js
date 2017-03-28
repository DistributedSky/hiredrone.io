jQuery(document).ready(function($){

	/* Initialize canvas and variables */
	var w_w = window.innerWidth;
	// var w_h = window.innerHeight;

	var	canvas = new fabric.StaticCanvas('header-drones', {
		selection:            false,
		hoverCursor:          'default',
		renderOnAddRemove:    false,
		// stateful:             false,
		enableRetinaScaling:  false
	});


	/* Set canvas size */
	var SetCanvasSize = function(){
		canvas.setWidth(window.innerWidth*3);
		canvas.setHeight(window.innerHeight*3);

		canvas.renderAll();
	};


	var DrawPattern = function(){


	 fabric.Image.fromURL('./assets/i/pattern_drone.svg', function(img) {

	    img.scaleToWidth(2000);

	    var patternSourceCanvas = new fabric.StaticCanvas();
	    patternSourceCanvas.add(img);

	    var pattern = new fabric.Pattern({
	      source: function() {
	        patternSourceCanvas.setDimensions({
	          width: img.getWidth(),
	          height: img.getHeight()
	        });
	        return patternSourceCanvas.getElement();
	      },
	      repeat: 'repeat'
	    });


	    var PatternRect = new fabric.Rect({
	        left: 0,
	        top: 0,
	        width: canvas.width,
	        height: canvas.height,
	        fill: pattern,
        	objectCaching: false,
        	strokeWidth: 2,      //#
        	stroke: 'green'     //#
      	});



      	setTimeout(function(){

      		var d = 4000;
      		var w = 200;

			img.animate('width', w, {
			  	onChange: canvas.renderAll.bind(canvas),
			  	duration: d,
			  	easing: fabric.util.ease.easeInOutQuint
			});

			img.animate('height', w, {
			  	onChange: canvas.renderAll.bind(canvas),
			  	duration: d,
			  	easing: fabric.util.ease.easeInOutQuint
			});

			img.animate('angle', 35, {
			  	onChange: canvas.renderAll.bind(canvas),
			  	duration: d,
			  	easing: fabric.util.ease.easeInOutQuint
			});

			// patternSourceCanvas.setDimensions({
	  //         width: w,
	  //         height: w
	  //       });

      		canvas.renderAll();
      	}, 1000);




	    canvas.add(PatternRect);
	    canvas.renderAll();

      });
	  	 

	};


	// var DrawDrone = function(){

	// 	fabric.Image.fromURL('./assets/i/pattern_drone.svg', function(oImg) {
	// 		oImg.scale(1.5);
	//   		canvas.add(oImg).renderAll();
	// 	});
  		
	// };




	//Init

	SetCanvasSize();
	window.addEventListener('resize', SetCanvasSize, false);

	DrawPattern();
  

});