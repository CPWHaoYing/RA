$(function(){
	
	// fastclick.js append
	var fastclick_js = '<script type="text/javascript" src="' + templateUrl +'/js/fastclick.js"></script>';
	var href_url = location.href.split('/');
	var href_length = href_url.length;
	if(href_url[href_length-2] != "the-making-of-a-smile" && href_url[href_length-2] != "client-testimonials" ){ 
		$(fastclick_js).appendTo(document.body);
	}
	// #fastclick.js append

	// SNS Footer Image Styling
	//$(".mr_social_sharing:eq(0) img").attr("src", templateUrl + "/img/button/sns_01_mobile.png");
	//$(".mr_social_sharing:eq(1) img").attr("src", templateUrl + "/img/button/sns_02_mobile.png");
	// # SNS Footer Image Styling

	// Landing Page Sequence
    // var options = {
    //     autoPlay: true,
    //     nextButton: false,
    //     prevButton: false,
    //     preloader: false,
    //     navigationSkip: false,
    //     autoPlayDirection: 1
    // };
    // var sequence = $("#sequence").sequence(options).data("sequence");

    // if(sequence != undefined && sequence != 'undefined' && sequence != void 0)
    // {
    //     sequence.afterLoaded = function(){
            
    //     }
    // }
    // #Landing Page Sequence

    // Fast Click for click events
	window.addEventListener('load', function() {
    	new FastClick(document.body);
	}, false);
	// #Fast Click for click events

	// Menu Initialize
	$('#site-navigation').removeClass('main-navigation');
	$('.sub-menu').removeClass('sub-menu');
	// #Menu Initialize

	// Menu-Navigation Sliding Event
	var allPanels = $('#menu-mobile > li > ul').hide();
    
	$('#menu-mobile > li > ul > li').click(function(){
		if ($(this).children('a').attr('target')=="_blank")
			window.open($(this).children('a').attr('href'));
		else document.location.href = $(this).children('a').attr('href');
		return false;
	});

	$('#menu-mobile > li').click(function() {
		if ($(this).children('a').is(':only-child')){
			document.location.href = $(this).children('a').attr('href');
			return true;
		}
		else if(!$(this).children('ul').is(':visible')){
			allPanels.slideUp();
    		$(this).children('ul').slideDown();
    	}
    	else {
    		allPanels.slideUp();
    	}

    	return false;
  	});
  	// #Menu-Navigation Sliding Event

	// submenu -> Shows MENU Icon
  	if ($("#site-navigation").not(':visible')) 
  	{
  		$("#menuBtn_m").show();
  	}

  	// landing page -> Sliding Images Click Event
  	$("#sequence img").click(function(){
		$("#sequence").hide();
		$("#masthead").show();
		$("#navi_m").show();
		$("#menuBtn_m").hide();
	});

  	// submenu -> Menu Button Click Event
  	$("#menuBtn_touchArea").click(function(){
  		// Search result page -> Menu
  		$("#searchBtn_m").css({"background-position":"left top"});

  		$('head meta[name=viewport]').remove();
	    $('head').prepend('<meta name="viewport" content="width=640px, minimum-scale=0.5, maximum-scale=1, user-scalable=0.5" />');

  		if ($(".search_bg_m").is(":visible")) {
  			hideSearchArea();
  		}
  		$("#content_m").hide();
  		$("#navi_m").show();
  		$("#menuBtn_m").hide();
  	});
  	
  	// pages -> Search Button Click Event
  	$("#searchBtn_touchArea").click(function(){

  		if ($(".search_bg_m").is(":visible")) {
  			hideSearchArea();
  			return false;
  		}
  		$("#searchBtn_m").css({"background-position":"right top"});

  		var search_form = $("#search_wrapper").html();
  		var overlay_height = $("body").height();
  		if (overlay_height < parseInt($(window).height())) overlay_height = parseInt($(window).height());

  		$("#header_buttons").prepend('<div id="empty_touchArea"></div>');

  		if( !$("#page_m div").hasClass('search_bg_m') ){
  			// background layer
			$("#page_m #masthead").append("<div class='search_bg_m'></div>");
			$('.search_bg_m').height(overlay_height);
			// insert the form box to the top of #content_m
			$("#page_m").prepend("<div id='search_input_box_m'>" + search_form + "</div><div id='search_text_m' class='search_text_m'>Begin typing to search.</div>");
			$("#page_m .search-field").attr('id', 'search_input_m');

			$("#search_input_m").replaceWith('<textarea id="search_input_m" class="searchfield" placeholder value name="s" rows="2" title="Search for:"></textarea>');
			//$("#search_input_m").scrollTop(2);
			$("#search_input_m").focus();
			$("#search_input_m").keyup(function(e){
				$(this).val(($(this).val().toUpperCase()));

				if((e.keyCode || e.which) == 13){
					$("#search_input_box_m form").submit();
				}
			});

			$(".search_bg_m, #empty_touchArea").click(function(){
				hideSearchArea();
				return false;
			});


			// To Prevent Empty Search
			$(".search-form").submit(function(e){
				var input_val = $("#search_input_m").val().replace(/\s/g, "").length;
				if(input_val <= 0) {
					e.preventDefault();
				}
			});

			$(".search_bg_m").animate({opacity:0.87}, 500);
			$("#search_input_box_m").animate({opacity:1}, 500);
			$("#search_text_m").animate({opacity:1}, 500);
  		}
  		else {
  			$(".search_bg_m, #empty_touchArea").click(function(){
				hideSearchArea();
				return false;
			});
  		}
  		

  		$(".search_bg_m").fadeIn();
		$("#search_input_box_m").fadeIn();
		$("#search_text_m").fadeIn();

		$("#search_input_m").focus();
  	});
	
	

});

function hideSearchArea(){
	var is_search_page = window.getParameterByName("s");
	if((is_search_page == null || is_search_page == undefined) || $('#site-navigation').is(":visible"))
		$("#searchBtn_m").css({"background-position":"left top"});
	$("#search_input_box_m").fadeOut();
	$("#search_text_m").fadeOut();
	$(".search_bg_m").fadeOut();
	$("#search_input_m").val("");
	$("#empty_touchArea").remove();
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
