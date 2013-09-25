<?php
/*
Template Name: Concierge
*/
?>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/concierge.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>
<div class="wrapper">
<div class="main" style="opacity:0;">
	<img id="background_image" src="#" style="display:none;"/>
    <div class="title_box">
    	<div class="title">CONCIERGE<br/>SERVICE</div>
    </div>

    <div class="about_part">
	    <div class="about_text_left">
	    	<div id="subtitle_box">
	    		Your Comfort Is Our <br/>
	    		Top Priority, Always <br/>
	    	</div>
	    	<div class="line">
	    		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/a_closer_look/concierge/concierge_line.png" />
	    	</div>
    		<div class="subtitle_under_box">
    			QUINTESSENTIALLY <br/>
    			Lorraine Wile  212 206.6633 <br/>
    			<a href="http://www.quintessentially.com/" target="_blank">
    				<div id="visit_site"></div>
    			</a>
    		</div>
	    	<div class="line">
	    		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/a_closer_look/concierge/concierge_line.png" class="link"/>
	    	</div>
    		<div class="subtitle_under_box_b">
    			RECOMMENDATIONS FOR <br/>
    			Lodging, spa, arts & Culture<br/>
    			<a href="<?php bloginfo('stylesheet_directory'); ?>/pdf/RAGrp_Recommendations.pdf" target="_blank">
    				<div id="download"></div>
    			</a>
    		</div>
	    	<div class="line">
	    		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/a_closer_look/concierge/concierge_line.png" />
	    	</div>
	    	<div class="about_text_right">
	    		Rosenthal Apa Group takes pride in <br/>
	    		making each and every visit effortless for <br/>
	    		you. We work closely with neighboring <br/>
	    		businesses that subscribe to strict <br/>
	    		standards of service excellence. Whether <br/>
	    		you are looking for a place to stay or eat <br/>
	    		nearby, or need an activity to occupy your <br/>
	    		friends or family, these businesses offer <br/>
	    		convenience and wonderful hospitality.<br/><br/>

				In addition, Rosenthal Apa Group has <br/>
				partnered with Quintessentially, a luxury <br/>
				lifestyle group, private members’ club, <br/>
				and 24-hour concierge service. With <br/>
				offices in almost every major destination <br/>
				and thousands of suppliers worldwide, <br/>
				Quintessentially can hand clients the <br/>
				virtual keys to any city. No matter where <br/>
				they are in the world, clients can use <br/>
				Quintessentially 24 hours a day, 365 days <br/>
				a year, for all of their needs—no matter <br/>
				how difficult or extraordinary they may be. <br/>
				Rosenthal Apa Group clientele can indulge <br/>
				in this wonderful lifestyle service for free. 
	    	</div>
    </div>
</div>
</div>
<script type="text/javascript">
$(document).ready(function() {

    var background_image_url = templateUrl + '/img/a_closer_look/concierge/concierge_bg.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 1000);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);
    
});
</script>

