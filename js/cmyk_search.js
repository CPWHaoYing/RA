$(function(){
	var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
	var click_event = isMobile ? "touchstart" : "click";

	$("#searchBtn").click(function(){
		if($("#sequence").css("height") != undefined && $("#sequence").css("height") != "undefined")
		{
			if($("#sequence").css("height") != "0px") { return; }
		}

		var search_form = $("#search_wrapper").html();
		var overlay_height = $("body").height();
		if (overlay_height < parseInt($(window).height())) overlay_height = parseInt($(window).height());

		if( !$("#content div").hasClass('search_bg') ){

			// background layer
			$("#content").prepend("<div class='search_bg'></div>");
			$('.search_bg').height(overlay_height);
			// insert the form box to the top of #content
			$("#content").prepend("<div id='search_input_box'>" + search_form + "</div><div id='search_text' class='search_text'>Begin typing to search.</div>");

			$("#content .search-field").attr('id', 'search_input');
			$("#search_input").focus();

			$("#search_input").keyup(function(e){
				$(this).val(($(this).val().toUpperCase()));
			});

			// To Prevent Empty Search
			$(".search-form").submit(function(e){
				var input_val = $("#search_input").val().replace(/\s/g, "").length;
				if(input_val <= 0) {
					e.preventDefault();
				}
			});

			$(".search_bg").click(function(){
				$("#search_input_box").fadeOut();
				$("#search_text").fadeOut();
				$(".search_bg").fadeOut();

				$("#searchBtn").removeClass("search_open");

				//change searchBtn bagkground color
				if ($("#result_wrap").length != 0) {
				}
				else{
				    $("#searchBtn").css('backgroundPosition', 'top left');
				    $(".apa-current-menu").addClass("current-menu-item");
					$(".apa_current_page").addClass("current_page_item");
					
			    }

			});

			$(".search_bg").animate({opacity:0.87}, 500);
			$("#search_input_box").animate({opacity:1}, 500);
			$("#search_text").animate({opacity:1}, 500);
		}
		else if($("#search_text").is(':visible')){
			// Search Button Click Again - Close Sep.24.2013

			$("#search_input_box").fadeOut();
			$("#search_text").fadeOut();
			$(".search_bg").fadeOut();

			$("#searchBtn").removeClass("search_open");

			//change searchBtn bagkground color
			if ($("#result_wrap").length != 0) {
			}
			else{
			    $("#searchBtn").css('backgroundPosition', 'top left');
			    $(".apa-current-menu").addClass("current-menu-item");
				$(".apa_current_page").addClass("current_page_item");
				
		    }

			return;
		}

		$(".search_bg").fadeIn();
		$("#search_input_box").fadeIn();
		$("#search_text").fadeIn();
		$("#search_input").focus();

	});


});

