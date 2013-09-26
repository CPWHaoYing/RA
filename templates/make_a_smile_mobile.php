<?php
/*
Template Name: The Making of a Smile Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/make_a_smile_mobile.css" />
<?php get_header('mobile');?>

<div class="main_mobile">
	<div class="title_bg">
		<div class="title">THE MAKING OF A SMILE</div>
		<div class="text_04">
			Dr. Michael Apa takes you inside the design & planning of a</br>
			cosmetic smile lift. See the transformation from the first to</br>
			final appointment.
		</div>
		<div class="text_06">
			CLICK BELOW TO VIEW MORE INFORMATION
		</div>
	</div>

	<div id="accordion">
	  <div class="btn_bg">
	  	 <div class="btn_title">1ST APPOINTMENT</div>
	  </div>
	  <div class="content_bg set_01">
	    <div class="content">
		    Dr. Apa fits a temporary smile to the patient. He then</br>
		    minimally shapes and fits their teeth for the temporary</br>
		    veneers they will wear for just under a week. This</br>
		    unique step allows patients to test drive their new,</br>
		    improved smile. 
	    </div>
	    <div class="img_01"></div> 
	  </div>

	  <div class="btn_bg">
	  	 <div class="btn_title">2ND APPOINTMENT</div>
	  </div>
	  <div class="content_bg set_02">
	    <div class="content">
		    Dr. Apa creates permanent veneers for the patient.</br>
		    After wearing the temporary smile, the patient</br>
		    returns to provide feedback on the look and fit of their</br>
		    veneers. Using this feedback, a master ceramist makes</br>
		    a new mold before creating the final veneers. 
	    </div>
	    <div class="img_02"></div> 
	  </div>

	  <div class="btn_bg">
	  	 <div class="btn_title">3RD APPOINTMENT</div>
	  </div>
	  <div class="content_bg set_03">
	    <div class="content">
		    Dr. Apa fits the patient with the permanent veneers.</br>
            At this time, he removes the temporary veneers and</br>
            the patient receives their new, permanent smile.
	    </div>
	    <div class="img_03"></div> 
	  </div>

	  <div class="btn_bg">
	  	 <div class="btn_title">4TH APPOINTMENT</div>
	  </div>
	  <div class="content_bg set_04">
	    <div class="content">
		    During this final re-contouring appointment, Dr. Apa</br>
		    applies the finishing touches to the patient’s new smile.</br>
		    It occurs one to two days after the veneers are fitted.
	    </div>
	    <div class="img_04"></div> 
	  </div>

	  <div class="btn_bg">
	  	 <div class="btn_title">4YR FOLLOW UP</div>
	  </div>
	  <div class="content_bg set_05">
	    <div class="content">
		    Veneers, if treated properly, should look and feel great</br>
		    for up to 15 years after their placement. Most patients</br>
		    forget they have them after a month or so because</br>
		    facial muscles adapt to the new teeth and make them</br>
		    look more natural than the day they were put in.</br></br> 

            This patient needed width added to her smile to</br> 
            offset her narrow chin. She also needed to restore</br>
            harmony between the nose, chin, and smile. To do</br> 
            this, Dr. Apa canted the nose to the right and the chin</br>
            to the left. By centering the teeth, closing gaps, and</br>
            widening the smile, Dr. Apa drew attention away from</br>
            the asymmetries and created the illusion of facial</br>
            harmony. This is the power of great aesthetic dentistry.
	    </div>
	    <div class="img_05"></div> 
	  </div>

	</div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">
$(document).ready(function() {

    $( "#accordion" ).accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });


    $(".btn_bg").click(function(){
      $(this).toggleClass('btn_green');

      $('.btn_bg').not(this).each(function(){
         $(this).removeClass('btn_green');
      });
    });


});
</script>