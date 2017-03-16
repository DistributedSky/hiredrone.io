jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);


	/*===  SOME RANDOM THIGS ===*/
	$('input[placeholder], textarea[placeholder]').placeholderEnhanced();


	/*--- SCROLL ANCHOR SMOOTH ---*/
	$('.js-anchorSmooth').on('click', function(e){
		e.preventDefault();

		var ScrollBlockId = $(this).attr('href');
		if ( $(ScrollBlockId).length > 0 ){
			var ScrollPosition = $(ScrollBlockId).offset().top;
	    	$('body').animate({scrollTop: ScrollPosition }, 750);
	    }
	});
	
	/*===  END SOME RANDOM THIGS ===*/

});