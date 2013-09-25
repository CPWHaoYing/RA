<?php
/*
Template Name: Rosenthal Institute NYU PC
*/
?>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/rosenthal_institute_nyu.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>
<div class="wrapper">
<div class="main" style="opacity:0;">

    <div class="ra_title_box">
    	<div class="ra_title">
    		the rosenthal <br/>institute for<br/>aesthetic dentistry<br/>at nyu
    	</div>
    	<img src="#" id="img_load" />
    </div>
    <div class="about_part">
    	<div class="about_text">
	    	In November 2002, New York University (NYU) officially dedicated the <br/>
	    	Rosenthal Institute for Aesthetic Dentistry in honor of Dr. Larry Rosenthal, <br/>
	    	a graduate of the NYU College of Dentistry and an internationally renowned <br/>
	    	pioneer in his field. The Rosenthal Institute is the nation’s first university-<br/>
	    	based program wholly dedicated to fostering continuing education, research, <br/>
	    	and patient care in current and emerging techniques in aesthetic dentistry.<br/><br/>
			The Rosenthal Institute also houses the NYU College of Dentistry’s <br/>
			continuing education program, which attracts more than 4,000 dentists from <br/>
			more than 20 countries annually, making it the most far-reaching program of <br/>
			its kind in the world.  <br/><br/>
			The Rosenthal Institute has worldwide affiliations as well as those within <br/>
			its own neighborhood. One of it’s most important features is that it enables <br/>
			needy patients to receive aesthetic dental procedures at a reduced cost.<br/><br/>
		</div>
		
    </div>
    <div class="about_right">
    	<img src="<?php bloginfo('stylesheet_directory'); ?>/img/a_closer_look/rosenthal_institute/ra_line.png" />
    	<div class="right_text_a">
			“I am very grateful to Dr. Rosenthal for his commitment <br/>
			to the creation of the Institute for Aesthetic Dentistry.”
		</div>
		<div class="right_text_b">
			—Dr. Michael C. Alfano,  <span class="right_text_c">Dean of the NYU College of Dentistry</span>
		</div>
	</div>
</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
    //$(".main").animate({opacity:1}, 1000);

    $("#img_load").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 1000);
    }).attr("src", templateUrl + "/img/a_closer_look/rosenthal_institute/rosenthal_institute_01.jpg");
});
</script>