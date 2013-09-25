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
		$(".zoomImage").show();
		$("#main_contents").hide();
		$(".main_m").css({"height":"965px"});
		return false;
	}
	select_index = $(this).index();

	$(".zoomImage").show();
	$("#main_contents").hide();
	$(".main_m").css({"height":"965px"});

	var id=$(this).attr('id');

	$("#beforeImage").delay(200).css({"opacity":"0"});

	// show loading Timer
	loadingTimer = setInterval(_animate_loading, 66);
	$("#loadingBox").show();

	$("#beforeImage img").one("load", function() {

		$("#beforeImage").animate({"opacity":"1"}, 800);

		clearInterval(loadingTimer);
		$("#loadingBox").hide();

		$(document.body).animate({'scrollTop':277});

	}).attr("src", templateUrl + "/img/gallery2/" + id + ".jpg");

});

// B&A Sliding Page -> Default Page
$("#selected_touchArea, .title").click(function(){
	$("#main_contents").show();
	$(".zoomImage").hide();
	$(".main_m").css({"height":"1000px"});
});

// Previous & Next Button Click Event
$("#previous_touchArea").click(function(){
	if (select_index === 0) select_index = 18;
	$(".content_select li:eq(" + (select_index-1) + ")").click();
});
$("#next_touchArea").click(function(){
	if (select_index === 17) select_index = -1;
	$(".content_select li:eq(" + (select_index+1) + ")").click();
});

$("#sub_touchArea").click(function(){
	var redirect = location.href.split('/');
	var baseLength = redirect.length;
	redirect[baseLength - 2] = 'gallery-1';
	var redirect_url = redirect.join('/');

	document.location.href = redirect_url;
});

$('.consulation').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
      });

}); //$(function(){...


