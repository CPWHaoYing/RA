$(function(){
	// for Table-PC Navi Menu
	$(".main-navigation").addClass("main-navigation-tablet");
	$(".main-navigation").removeClass("main-navigation");
	$('.current_page_item').find("ul").show();

	// Large Category Click Event for Tablet
	$(".main-navigation-tablet>div>ul>li>a").click(function(){
		$(".sub-menu").hide();
	 	$(this).next().show();

	 	document.location.href = $(this).attr('href');
	});

	// Large Category Click Event for Tablet #2
	$(".main-navigation-tablet>div>ul>li").click(function(){
		$(".sub-menu").hide();
	 	$(this).children('ul').show();

	 	document.location.href = $(this).find('a').attr('href');
	});

	// Middle Category Click Event for Tablet
	$(".main-navigation-tablet>div>ul>li>ul>li>a").click(function(){
		$(this).parent().siblings().removeClass('apa-current-menu, current-menu-item');
		$(this).parent().addClass('apa-current-menu, current-menu-item');

		if ($(this).attr('target') != "_blank")
		{
			document.location.href = $(this).attr('href');
		}
	});

	// Middle Category Click Event for Tablet #2
	$(".main-navigation-tablet>div>ul>li>ul>li").click(function(){
		$(this).siblings().removeClass('apa-current-menu, current-menu-item');
		$(this).addClass('apa-current-menu, current-menu-item');

		if ($(this).find('a').attr('target') != "_blank")
		{
			document.location.href = $(this).find('a').attr('href');
		}
			
	});

	$(".RALogo").click(function(){
		$(".sub-menu").hide();
	});

});
