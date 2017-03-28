jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);

	var crevealed = 'revealed';

	/*===  CHECK IF ELEMENT IS VISIBLE ===*/
    function reveal(element){
        $(element).one('inview', function(event, isInView){
            if (isInView)
                $(this).addClass(crevealed);
        });
    }

    if($('#index-targets').length > 0)
        reveal('#index-targets');

    if($('#index-promotions').length > 0)
        reveal('#index-promotions');

    if($('#footer-steps').length > 0)
        reveal('#footer-steps');

	/*===  end of CHECK IF ELEMENT IS VISIBLE ===*/


	//responsive tables
	$.fn.maketableresponsive = function (options) {

        var settings = $.extend({
            dataname: 'data-th'
        }, options);


        return this.each(function () {
            var $table = $(this);
            var i = 1;
            
            $table.find('th').each(function(){
                $table.data('thContent'+i, $(this).html());
                i++;
            });

            for( t=1; t < (i+1); t++ ){
                $table.find('tbody td:nth-child(' + t + ')').each(function(){
                    $(this).attr(settings.dataname, $table.data('thContent'+t));
                });
            }
            
        });
    };


	/*===  SOME RANDOM THIGS ===*/
	$('input[placeholder], textarea[placeholder]').placeholderEnhanced();

	//responsive tables
	if($('.sec-content table').length > 0){
        $('.sec-content table').maketableresponsive();
    }

    //Fancybox
    if (typeof ($.fn.fancybox) != 'undefined') {
        $("[data-fancybox]").fancybox({
            margin : [40, 40]
        });
    }

    //Detect Safari
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isSafari)
        $('html').addClass('no-safari');


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