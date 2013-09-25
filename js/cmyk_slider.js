// initialize
var current_Lcategory = -1;
var current_Mcategory = -1;
var sliderWidth = 0;

jQuery( document ).ready( function( $ ) {

	$(".main-navigation ul ul li").each(function() {
		$(this).attr("link", $(this).children("a").attr("href"));
	});
	$(".main-navigation ul li a").attr("href", "#");

	$(".main-navigation ul ul li a").click(function(){
		var temp_url = $(this).parent("li").attr("class").split("page-item-")[1];
		var submenuCount = $(this).parent("li").parent("ul").children("li").length;
		

		var click_Lcategory = $(this).parent().parent().parent().index();
		var click_Mcategory = $(this).parent().index();

		// Exception for - A CLOSE LOOK : Blog, Newsletter
		if ( submenuCount > 3 ) submenuCount = 3;
		if ( click_Mcategory > 2) return;

		console.log("current_Mcategory : " + current_Mcategory + " / click_Mcategory : " + click_Mcategory);

		if (current_Mcategory == click_Mcategory && current_Lcategory == click_Lcategory) return;
		else if(current_Lcategory != click_Lcategory && current_Lcategory != -1) 
		{ 
			// Select to another Large Category - delete current divs (content_0, content_1...)
			$("#contentWrapper div").remove();
			return;
		}

		if (current_Mcategory == -1 && ((current_Lcategory == click_Lcategory) || current_Lcategory == -1))
		{
			for(var k=0; k<submenuCount; k++) 
			{
				$("#contentWrapper").append("<div id='content_"+ k +"' style='position:relative; width:1024px; margin:0 auto; float:left;'></div>");
				var temp_url = $(this).parent("li").parent("ul").children("li:eq(" + k + ")").attr("link");
				innerHTML(k, temp_url);
			}
		}

		var totalWidth = 1024 * submenuCount;
		$("#contentWrapper").css({"width": totalWidth});

		if (current_Mcategory == -1) sliderWidth = -(1024*(click_Mcategory));
		else if (current_Mcategory < click_Mcategory) sliderWidth = sliderWidth -(1024*(click_Mcategory-current_Mcategory));
		else if (current_Mcategory > click_Mcategory) sliderWidth = sliderWidth + 1024*(current_Mcategory-click_Mcategory);

		if (current_Mcategory == -1){
			$("#contentWrapper").css({"opacity":0});
			$("#contentWrapper").delay(200).animate({"opacity":1}, 1200);
			$("#contentWrapper").css({"marginLeft":sliderWidth});
		}
		else
			$("#contentWrapper").animate({marginLeft:sliderWidth}, 1200);
		
		current_Lcategory = click_Lcategory;
		current_Mcategory = click_Mcategory;

	});

} );


function innerHTML(divNo, temp_url){
	$.ajax({
		type: "POST",
		url: temp_url,
		success: function(data)
		{
			$("#content_" + divNo).html(data);
			console.log("div : content_" + divNo + " / url_pageNo : " + url);
		},
		error: function()
		{
			alert("error");
		}
	});
}