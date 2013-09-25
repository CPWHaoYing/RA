var currentId = "g2_patient21";

$("#g2_patient21 img").addClass("active");

$("#preLoader").css({"opacity":"0"});

var loadingFrame = 1;

_animate_loading = function(){
	$("#loadingBox div").css('top', (loadingFrame * -40) + 'px');
	loadingFrame = (loadingFrame + 1) % 12;	
}

//$("#loadingBox").hide();
var loadingTimer = setInterval(_animate_loading, 66);
$("#loadingBox").show();

$("#beforeImage img").one("load", function() {
	$("#beforeImage, #beforeText, #afterText").animate({"opacity":"1"}, 800);
	
	clearInterval(loadingTimer);
	$("#loadingBox").hide();

	currentId = "g2_patient21";
}).attr("src", templateUrl + "/img/gallery2/g2_patient21.jpg");


var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
var click_event = isMobile ? "touchstart" : "click";

$("#patientsList li").bind(click_event, function()
{
	if ($("#beforeImage").css("opacity") < 1) return;
	
	var id=$(this).attr('id');
	if (currentId == id) return;
	
	$("#beforeImage, #beforeText, #afterText").css({"opacity":"0"});

	loadingTimer = setInterval(_animate_loading, 66);
	$("#loadingBox").show();

	$("#beforeImage img").one("load", function() {

		$("#beforeImage, #beforeText, #afterText").animate({"opacity":"1"}, 800);

		clearInterval(loadingTimer);
		$("#loadingBox").hide();

		currentId = id;
	}).attr("src", templateUrl + "/img/gallery2/" + id + ".jpg");

	$(this).parent().find("img").removeClass("active");
	$(this).find("img").addClass("active");

	return false;

});

// Link to the Gallery1 Page
$("#prevArrow").bind(click_event, function(){
	var redirect = location.href.split('/');
	var baseLength = redirect.length;
	redirect[baseLength - 2] = 'gallery-1';
	var redirect_url = redirect.join('/');

	$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
	$(".menu>li:eq(2)").addClass("current-menu-item apa-current-menu");
	$(".menu>li:eq(2)>ul>li:eq(0)").addClass("current_page_item apa_current_page");

	document.location.href = redirect_url;
});






