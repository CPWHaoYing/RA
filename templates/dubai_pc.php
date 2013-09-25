<?php
/*
Template Name: Dubai PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/dubai.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="main cf" style="opacity:0;">
    <img id="background_image" src="#" style="display:none;"/>
	<div class="title">OUR DUBAI PRACTICE</div>
	<div class="text_area">
		<div class="text_wrap">
			<div class="left_text_wrap">
				<div class="left_01">
					Dr. Apa launched Apa Aesthetic, the Dubai</br>
					branch of the Rosenthal Apa Group, in</br>
					2008, just before the economic downturn.</br>
					Despite the challenges of opening</br>
                    a business in a foreign country and during</br>
                    ongoing market turmoil, the branch has</br>
                    grown and flourished into one of the most</br>
                    successful and highly regarded providers</br>
                    of aesthetic dentistry in the area.</br></br>
				</div>
				<div class="divide_line"></div>
				<div class="left_02">
                    Apa Aesthetic
				</div>
				<div id="address"class="left_01">
                    VILLA NO. 1016, AL WASL ROAD,</br> 
                    UMM SUQEIM 1</br>
                    DUBAI (P.O.BOX 213 720 DUBAI) UAE</br>
                    T 971.4.394.9433
				</div>
				    <div id="link_contact">
                        <a href="#"><div class="consulation"></div></a>
                    </div>
			</div>

            <div class="right_text_wrap">
            	<div class="right_01">
            		HOW IT WORKS
            	</div>
            	<div class="left_01">
            		Dr. Apa oversees the Dubai branch and</br>
            		travels back and forth three times a</br>
            		year to consult with clients and perform</br>
            		procedures.</br></br>
                    The team aims to take quick, efficient trips</br>
                    servicing 10 to 11 patients each time. The</br>
                    schedule is exhilarating and begins with</br>
                    an 11pm flight to Dubai on a Thursday.</br>
                    They arrive Friday, begin work Saturday</br>
                    and work through Monday. On Tuesday,</br>
                    clients’ cases are flown back to New York</br>
                    for crafting by an expert ceramist. The</br>
                    final products reach Dubai Friday and are</br>
                    inserted  over the weekend. The team</br>
                    returns to New York at 7am on Monday,</br>
                    ready to serve its New York clientele.</br></br> 
            	</div>
            	<div class="right_01">
            		WHAT’S NEXT?
            	</div>
            	<div class="left_01">
            		The Dubai branch is the first of many</br> 
            		clinics Dr. Apa hopes to open around the</br> 
            		world. It is his mission to educate and</br> 
            		elevate the level of dental healthcare</br> 
            		worldwide.
            	</div>
           
            </div>
		</div>		
	</div>
</div>

<script type="text/javascript">
$(document).ready(function() {
    
    var background_image_url = templateUrl + '/img/dubai/dubai_bg.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 500);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

});
</script>