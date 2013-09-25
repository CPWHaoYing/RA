$(function(){
	$(".main-navigation ul ul a").after("<span>|</sapn>");
	////////////////////////////////////////////
	// initialize
	////////////////////////////////////////////
	var	speed = 600;
	var moveSpeed = 300;
	var $menu = $('.menu');
	var url = $('.RALogo>a').attr('href');
	var baseLength = url.split('/').length;
	var $content = $('#content');
	var loadingFrame = 1;
	_animate_loading = function(){
		$("#loadingBox_RA div").css('top', (loadingFrame * -40) + 'px');
		loadingFrame = (loadingFrame + 1) % 12;	
	}
	var loadingTimer = setInterval(_animate_loading, 66);
	var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
	var click_event = isMobile ? "touchstart" : "click";
	var search_case = 0;
	// #initialize

	////////////////////////////////////////////
	// Common Animate Func
	// header.php - #menu, #content
	// footer.php - #colophon
	////////////////////////////////////////////
	$("#menu").delay(900).animate({opacity:1}, speed);
	$("#content").delay(900).animate({opacity:1}, speed);
	$("#loadingBox_RA").hide();
	// #Common Animate Func
	
	$("#searchBtn").click(function(){
		if($("#sequence").css("height") == undefined || $("#sequence").css("height") == "undefined" || $("#sequence").css("height") == "0px"){
			return; 
		}

		$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
		$(".menu>li:first").addClass("current-menu-item apa-current-menu");
		$(".menu>li>ul>li:first").addClass("current_page_item apa_current_page");

		var url_name = $(".menu>li>ul>li>a").attr("href").split('/');
		var url_length = $(".menu>li>ul>li>a").attr("href").split('/').length;

		location.hash = url_name[url_length-3] + "/" + url_name[url_length-2] + "/";
		search_case = 1;

		ajaxPage();	

	});
	//
	var _href = (location.href+'#');
	var _home = ($('.RALogo a').attr('href'));

	/* Delete A element for firefox bug */
	// $('.RALogo a img').attr('href', $('.RALogo a').attr('href'));
	// $('.RALogo').html($('.RALogo a img'));
	// $('.RALogo img').click(function(){
	// 	document.location.href = $(this).attr("href");
	// });
	// $('.RALogo a').remove();
	
	if(Modernizr.hashchange)
		{
		// ajax Paging function
		var ajaxPage = function() {
			// direct exception
			if(location.href.split('/')[baseLength-1] == "contact") return;
			if(location.href.split('/')[baseLength-1] == "in-the-press") return;
			if(location.href.split('/')[baseLength] == "newsletter") return;

			$("#sequence").animate({height:0}, moveSpeed);
			$content.children().fadeOut(600);

			if($("#sequence").css("height") == "0px" && baseLength <= 5 && _href != _home && location.href != _home)
			{
				$("#loadingBox_RA").delay(speed/2).fadeIn(300);
			}

			// the category style changes Sep.09.2013
			$('.menu>li>ul>li>a').each(function(){
				if(location.href.replace(/#/,'') === $(this).attr("href"))
				{
					$(".menu li").removeClass("current-menu-item current_page_item");
					$(this).parent("li").addClass("current-menu-item apa-current-menu");
					$(this).parent("li").parent("ul").parent("li").addClass("current_page_item apa_current_page");

					// for the large category click
					$(this).parent("li").children("ul").children("li:first").addClass("current-menu-item");
				}
			});
			if(location.href.replace(/#/,'') === $('.menu>li:eq(4)>a').attr('href'))
			{
				// for Dubai
				$(".menu li").removeClass("current-menu-item current_page_item");
				$('.menu>li:eq(4)').addClass("current-menu-item apa-current-menu");
			}

			$("#colophon").animate({opacity:0}, {
				duration:200,
				complete: function(){
					$.get(location.href.replace(/#/,'') + '?ajax=true', function(data) {
						var delayTime = 200;
						if(search_case==1) delayTime = 800;

						$content.html(data);
						$content.children().hide().delay(delayTime).fadeIn(speed, "swing", function () {
							if(search_case == 1) {
								$('#searchBtn').trigger(click_event);
								search_case = 0;
								$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
								$(".menu>li:first").addClass("apa-current-menu");
								$(".menu>li>ul>li:first").addClass("apa_current_page");
							}
						});

						$("#colophon").delay(600).animate({opacity:1}, 200);
						//$("#loadingBox_RA").fadeOut(100);

						// link to contact page
						$("#link_contact a").attr("href", $('.menu>li:eq(5)>a').attr('href').replace(/#/,''));
						$("#link_contact a").bind(click_event, function(){
							$(".menu li").removeClass("current-menu-item current_page_item");
							$(".menu>li:eq(5)").addClass("current-menu-item");
						});

						// link to facial aesthetic design page
						$(".link_FAD").bind(click_event, function(){
							var redirect = location.href.split('/');
							var baseLength = redirect.length;
							redirect[baseLength - 2] = 'facial-aesthetic-design';
							var redirect_url = redirect.join('/');

							$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
							$(".menu>li:eq(1)").addClass("current-menu-item apa-current-menu");
							$(".menu>li:eq(1)>ul>li:eq(2)").addClass("current_page_item apa_current_page");

							document.location.href = redirect_url;
						});

						// link to what is beauty page
						$(".link_WIB").bind(click_event, function(){
							var redirect = location.href.split('/');
							var baseLength = redirect.length;
							redirect[baseLength - 2] = 'what-is-beauty';
							var redirect_url = redirect.join('/');

							$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
							$(".menu>li:eq(1)").addClass("current-menu-item apa-current-menu");
							$(".menu>li:eq(1)>ul>li:eq(0)").addClass("current_page_item apa_current_page");

							document.location.href = redirect_url;
						});

						// link to smile make over page
						$(".link_SMO").bind(click_event, function(){
							var redirect = location.href.split('/');
							var baseLength = redirect.length;
							redirect[baseLength - 2] = 'smile-makeover';
							var redirect_url = redirect.join('/');

							$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
							$(".menu>li:eq(1)").addClass("current-menu-item apa-current-menu");
							$(".menu>li:eq(1)>ul>li:eq(3)").addClass("current_page_item apa_current_page");

							document.location.href = redirect_url;
						});


					});
				}
			});
		};

		if(location.hash)
		{	
			ajaxPage();
		}

		if(location.href != url && !/#/.test(location.href) && _href != _home) {
			var redirect = location.href.split('/');
			// search exception
			if(redirect[baseLength - 1] != "a-closer-look" && redirect[baseLength - 1] != "treatments" &&
				redirect[baseLength - 1] != "before-after" && redirect[baseLength - 1] != "dubai" )
			{
				var param = queryObj()["a"];
				if(param != undefined || param != "undefined") return;
			}
			
			// direct exception
			if(redirect[baseLength - 1] == "contact") return; 
			if(redirect[baseLength-1] == "in-the-press") return;
			if(redirect[baseLength] == 'newsletter') return;

			redirect[baseLength - 1] = '#' + redirect[baseLength - 1];
			redirect = redirect.join('/');
			location = redirect;
		}

		//
		// [convert links] ex) http://cmyk.biz/page -> http://cmyk.biz/#page
		//
		$menu.find('a').addClass('cmyk-ajax').each(function(){
			$(this).attr('href',function(){
				var url = $(this).attr('href').split('/');

				if(url[baseLength - 1] != "contact" && 
					url[baseLength - 1] != "in-the-press" && 
					url[baseLength] != "newsletter" &&
					url[baseLength-2] != 'undefined' && url[baseLength-2] != undefined
					) 
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

		// bind ajax to hashchange
		// for back buttons (use modernizr)
		$(window).on('hashchange', function() {
			// Logo Click Event
			if(location.hash == "" || location.hash == "#") {
				if($("#content").css("height") != "0px" && baseLength <= 5)
				{
					$content.children().fadeOut(speed);

				    $("#sequence").delay(400).animate({opacity: 1, height:560}, 100);
					$(".site-footer").delay(200).animate({opacity: 1});

					// the category style changes Sep.09.2013
					$(".menu li").removeClass("current-menu-item current_page_item");
					$(".menu li").removeClass("apa-current-menu apa_current_page");
					$('#searchBtn').css('backgroundPosition', 'top left');
				}
				return;
			}
			ajaxPage(location.href.replace(/#/,'') + '?ajax=true');
		});
	} else {
		// hashchange is not supported
		if(location.hash) ajaxPage();
	}

	// Click Event - re-click from sliding images
	$("#sequence").find('a').click(function(){
		if(location.href == this.href)
		{
			if($("#sequence").css("height") != "0px")
			{
				$("#sequence").animate({height:0}, {duration:moveSpeed});
				$content.children().fadeIn(speed);
			}
		}
	});



	// Click Event - non-ajax Pages [contact, in the press, newsletter]
	$menu.find('a').bind(click_event, function(){

		if(location.href == this.href) 
		{
			// Click Event - re-click
			if($("#sequence").css("height") != "0px")
			{
				$("#sequence").animate({height:0}, {duration:moveSpeed});
				$content.children().delay(moveSpeed*3).fadeIn(speed);
			}
		}

		var t = this;
		var is_nonAjax = $(this).attr('href').split('/');

		if(	is_nonAjax[baseLength-1] == "#contact" || 
			is_nonAjax[baseLength-1] == "#in-the-press" || 
			(is_nonAjax[baseLength-1] == "#a-closer-look" && is_nonAjax[baseLength] == "newsletter")
			)
		{
			$("#menu").delay(200).animate({opacity:0}, moveSpeed);
			$("#colophon").animate({opacity:0}, moveSpeed);
			$("#content").delay(1000).animate({height:768, opacity:0}, {
				duration: moveSpeed, 
				complete: function(){
					window.location.href = t.href.replace(/#/,'');
				}
			});	
		}

		// the category style changes Sep.09.2013
		$("#searchBtn").css('backgroundPosition', 'top left');
		$(".menu li").removeClass("current-menu-item current_page_item");
		$(this).parent("li").addClass("current-menu-item apa-current-menu");
		$(this).parent("li").parent("ul").parent("li").addClass("current_page_item apa_current_page");
		// for the large category click
		$(this).parent("li").children("ul").children("li:first").addClass("current-menu-item");
		
	});

    // change searchBtn bagkground color
    $("#searchBtn").click(function(){
    	if($("#search_text").is(':visible')){
    		// cmyk_search.js - Search Button Click Again event
    	}
    	else
    	{
	    	$(this).addClass("search_open");
	    	$(this).css('backgroundPosition', 'top right');

	    	$(".menu li").removeClass("apa-current-menu apa_current_page");
	    	$(".current-menu-item").addClass("apa-current-menu");
			$(".current_page_item").addClass("apa_current_page");

	    	$(".menu li").removeClass("current-menu-item current_page_item");
    	}
    });
    // #change searchBtn bagkground color

    $("#searchBtn").mouseover(function() {
    	$(this).css("background-position", "right top");
   	}).mouseout(function(){
   		if ($(this).hasClass("search_open") &&  $("#content").css("height") != "0px" ) {
   			$(this).css("background-position", "right top");
   		}
   		else $(this).css("background-position", "left top");
	});


});


function queryObj() {
    var result = {}, queryString = location.search.slice(1),
        re = /([^&=]+)=([^&]*)/g, m;

    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return result;
}


