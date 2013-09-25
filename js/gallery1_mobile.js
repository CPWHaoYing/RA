$(function(){

// for debug on PCs
var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
var click_event = isMobile ? "touchstart" : "click";
var select_index = 1000;
var loadingFrame = 1;
_animate_loading = function(){
	$("#loadingBox div").css('top', (loadingFrame * -40) + 'px');
	loadingFrame = (loadingFrame + 1) % 12;	
}

$("#loadingBox").hide();

$(".content_select li").click(function(){
	if($(this).index() == select_index) {
		$(".beforeAfter").show();
		$("#main_contents").hide();
		$(".main_m").css({"height":"965px"});
		return false;
	}
	select_index = $(this).index();

	$(".beforeAfter").show();
	$("#main_contents").hide();
	$(".main_m").css({"height":"965px"});


	var id=$(this).attr('id');

	// show loading Timer
	loadingTimer = setInterval(_animate_loading, 66);
	$("#loadingBox").show();

	// show loading_bg
	$("#beforeDiv").before("<div class='loading_bg'></div>");
	$(".loading_bg").css({"opacity":"1"});

	$("#beforeAfterDrag, #beforeDiv, #afterDiv").delay(200).css({"opacity":"0"});

	$("#beforeImage").one("load", function() {

		$("#afterImage").one("load", function() {

			$("#beforeAfterDrag, #beforeDiv, #afterDiv").animate({"opacity":"1"}, 400);
			$(".loading_bg").delay(200).fadeOut(function(){$(this).remove();});

			clearInterval(loadingTimer);
			$("#loadingBox").hide();

			$("#beforeAfterDrag").css({"left":"276"});
			$("#beforeDiv").css({"width":"291"});

			$(document.body).animate({'scrollTop':277});
			
		}).attr("src", templateUrl + "/img/gallery1/" + id + "a.jpg");

	}).attr("src", templateUrl + "/img/gallery1/" + id + "b.jpg");

});

// B&A Sliding Page -> Default Page
$("#selected_touchArea, .title").click(function(){
	$("#main_contents").show();
	$(".beforeAfter").hide();
	$(".main_m").css({"height":"1000px"});
});

// Previous & Next Button Click Event
$("#previous_touchArea").click(function(){
	if (select_index === 0) select_index = 20;
	$(".content_select li:eq(" + (select_index-1) + ")").click();
});
$("#next_touchArea").click(function(){
	if (select_index === 19) select_index = -1;
	$(".content_select li:eq(" + (select_index+1) + ")").click();
});

$("#sub_touchArea").click(function(){
	var redirect = location.href.split('/');
	var baseLength = redirect.length;
	redirect[baseLength - 2] = 'gallery-2';
	var redirect_url = redirect.join('/');

	document.location.href = redirect_url;
});

$("#beforeDiv, #afterDiv").click(function(e){
		dragbarAnimateStop();
		var move_x;
		move_x = (e.offsetX==undefined) ? e.pageX-$('#beforeDiv').offset().left : e.offsetX;

		$("#beforeAfterDrag").animate({"left":move_x});
		$("#beforeDiv").animate({"width":move_x + 13});
	});

// Before & After
$("#beforeAfterDrag").draggable({containment:$(".beforeAfter_wrapper"), scroll: false, drag:drag, stop:dragbarAnimate});

function drag()
{
	dragbarAnimateStop();

	$("#beforeDiv").width(parseInt($("#beforeAfterDrag").css('left'))+14);
}


function dragbarAnimate(){
	$("#beforeDiv, #beforeAfterDrag").css('transition', 'all 0.5s ease-out')
	  	.css('-webkit-transition', 'all 0.5s ease-out')
	  	.css('-moz-transition', 'all 0.5s ease-out')
	  	.css('-o-transition', 'all 0.5s ease-out')
	  	.css('-ms-transition', 'all 0.5s ease-out');
}

function dragbarAnimateStop(){
	$("#beforeDiv, #beforeAfterDrag").css({
		"transition":"none",
		"-webkit-transition": "none",
		"-moz-transition": "none",
		"-o-transition": "none",
		"-ms-transition": "none"
	});
}

$('.consulation').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
      });

}); //$(function(){...


