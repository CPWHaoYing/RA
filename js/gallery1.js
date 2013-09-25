var currentId = "g1_patient1";

dragbarAnimate();
$("#g1_patient1 img").addClass("activeFace");

var loadingFrame = 1;
_animate_loading = function(){
	$("#loadingBox div").css('top', (loadingFrame * -40) + 'px');
	loadingFrame = (loadingFrame + 1) % 12;	
}

//$("#loadingBox").hide();

$("#beforeImage").one("load", function() {

	$("#afterImage").one("load", function() {

		$("#beforeAfterDrag, #beforeDiv, #afterDiv").animate({"opacity":"1"}, 400);
		$(".loading_bg").delay(200).fadeOut(function(){$(this).remove();});
		//$("#loadingBox").hide();

		if (isMobile)
		{
			$("#beforeAfterDrag").css({"left":"172"});
			$("#beforeDiv").css({"width":"185"});
		}
		
	}).attr("src", templateUrl + "/img/gallery1/g1_patient1a.jpg");

}).attr("src", templateUrl + "/img/gallery1/g1_patient1b.jpg");

if (!isMobile)
{
	$("#beforeAfterDrag").animate({"left":"172"});
	$("#beforeDiv").animate({"width":"185"});
}
else {
	$("#beforeAfterDrag").css({"left":"172"});
	$("#beforeDiv").css({"width":"185"});
}

var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
var click_event = isMobile ? "touchstart" : "click";

$("#BA_face_select li").bind(click_event, function()
{
	if ($("#beforeDiv").css("opacity") < 1) return;
	var id=$(this).attr('id');
	if (currentId == id) return;

	loadingTimer = setInterval(_animate_loading, 66);
	$("#loadingBox").show();

	$("#beforeDiv").before("<div class='loading_bg'></div>");
	$(".loading_bg").css({"opacity":"1"});
	
	$("#beforeAfterDrag, #beforeDiv, #afterDiv").delay(200).css({"opacity":"0"});

	$("#beforeImage").one("load", function() {

		$("#afterImage").one("load", function() {

			$("#beforeAfterDrag, #beforeDiv, #afterDiv").animate({"opacity":"1"}, 400);
			$(".loading_bg").delay(200).fadeOut(function(){$(this).remove();});
			currentId = id;

			clearInterval(loadingTimer);
			$("#loadingBox").hide();

			if (isMobile)
			{
				$("#beforeAfterDrag").css({"left":"172"});
				$("#beforeDiv").css({"width":"185"});
			}
			
		}).attr("src", templateUrl + "/img/gallery1/" + id + "a.jpg");

	}).attr("src", templateUrl + "/img/gallery1/" + id + "b.jpg");

	$(this).parent().find("img").removeClass("activeFace");
	$(this).find("img").addClass("activeFace");

	return false;
});

// Before & After
$("#beforeAfterDrag").draggable({containment:$(".beforeAfter"), drag:drag, stop:dragbarAnimate});
function drag()
{
	dragbarAnimateStop();

	$("#beforeDiv").width(parseInt($("#beforeAfterDrag").css('left'))+14);
}



if (!isMobile)
{
	$("#beforeDiv, #afterDiv").bind(click_event, function(e){
		dragbarAnimateStop();
		var move_x;
		move_x = (e.offsetX==undefined) ? e.pageX-$('#beforeDiv').offset().left : e.offsetX;

		$("#beforeAfterDrag").animate({"left":move_x});
		$("#beforeDiv").animate({"width":move_x + 13});
	});
}
else
{
	$("#beforeDiv, #afterDiv").on({'touchstart': function(e){
		dragbarAnimate();
		var move_x = e.originalEvent.layerX;

		$("#beforeAfterDrag").css({"left":move_x});		
		$("#beforeDiv").css({"width":move_x + 13});
		}
	});

}

// Link to the Gallery2 Page
$("#nextArrow").bind(click_event, function(){
	var redirect = location.href.split('/');
	var baseLength = redirect.length;
	redirect[baseLength - 2] = 'gallery-2';
	var redirect_url = redirect.join('/');

	$(".menu li").removeClass("current-menu-item current_page_item apa-current-menu apa_current_page");
	$(".menu>li:eq(2)").addClass("current-menu-item apa-current-menu");
	$(".menu>li:eq(2)>ul>li:eq(1)").addClass("current_page_item apa_current_page");

	document.location.href = redirect_url;
});

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


