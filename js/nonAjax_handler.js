$(function(){
	$("#colophon").delay(1000).animate({opacity:1}, 600);
	$("#menu").delay(1000).animate({opacity:1}, 600);
	$("#content").delay(1000).animate({opacity:1}, 600);

	////////////////////////////////////////////
	// initialize
	////////////////////////////////////////////
	var $menu = $('.menu');
	var loadingFrame = 1;
	_animate_loading_ra = function(){
		$("#loadingBox_RA div").css('top', (loadingFrame * -40) + 'px');
		loadingFrame = (loadingFrame + 1) % 12;	
	}
	var loadingTimer_ra = setInterval(_animate_loading_ra, 66);
	$("#loadingBox_RA").show();
	var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
	var click_event = isMobile ? "touchstart" : "click";
	// #initialize

	// Click Event - Menu
	$menu.find('a').bind(click_event, function(){
		event.preventDefault();

		if(location.href == this.href) {
			// Click Event - re-click
			return;
		}

		// Click Event - non-ajax pages to another page
		var click_url = this.href.split('/');
		var redirect_url = this.href;
		var baseLength = click_url.length;
		var click_url_length = this.href.split('/').length;

		$("#menu").delay(200).animate({opacity:0}, 200);
		$("#colophon").delay(0).animate({opacity:0}, {
			duration: 200
		});
		$("#content").animate({height:768, opacity:0}, {
			duration: 200,
			complete: function() {
				window.location.href = redirect_url;
			}
		});

		$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
	});

	// Click Event - Logo
	$(".RALogo").bind(click_event, function(){
		event.preventDefault();

		var url = $('.RALogo>a').attr('href');
		var baseLength = url.split('/').length;
		var redirect_url = $(this).find('a').attr("href");

		if($("#content").css("height") != "0px" && baseLength <= 5)
		{
			$("#menu").fadeOut(600);
			$("#colophon").fadeOut(600);
			$("#content").animate({opacity:0}, {
				duration: 600,
				complete: function() {
					$("#content").hide();
					window.location.href = redirect_url;
				}
			});
		}
		return false;
	});

	//change searchBtn bagkground color
    $("#searchBtn").bind(click_event, function(){
    	$(this).addClass("search_open");
    	$(this).css('backgroundPosition', 'top right');

    	$(".current-menu-item").addClass("apa-current-menu");
		$(".current_page_item").addClass("apa_current_page");

    	$(".menu li").removeClass("current-menu-item current_page_item");
    });

    //
	// [convert links] ex) http://cmyk.biz/page -> http://cmyk.biz/#page
	//
	var baseLength = $('.RALogo>a').attr('href').split('/').length;

	$menu.find('a').addClass('cmyk-ajax').each(function(){
		$(this).attr('href',function(){
			var url = $(this).attr('href').split('/');
			if(url[baseLength - 1] != "contact" && url[baseLength - 1] != "in-the-press" && url[baseLength] != "newsletter") 
				url[baseLength - 1] = '#' + url[baseLength -1];

			return url.join('/');
		});	
	});

	// Large Category default 'href' modification
	$('.menu>li>a').each(function(){
		$(this).attr('href', function(){
			var url = $(this).parent().find('ul>li:first>a').attr('href');
			if(url === undefined) return this;
			else return url;
		});
	});
	// link to contact page
	$("#link_contact a").attr("href", $('.menu>li:eq(5)>a').attr('href').replace(/#/,''));
	$("#link_contact a").bind(click_event, function(){
		$(".menu li").removeClass("current-menu-item current_page_item");
		$(".menu>li:eq(5)").addClass("current-menu-item");
	});

	$("#searchBtn").mouseover(function() {
    	$(this).css("background-position", "right top");
   	}).mouseout(function(){
   		if ($(this).hasClass("search_open")) $(this).css("background-position", "right top");
   		else $(this).css("background-position", "left top");
	});
});