<?php
/*
Template Name: Facial Aesthetic Design PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/facial_aesthetic_design.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="main cf" >
    <img id="background_image" src="#" style="display:none;"/>
	<div class="text_area">
		<div class="title">FACIAL AETHETIC DESIGN</div>
		<div class="text_wrap">
			<div class="left_text_wrap">
			   <div class="left_01">
					Rosenthal Apa Group’s world renowned</br>
					Facial Aesthetic Design treatment</br>
					results in more than just a perfect</br>
					smile. While having a beautiful,</br>
					rejuvenated smile is reason enough</br>
					to seek treatment, most of Rosenthal</br>
					Apa Group’s clients have noticed</br>
					these additional benefits affecting the</br>
					aesthetics of the entire face:</br></br>
				</div>
				<div class="left_02">
					– Less Visible Smile Lines</br>
                    – Slight Lift to the Upper Lip</br>
                    &nbsp;&nbsp;&nbsp;&nbsp;(when needed)</br>
                    – Overall Support in the</br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Lower Third of the Face</br></br>
				</div>
				<div class="left_01">
					All of these positive side-effects help</br>
					Rosenthal Apa Group patients look</br>
					refreshed, younger and more vibrant—</br>
					and this is only the beginning.</br></br>
					The natural law of beauty is the Golden
				</div>

			</div>
            <div class="right_text_wrap">
            	<div class="left_01">
            		Proportion, an essential component in</br>
            		creating the perfect smile. Dr. Rosenthal</br>
            		and Dr. Apa don’t just fix teeth—they</br>
            		develop a smile that will bring balance</br>
            		and symmetry to the entire face. Read</br>
            		about the full impact and science behind</br>
            		true beauty on <a class="link_WIB">What Is Beauty?</a> To</br>
            		learn more about the <a class="link_SMO">Smile Makeover</a></br>
            		process, visit our Treatments section.</br></br>
            	</div>
            	
            	<div class="right_02 left_02">
            	    An enhaced smile also has</br>
                    psychological benefits:</br>
                </div>
                <div class="divide_line"></div>

                <div class="right_03 left_01">
            	    INCREASED SELF-CONFIDENCE</br>
            	    IMPROVED SELF-ESTEEM</br>
            	    GENERAL BETTERMENT</br>
                </div>
                <div class="divide_line"></div>
            </div>
		</div>		
	</div>
	   <div id="link_contact">
        <a href="#">
        <div class="consulation"></div>
        </a>
    </div>
</div>

<script type="text/javascript">
$(document).ready(function() {
    
    var background_image_url = templateUrl + '/img/treatments/facial_aesthetic_design/faical_aesthetic_design_bg.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 500);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

});
</script>