<?php
/*
Template Name: Smile Make Over PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/smile_make_over.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="main cf">
	<div class="image_area">
		<div class="title">ROSENTHAL APA SMILE MAKEOVER</div>
		<img id="background_image" src="#" style="display:none;"/>
		<div class="img_01"></div>
	</div>

	<div class="text_area">
		<div class="text_wrap">
			<div class="left_text_wrap">
			   <div class="left_01">
					Refresh your entire look with a Rosenthal</br>
					Apa Group Cosmetic Smile Makeover,</br>
					which is an easy and painless process. Dr.</br>
					Larry Rosenthal and Dr. Michael Apa can</br>
					create a natural-looking, youthful smile in</br>
					just one week.</br></br>
                    You are an excellent candidate for a</br>
                    Cosmetic Smile Makeover if you feel</br>
                    self-conscious for any of the following</br>
                    reasons:</br>
				</div>
				<div class="left_02">
					– Crooked Teeth</br>
					– Discoloration</br>
					– Worn Teeth</br>
					– Chipped Teeth</br>
					– Spaced Teeth</br></br>
				</div>
				<div class="left_01">
					Dr. Rosenthal and Dr. Apa collaborate</br>
					with the patient to model the perfect</br>
					smile, since every smile and face are</br>
					distinctive. The Rosenthal Apa Group</br>
					team of specialists then do a direct</br>
					bonding mockup to show the patient 
				</div>

			</div>
            <div class="right_text_wrap">
            	<div class="left_01">
            		what their smile will look like after the</br>
            		makeover.</br></br> 
                    The Cosmetic Smile Makeover begins</br>
                    with a private consultation with the</br>
                    preferred doctor. The Rosenthal Apa</br>
                    Group team of specialists then uses</br>
                    patented smile imaging technology to</br>
                    show the patient how the new smile will</br>
                    appear, working with them to factor in</br>
                    several elements, including face shape,</br>
                    tooth color, tooth size, light refraction,</br>
                    age, and skin tone. This is the essence of</br>
                    true smile design.</br></br> 
                    To learn more about the additional</br>
                    benefits of the Cosmetic Smile Makeover,</br>
                    please read our philosophy on <a class="link_FAD">Facial</br>
                    Aesthetic Design</a>.
            	</div>
			    <div id="link_contact">
			        <a href="#">
			        <div class="consulation"></div>
			        </a>
			    </div>
            </div>
		</div>		
	</div>
</div>
<script type="text/javascript">
$(document).ready(function() {

	var background_image_url = templateUrl + '/img/treatments/smile_make_over/smile_make_over_01.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 500);
        $(".img_01").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

});
</script>