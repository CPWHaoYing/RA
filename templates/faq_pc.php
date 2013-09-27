<?php
/*
Template Name: Frequently Asked Questions PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/faq.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="main cf" >
    <img id="background_image" src="#" style="display:none;"/>
	<div class="text_area">
		<div class="title">FREQUENTLY ASKED QUESTIONS</div>
		<div class="text_wrap">
			<div class="left_text_wrap">
			    <div class="left_02">
			    	What is a veneer?
			    </div>
				<div class="left_01">
					A veneer is a thin porcelain shell</br>
					bonded on top of the natural tooth.</br>
					It is approximately  a half millimeter</br>
					thick, roughly the same as a baby’s</br>
					fingernail. The natural tooth requires</br>
					minimal preparation—sometimes none</br>
					at all. With a veneer there’s no dark line</br>
					above the tooth, which is often the case</br>
					with a crown. A crown—or cap—covers</br>
					the entire tooth and reduces it to a</br>
					peg. Preparation for veneers is more</br>
					conservative than for crowns and requires</br>
					a less invasive procedure. For all of these</br>
					reasons, veneers are the treatment of</br>
					choice at Rosenthal Apa Group.</br></br>
				</div>
				<div class="left_02">
					How long do porcelain</br> 
                    veneers last—and will they</br>
                    stain like natural teeth?
				</div>
				<div class="left_01">
                    Veneers should last from 10 to 15 years,</br>
                    sometimes longer. They’re significantly</br>
                    more resistant to stain and discoloration</br>
                    and, unlike your natural teeth, maintain</br>
                    their brightness and luster for many years.</br></br>
				</div>
                <div class="divide_line"></div>
                <div class="left_01">
                MORE QUESTIONS? PLEASE
				</div>
				<div id="link_contact">
                     <a href="#"><div class="contact_btn"></div></a>
                </div>
				<div class="divide_line"></div>


			</div>

            <div class="right_text_wrap">
            	<div class="left_02">
            		What is a Smile Makeover?
            	</div>
            	<div class="left_01">
            		A Smile Makeover is a change in the lower</br>
            		third of a patient’s face. By widening the</br>
            		smile and building out the teeth (perhaps</br>
            		by lengthening them, adding more</br>
            		anatomy and translucency) using veneers,</br>
            		we can create a more dynamic smile that</br>
            		in some cases slightly fills out the lips and</br>
            		provides the patient with a fuller, more</br>
            		youthful appearance. It is similar to a</br>
            		facelift from the nose down—without the</br>
            		scalpel.</br></br>
            	</div>
            	<div class="left_02">
            		What is the time commitment</br>
            		for a Smile Makeover?
            	</div>
            	<div class="left_01">
            		Generally, it takes two visits, 7–10 days</br>
            		apart, with a short 20-minute follow-up</br>
                    to apply finishing touches like contouring</br>
                    and polishing.</br></br>
            	</div>
            	<div class="left_02">
            		Does the Smile Makeover look</br>
            		natural?
            	</div>
            	<div class="left_01">
            		Yes, a Smile Makeover will look totally</br>
            		natural and be undetectable—friends</br>
            		will simply think you returned from a</br>
            		vacation looking refreshed. Often, lips</br>
            		begin to sag over time and lose their</br>
            		elasticity. Because their primary support</br>
            		comes from the teeth, by widening and</br>
            		lengthening those teeth, lips appear more</br>
            		youthful.  Based on the patient’s age, skin</br>
            		tone, and gender, teeth color and shape</br>
            		are selected to enhance the appearance</br>
            		from the nose down. The procedure is</br>
            		non-invasive and the result looks natural.
            	</div>
           
            </div>
		</div>		
	</div>
</div>

<script type="text/javascript">
$(document).ready(function() {
    
    var background_image_url = templateUrl + '/img/treatments/faq/faq_bg.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 500);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

});
</script>