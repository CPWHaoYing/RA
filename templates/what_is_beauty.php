<?php
/*
Template Name: What Is Beauty
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/what_is_beauty.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="main cf" >
    <img id="background_image" src="#" style="display:none;"/>
	<div class="text_area">
		<div class="title">WHAT IS BEAUTY?</div>
		<div class="text_01">Beauty is defined as “the phenomenon of the experience of pleasure</br>
			through perception of balance and proportion of stimulus.” It’s almost</br>
			impossible to define beauty objectively, since everyone views it</br>
			differently based on life experience, predispositions, and biochemistry.</br>
			Beauty may be immeasurable, but harmony–one of the most important</br>
			components of physical beauty—can be measured. 
		</div>
		<div class="text_wrap">
			<div class="left_text_wrap">
				The golden ratio, or the golden</br>
				proportion, can be found throughout</br>
				nature and in some of the world’s</br>
				greatest works of art. It can also be</br>
				found in the facial structure of most of</br>
				the people we consider to be beautiful.</br>
				It has been said that if you draw a</br>
				rectangle around the face of the Mona</br>
				Lisa, the ratio of height to width of that</br>
				rectangle is equal to the golden ratio.</br></br>
                Symmetry is scientifically proven to be</br>
                attractive to the human eye, but not</br>
                all facial features contribute equally</br>
                to the perception of beauty. According</br>
                to Professor Gordon Patzer’s “The</br>
                Physical Attractiveness Phenomenon,”</br>
                there are five predominant features</br>
                that factor into physical attractiveness:
                <div class="img_01"></div>
			</div>
            <div class="right_text_wrap">
            	<div class="right_01">
            		Facial aesthetic design is about</br>
            		more than just teeth—it’s about</br>
            		all the elements of the face</br>
            		and how they work together to</br>
            		achieve the most beautiful and</br>
            		natural smile.</br></br>
            	</div>
            	<div class="right_02">
            	    Rosenthal Apa Group doesn’t use the</br>
            	    traditional method of smile</br>
            	    design because it focuses on creating</br>
            	    perfectly symmetrical teeth, which</br>
            	    in an asymmetrical frame like the</br>
            	    face actually creates a disharmony.</br>
            	    Although dentistry is in many ways a</br>
            	    science, cosmetic dentistry requires</br>
            	    the innovation, creativity, and skill of</br>
            	    an artist to craft the perfect smile to</br>
            	    complement an individual’s unique</br>
            	    facial features.</br></br>
                    While beauty may be subjective,</br>
                    balance is not—and balance is what</br>
                    Rosenthal Apa Group can create, using</br>
                    advanced facial mapping techniques and</br>
                    a thorough understanding of how the</br>
                    human eye perceives beauty. 
                </div>
            </div>
		</div>		
	</div>
    <div id="link_contact">
        <a href="#"><div class="consulation"></div></a>
    </div>
</div>
<script type="text/javascript">
$(document).ready(function() {

    var background_image_url = templateUrl + '/img/treatments/what_is_beauty/what_is_beauty_bg.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 500);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

});
</script>
