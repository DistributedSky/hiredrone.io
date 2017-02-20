jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);

	
    /*---  TOGGLE BY CLICK ---*/
    $.fn.openclick = function (options) {

        var settings = $.extend({
            class_default: '', //class for link default
            class_toggle: '', //class for link toggle
            html_default: '', //html for link by default
            html_toggle: '', //html for link toggle
            el_toggle: 'href', //next or href
            open: function () {
            },
            close: function () {
            }
        }, options);


        return this.each(function () {
            var link = $(this);
            var obj;
            var html_default = '';

            if (settings.html_default == '')
                html_default = link.html();


            link.on('click', function (e) {

                e.preventDefault();


                if (settings.el_toggle == 'href') {
                    var block = link.attr('href');
                    obj = $(block);
                }
                if (settings.el_toggle == 'next') {
                    obj = link.next();
                }
                if (settings.el_toggle == 'prev') {
                    obj = link.prev();
                }

                obj.slideToggle('normal', function () {
                    if (obj.is(':hidden')) {
                        if (settings.class_default != '')
                            link.addClass(settings.class_default);

                        if (settings.class_toggle != '')
                            link.removeClass(settings.class_toggle);

                        if (settings.html_default != '')
                        	link.html(settings.html_default);
                        else
                        	link.html(html_default);

                        settings.open.call(link);

                    } else {
                        if (settings.class_toggle != '')
                            link.addClass(settings.class_toggle);

                        if (settings.class_default != '')
                            link.removeClass(settings.class_default);

                        if (settings.html_toggle != '')
                        	link.html(settings.html_toggle);
                        else{
                        	if (link.data('openclicktext'))
                        		link.html(link.data('openclicktext'));
                        }

                        settings.close.call(link);
                    }
                });
            });
        });
    };

	/*===  END LOCAL PLUGINS ===*/


	/*===  TABS ===*/

	$.fn.simpletabs = function (options) {

        var settings = $.extend({
            classHeadWrap: '.js-tabs-head',
            classTabsWrap: '.js-tabs-content',
            classNameActive: 'active',
            dataTabId: 'jssimple'
        }, options);


        return this.each(function () {
        	var $tabWrap = $(this); //get Tabs container
        	var $tabsTogWrap = $(settings.classHeadWrap); //get container for togglers
        	var $tabsTog = $tabsTogWrap.children(); //get Tabs togglers
        	var $tabs = $(settings.classTabsWrap).children(); //get Tabs

        	var countActive = 0;
        	var activeTab = '';


        	//count active tab togglers
        	$tabsTog.each(function(){
        		if($(this).hasClass(settings.classNameActive)){
        			activeTab = $(this).data(settings.dataTabId);
        			countActive++;
        		}
        	});

        	//if there is no active tab OR if there are a few active tabs, set it fo the first element
        	if (countActive == 0 || countActive > 1){
        		$tabsTog.removeClass(settings.classNameActive);
        		$tabsTogWrap.first().addClass(settings.classNameActive);
        		activeTab = $tabsTogWrap.first().data(settings.dataTabId);
        	}

        	//open active tab
        	if (activeTab != ''){
        		$tabs.hide();
        		$(settings.classTabsWrap).find('#' + activeTab).show();
        	}

        	$tabsTog.on('click', function(e){
        		e.preventDefault();
				e.stopPropagation();

				if(!$(this).hasClass(settings.classNameActive)){

					$tabsTog.removeClass(settings.classNameActive);
					$(this).addClass(settings.classNameActive);
					activeTab = $(this).data(settings.dataTabId);

					$tabs.hide();	
					$(settings.classTabsWrap).find('#' + activeTab).show();
				}
        	});
        });
    };

	if ($('.js-tabs').length > 0) {
		$('.js-tabs').simpletabs();
	}
	/*===  END TABS ===*/


	/*===  FANCYBOX ===*/
	if (typeof ($.fn.fancybox) != 'undefined') {
		var fancyBoxDefaults = {
			margin: 10,
			tpl: {
				closeBtn : '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
				next     : '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
				prev     : '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
			}
		}

		// everything that popus, including image galleries
		$('.fancybox').fancybox(fancyBoxDefaults);

		
		// href points to html page as a fallback, data-fancyboxlink to anchor of fancybox popup
		$('.fancybox-linked').on('click', function(e){
			e.preventDefault();
			e.stopPropagation();

			$.fancybox(
				$.extend({}, fancyBoxDefaults, {
		        	href: $(this).data('fancyboxlink')
		    	}))
		});
	}

	/*===  end of FANCYBOX ===*/

	if (typeof ($.fn.bxSlider) != 'undefined') {
		/*===  BXSLIDER INDEX ===*/
		if ($('.js-bxslider').length > 0) {
			var bxslider = $('.js-bxslider').bxSlider({
			  mode: 'fade',
			  pager: false,
			  adaptiveHeight: true,
			  auto: true,
			  autoHover: true,
			  pause: 3000,
			  nextText: '<span class="icon icon-next"></span>',
			  prevText: '<span class="icon icon-prev"></span>'
			});
			
			setTimeout(function(){
	            bxslider.redrawSlider();
	        },100);
		}
		/*===  end of BXSLIDER INDEX ===*/

		/*===  BXSLIDER PRODUCT ===*/
		var bxslider_pr = $('.js-bxsliderProduct').bxSlider({
		  mode: 'fade',
		  adaptiveHeight: true,
		  controls: false,
		  pagerCustom: '#product-bx-pager'
		});

		setTimeout(function(){
            bxslider_pr.redrawSlider();
        },100);
		/*===  end of BXSLIDER PRODUCT ===*/
	}



	/*===  SOME RANDOM THIGS ===*/
	$('input[placeholder], textarea[placeholder]').placeholderEnhanced();

	/*---  WRAP SELECT TAG IF IT IS NOT WRAPPED ---*/
	$('select').each(function(){
		if(!$(this).parent().hasClass('select'))
			$(this).wrap('<div class="select"></div>');
	});

	/*---  SET MAX HEIGHT FOR CATEGORIES MENU ---*/
	$('#header-categories').css('max-height', $(window).height() - 70);

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



	/*===  UP LINK ===*/
	var $oUpLink = $('#js-toplink');
	var tempSrcoll = 0;
	var curentScroll = 0;
	var upLinkTrig = true;

	function upLinkHandler(){
		if(upLinkTrig == true){

			curentScroll = $d.scrollTop();

			if (tempSrcoll < curentScroll){
				$oUpLink.hide();
			}
			else{
				$oUpLink.show();
			}

			tempSrcoll = curentScroll;



		    upLinkTrig = false;
		    setTimeout(function(){upLinkTrig = true}, 500);
	  	}
	}

	$w.on('scroll', upLinkHandler);



	$oUpLink.on('click', function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 0}, "slow");
	});
	/*===  end of UP LINK ===*/




	/*===  TOGGLE BY CLICK ===*/

    if ($('#header-nav_catlink').length > 0) {
        $('#header-nav_catlink').openclick({
        	html_default: 'По категориям <span class="icon icon-togDown"></span>',
        	html_toggle: 'По категориям <span class="icon icon-togUp"></span>'
        });
    }

    if ($('.js-shownext').length > 0) {
        $('.js-shownext').openclick({
        	el_toggle: 'next'
        });
    }

    if ($('.js-showprev').length > 0) {
        $('.js-showprev').openclick({
        	el_toggle: 'prev'
        });
    }

	/*===  END TOGGLE BY CLICK ===*/

	/*===  ACCORIONS + COOKIE FOR THEM ===*/
	/*

	USAGE ONLY WITH STYLES:
		<el class="accordion_title">
			<el class="text"></el>
			<el class="icon icon-togUp"></el>
		</el>
		<el class="accordion_content"></el>

	USAGE WITH STYLES AND COOKIES:
		<el class="accordion-cookied accordion_title" data-cookieid="something unique" data-cookieval="opened">
			<el class="text"></el>
			<el class="icon icon-togUp"></el>
		</el>
		<el class="accordion_content"></el> <-- on loading page if data-cookieval="opened" opens this by click on previous .accordion-cookied, if closed - closes.
	*/


	function toggleToggler(obj, state){
		if(state == 'down'){
			obj
				.find('.icon')
				.removeClass('icon-togUp')
				.addClass('icon-togDown')
				.attr('title', 'Развернуть');
		}

		if(state == 'up'){
			obj
				.find('.icon')
				.removeClass('icon-togDown')
				.addClass('icon-togUp')
				.attr('title', 'Свернуть');
		}
	}


	/* set & update cookie if it is such elements on page*/
	if ($('.accordion-cookied').length > 0) {
		$('.accordion-cookied').each(function(){
			var $this = $(this);
			var newState = '';


			$.fn.cookieinit({
				cookieName: $this.data('cookieid'),
				cookieVal: $this.data('cookieval'),
				getCookie: function(){
					
					if ($.cookie($this.data('cookieid')) == 'closed'){

						$this.next().hide();
						toggleToggler($this, 'down');
						newState = 'opened';

					}
					else{

						$this.next().show();
						toggleToggler($this, 'up');
						newState = 'closed';

					}
				}
			});

			$this.on('click', function(){

				$.fn.cookieinit('update', {
					cookieName: $this.data('cookieid'),
					cookieVal: newState,
					getCookie: function(){

						$this.data('cookieval', newState);
						
					}
				});
			});
		});
	}


	/* init accordions if it is such elements on page*/
    if ($('.accordion_title').length > 0) {
        $('.accordion_title').openclick({
        	el_toggle: 'next',
        	open: function(){
        		toggleToggler($(this), 'down');
        	},
        	close: function(){
        		toggleToggler($(this), 'up');
        	}
        });
    }

	/*===  END ACCORIONS + COOKIE FOR THEM ===*/





	/*===  HEADER NAVIGATION MOBILE ===*/
	var $oNav = $('#head-nav');
	var oNavTrig = true;

	$('#head-nav-tog').on('click', function(e){
		e.preventDefault();

		if($oNav.is(':hidden')){
			$oNav.removeClass('hide').addClass('show mobile tip tip-dark tip-left');
		}
		else{
			$oNav.removeClass('show').removeClass('hide mobile tip tip-dark tip-left');
		}
	});

	function headNavMobileHandler(){
		if(oNavTrig == true){

			if($w.width() > 1000)
				$oNav.removeClass('show').removeClass('hide mobile tip tip-dark tip-left');

		    oNavTrig = false;
		    setTimeout(function(){oNavTrig = true}, 250);
	  	}
	}

	$w.on('scroll', headNavMobileHandler); 


	/*===  end of HEADER NAVIGATION MOBILE ===*/


	/*===  TIP CLOSE (WATCH TIPS IN STYLES) ===*/
	$d.delegate('#header-top .tip .icon-cancel', 'click', function(e) {
		e.preventDefault();

		$(this).parent('.tip').removeClass('show hide mobile tip tip-dark tip-left');
	});

	$d.delegate('.tip .icon-cancel', 'click', function(e) {
		e.preventDefault();

		$(this).parent('.tip').hide();
	});
	/*===  end of TIP CLOSE (WATCH TIPS IN STYLES) ===*/




	/*===  FIX MENU WHILE SCROLL ===*/
	var $nav = $('#header-nav');
	var navFixTrig = true;

	function headNavHandler(){
		if(navFixTrig == true){

			if ($w.scrollTop() <= $('header[role="banner"]').outerHeight(true)){
				$nav.removeClass('fixed');
			}
			else{
				if($w.width() > 660)
	        		$nav.addClass('fixed');
			}

		    navFixTrig = false;
		    setTimeout(function(){navFixTrig = true}, 250);
	  	}
	}

	$w.on('scroll', headNavHandler);

	

	var navFixResTrig = true;

	function headNavResizeHandler(){
		if(navFixResTrig == true){
			if($w.width() < 660)
	        		$nav.removeClass('fixed');

	        navFixResTrig = false;
		    setTimeout(function(){navFixResTrig = true}, 250);
        }
  
	}

	$w.on('resize', headNavResizeHandler);
	/*===  END FIX MENU WHILE SCROLL ===*/




	/*=== ORDER SUMMARY SCROLL ===*/

	if ($('#order-summary').length > 0) {
		var $orderSummary = $('#order-summary');
		var $orderWrap = $('#order-wrap');
		var orderSumLeftPos = (($w.width() - $orderWrap.outerWidth(true) - 40) / 2) + $orderSummary.position().left;
		var orderSumTrig = true;

		function orderSummaryHandler(){
			var min = $orderSummary.scrollTop() + $orderSummary.outerHeight(true);
			var max = $orderWrap.scrollTop() + $orderWrap.outerHeight(true);

			if(orderSumTrig == true){

				if ( ($w.scrollTop() <= min) || ($w.scrollTop() >= max) ){
					$orderSummary.css({
						'position':'static'
					});
				}
				else{
					$orderSummary.css({
						'position':'fixed', 
						'top': '60px', 
						'left': orderSumLeftPos,
						'width': $orderSummary.width(),
						'z-index': 10
					});
				}

			    orderSumTrig = false;
			    setTimeout(function(){orderSumTrig = true}, 250);
		  	}
		}	

		$w.on('scroll', orderSummaryHandler);
	}
	/*===  END ORDER SUMMARY SCROLL ===*/



	/*===  CATEGORY VIEW GRID/LIST ===*/
	var oTogContainer = $('#js-category_prview');
	var oTogglers = oTogContainer.find('.icon');
	var togglersActive = 'active';
	var oPrcontainer = $('#js-category_prb');
	var oCartBtn = $('.js-cartbtn'); // for fancybox while add to cart (with options - products_grid, without - products_list)


	$.fn.cookieinit({
		cookieName: 'prview',
		cookieVal: oTogContainer.find('.'+togglersActive).data('prview'),
		getCookie: function(){
			var cookieView = $.cookie('prview');

			oPrcontainer.removeClass().addClass(cookieView);
			oTogglers.removeClass(togglersActive);
			oTogContainer.find('[data-prview ='+ cookieView +']').addClass(togglersActive);

			oCartBtn.data('cartopts', cookieView); //add to cart with options or without
		}
	});


	oTogglers.on('click', function(e){
		e.preventDefault();

		var oThis = $(this);

		if(!oThis.hasClass(togglersActive)){

			$.fn.cookieinit('update', {
				cookieName: 'prview',
				cookieVal: oThis.data('prview'),
				getCookie: function(){
					//delete all active class from togglers
					oTogglers.each(function(){
						$(this).removeClass(togglersActive);
					});

					oThis.addClass(togglersActive);
					oPrcontainer.removeClass().addClass(oThis.data('prview'));

					oCartBtn.data('cartopts', oThis.data('prview')); //add to cart with options or without
				}
			});
			
		}
	});

	/*===  end of CATEGORY VIEW GRID/LIST ===*/


	/*===  CATEGORY TAGS ===*/
	var $Tags = $('#js-tags-sidebar');
	var tagsH = 300;
	var textOpen = 'показать все теги';
	var textClose = 'скрыть теги';

	if ($Tags.length > 0) {
		if($Tags.height() > tagsH){
			$Tags
				.css({'height':tagsH, 'overflow':'hidden'})
				.after('<a id="js-tags-toogler" href="#">'+textOpen+'</a>');
		}
	}

	$d.delegate('#js-tags-toogler', 'click', function(e) {
		e.preventDefault();

		var $this = $(this);

		if($Tags.height() == tagsH){
			$Tags.css('height', 'auto');
			$this.html(textClose);
		}
		else{
			$Tags.css({'height':tagsH, 'overflow':'hidden'});
			$this.html(textOpen);
		}
	});

	/*===  end of CATEGORY TAGS ===*/

});