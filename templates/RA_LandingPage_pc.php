
<link rel="stylesheet" type="text/css" media="screen" href="<?php bloginfo('stylesheet_directory'); ?>/css/ra_sequencejs.css" />

<div id="sequence" style="height:0px;">

	<ul class="sequence-canvas" style="margin: 0;">
		<li class="animate-in">
			<div class="info">
				<div class="h2ex">LEADING AESTHETIC DENTAL PRACTICE</div>
				<div class="fix_img">
					<a href="#">
						<img class="button" id="meet_us_btn" src="<?php bloginfo('stylesheet_directory'); ?>/img/button/meet_us.png" alt="Meet Us" />
					</a>
				</div>
			</div>
			<img class="sky" src="<?php bloginfo('stylesheet_directory'); ?>/img/landingPage/landing_01.jpg" alt="LEADING AESTHETIC DENTAL PRACTICE" />
		</li>

		<li>
			<div class="info">
				<div class="h2ex">THE MAKING OF A SMILE</div>
				<div class="fix_img">
					<a href="#">
						<img class="button" id="read_more" src="<?php bloginfo('stylesheet_directory'); ?>/img/button/read_more.png" alt="Read More" />
					</a>
				</div>
			</div>
			<img class="sky" src="<?php bloginfo('stylesheet_directory'); ?>/img/landingPage/landing_02.jpg" alt="THE MAKING OF A SMILE" />
		</li>
		<li>
			<div class="info">
				<div class="h2ex">APA AESTHETIC DUBAI</div>
				<div class="fix_img">
					<a href="#">
						<img class="button" id="about" src="<?php bloginfo('stylesheet_directory'); ?>/img/button/about.png" alt="About" />
					</a>
				</div>
			</div>
			<img class="sky" src="<?php bloginfo('stylesheet_directory'); ?>/img/landingPage/landing_04.jpg" alt="APA AESTHETIC DUBAI" />
		</li>
		
		<li>
			<div class="info">
				<div class="h2ex">BEFORE & AFTER</div>
				<div class="fix_img">
					<a href="#">
						<img class="button" id="take_a_look" src="<?php bloginfo('stylesheet_directory'); ?>/img/button/take_a_look.png" alt="Take a Look" />
					</a>
				</div>
			</div>
			<img class="sky" src="<?php bloginfo('stylesheet_directory'); ?>/img/landingPage/landing_03.jpg" alt="BEFORE AND AFTER" />
		</li>

	</ul>

</div>

<?php if (!$_GET['ajax']) get_header();?>

<?php if (!$_GET['ajax']) get_footer();?>

<script type="text/javascript">
$(document).ready(function(){
	var baseLength = location.href.split('/').length;
	var url = location.href.split('/')[baseLength - 3];

	var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
	var click_event = isMobile ? "touchstart" : "click";

	var href = $('.menu>li>ul:eq(0)>li:first>a').attr('href');

	$("#sequence>ul>li:eq(0) a").attr("href", $('.menu>li:eq(0)>ul>li:eq(0)>a').attr('href'));	
	$("#sequence>ul>li:eq(1) a").attr("href", $('.menu>li:eq(1)>ul>li:eq(1)>a').attr('href'));
	$("#sequence>ul>li:eq(3) a").attr("href", $('.menu>li:eq(2)>ul>li:eq(0)>a').attr('href'));
	$("#sequence>ul>li:eq(2) a").attr("href", $('.menu>li:eq(4)>a').attr('href'));
	
	$("#sequence>ul>li:eq(0) .fix_img").click(function(){
		$(".menu li").removeClass("current-menu-item current_page_item");
		$(".menu>li:eq(0)").addClass("current-menu-item");
		$(".menu>li:eq(0)>ul>li:eq(0)").addClass("current_page_item");

		document.location.href = $(this).find('a').attr('href');
	});
	$("#sequence>ul>li:eq(1) .fix_img").click(function(){
		$(".menu li").removeClass("current-menu-item current_page_item");
		$(".menu>li:eq(1)").addClass("current-menu-item");
		$(".menu>li:eq(1)>ul>li:eq(1)").addClass("current_page_item");

		document.location.href = $(this).find('a').attr('href');
	});
	$("#sequence>ul>li:eq(3) .fix_img").click(function(){
		$(".menu li").removeClass("current-menu-item current_page_item");
		$(".menu>li:eq(2)").addClass("current-menu-item");
		$(".menu>li:eq(2)>ul>li:eq(0)").addClass("current_page_item");

		document.location.href = $(this).find('a').attr('href');
	});
	$("#sequence>ul>li:eq(2) .fix_img").click(function(){
		$(".menu li").removeClass("current-menu-item current_page_item");
		$(".menu>li:eq(4)").addClass("current-menu-item");

		document.location.href = $(this).find('a').attr('href');
	});

	$(window).load(function(){	
		$("#loadingBox_RA").hide();	
		if($("#content").css("height") == "0px" && baseLength <= 5)
			// && url != "a-closer-look" && url != "#a-closer-look"
			// && url != "contact" && url != "#contact"
			// && url != "in-the-press" && url != "#in-the-press"
			// && url != "before-after" && url != "#before-after"
		{
		    $("#sequence").delay(30).animate({opacity: 1, height:560}, 100);
			$(".site-footer").delay(200).animate({opacity: 1}, 800);

		}

		if ( $.browser.msie ) {
			$("#sequence h2").css({"line-height":"0.2em"});
		}

		
		//if(location.href.split('/')[location.href.split('/').length-2] == "");
	});


});

</script>