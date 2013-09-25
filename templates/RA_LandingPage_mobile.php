<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/ra_sequencejs_mobile.css" />

<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<div id="sequence">
	<ul class="sequence-canvas" style="margin: 0;">
		<li class="animate-in" id="main_bg_m">
			<img class="sky" id="main_bg_img" src="#" alt="LEADING AESTHETIC DENTAL PRACTICE" />
			<img class="logo_layer" src="<?php bloginfo('stylesheet_directory'); ?>/img/landingPage/landing_logo_m.png" alt="LEADING AESTHETIC DENTAL PRACTICE" />
		</li>
	</ul>
	&nbsp;
</div>	
<?php get_header('mobile');?>
<?php get_footer('mobile');?>


<script type="text/javascript">
$(function(){
	$("#masthead").hide();

	$("#main_bg_img").one("load", function() {
		$("#main_bg_m").animate({'opacity': 1});
	}).attr("src", templateUrl + "/img/landingPage/landing_01_m.jpg");


});
</script>