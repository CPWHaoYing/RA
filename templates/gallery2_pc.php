
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/gallery2.css" />
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery.ui.touch-punch.min.js"></script>
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/gallery2.js" /></script>

<?php if (!$_GET['ajax']) get_header();?>
<div class="mainContent" style="opacity:0;">
	<div class="mainContentLeft">
		<div class="beforeAfterTitle">BEFORE <br/>& AFTER</div>
		<div class="textWrapper">
			<div class="beforeAfterText">
				It can be difficult to imagine the<br/> 
				end result of the wide variety <br/>
				of cosmetic treatments offered <br/>
				at Rosenthal Apa Group. To see <br/>
				how these have transformed our <br/>
				clients’ smiles, browse our Before <br/>
				& After Galleries. <br/><br/>

				<p>
				Click on any full-face image and <br/>
				drag the white bar from left to <br/>
				right to see the transformation. <br/>
				Visit Gallery 2 to view additional <br/>
				close-up images.<br/><br/>
				</p>

				If you like what you see and are <br/>
				interested in a consultation, please<br/>
				<div id="link_contact">
			        <a href="#">
			        <img src="<?php bloginfo('stylesheet_directory'); ?>/img/button/contact.jpg" class="consultation"/>
			        </a>
			    </div>
			</div>
		</div>
		<!-- Before & After Drag Bar -->
		<div class="beforeAfter">
			<div id="loadingBox"><div></div></div>

			<div id="beforeImage">
				<img src="#" />
			</div>
			<div id="beforeText"></div>
			<div id="afterText"></div>
		</div>
		<!-- Before & After Drag Bar End -->	
	</div>

	<div class="pagingArrow" id="prevArrow">
		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/BA_leftButton.png" />
	</div>

	<div class="mainContentRight">
		<ul id="patientsList">
			<li id="g2_patient21"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient21_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient22"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient22_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient23"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient23_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient24"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient24_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient25"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient25_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient26"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient26_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient27"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient27_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient28"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient28_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient29"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient29_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient30"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient30_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient31"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient31_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient32"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient32_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient33"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient33_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient34"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient34_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient35"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient35_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient36"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient36_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient37"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient37_s.png" class="inactive" style="display:none;"/></li>
			<li id="g2_patient38"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2/g2_patient38_s.png" class="inactive" style="display:none;"/></li>
		</ul>
	</div>

</div>

<script type="text/javascript">
$(document).ready(function() {
    $(".mainContent").css({"opacity":1});
    $("#loadingBox_RA").fadeOut(100);

    for (var i=21; i<39; i++){
		$("#g2_patient"+i+" img").one("load", function() {
			$(this).fadeIn();
		}).attr("src", templateUrl + "/img/gallery2/g2_patient"+i+"_s.png");
	}
});
</script>
