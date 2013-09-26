<?php
/*
Template Name: Client Testimonials PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/client_testimonials.css" />
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/client_testimonials.js" /></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery.ui.touch-punch.min.js"></script>

<?php if (!$_GET['ajax']) get_header();?>

<div id="lbox">
	<div id="content" >
		<div class="mainContent" style="opacity:0;">
			<div id="leftContent">
				<div id="title">
					CLIENT TESTIMONIALS
				</div>
				<div id="testimonial">
					<div id="testimonialTitle">
					</div>
					<div id="testimonialText">
					</div>
				</div>
			</div>
			<div id="rightContent">
				<ul>
					<li class="miniBox" id="box01"><table class="tableBox3Lines">
						<tr><td>I Love</td></tr>
						<tr><td>My New</td></tr>
						<tr><td>Smile!</td></tr>
					</table></li>
					<li class="miniBox" id="box02"><table class="tableBox4Lines">
						<tr><td>Thank</td></tr>
						<tr><td>You&#8212;This</td></tr>
						<tr><td>Means So</td></tr>
						<tr><td>Much</td></tr>
					</table></li>
					<li class="miniBox" id="box03"><table class="tableBox3Lines">
						<tr><td>I Felt</td></tr>
						<tr><td>Like A</td></tr>
						<tr><td>VIP</td></tr>
					</table></li>
					<li class="miniBox" id="box04"><table class="tableBox4Lines">
						<tr><td>Thank You</td></tr>
						<tr><td>Doesn't</td></tr>
						<tr><td>Seem Like</td></tr>
						<tr><td>Enough</td></tr>
					</table></li>
					<li class="doubleBox" id="box05"><table class="tableBox3Lines">
						<tr><td>Four Years</td></tr>
						<tr><td>Later And I Couldn't</td></tr>
						<tr><td>Be Happier</td></tr>
					</table></li>
					<li class="miniBox" id="box06"><table class="tableBox4Lines">
						<tr><td>I Am So</td></tr>
						<tr><td>Happy</td></tr>
						<tr><td>With The</td></tr>
						<tr><td>Outcome!</td></tr>
					</table></li>
					<li class="miniBox" id="box07"><table class="tableBox2Lines">
						<tr><td>My Smile</td></tr>
						<tr><td>Is #1</td></tr>
					</table></li>
					<li class="miniBox" id="box08"><table class="tableBox3Lines">
						<tr><td>Thanks To</td></tr>
						<tr><td>The Entire</td></tr>
						<tr><td>Group</td></tr>
					</table></li>
					<li class="doubleBox" id="box09"><table class="tableBox3Lines">
						<tr><td>I Appreciate</td></tr>
						<tr><td>Your Concern For</td></tr>
						<tr><td>My Health</td></tr>
					</table></li>
					<li class="miniBox" id="box10"><table class="tableBox3Lines">
						<tr><td>Thank You</td></tr>
						<tr><td>And</td></tr>
						<tr><td>God Bless</td></tr>
					</table></li>
					<li class="miniBox" id="box11"><table class="tableBox2Lines">
						<tr><td>Ever</td></tr>
						<tr><td>Grateful!</td></tr>
					</table></li>
					<li class="miniBox" id="box12"><table class="tableBox4Lines">
						<tr><td>Thank You</td></tr>
						<tr><td>From the</td></tr>
						<tr><td>Depths Of</td></tr>
						<tr><td>My Heart</td></tr>
					</table></li>	
					<li class="miniBox" id="box13"><table class="tableBox3Lines">
						<tr><td>Thank</td></tr>
						<tr><td>You For</td></tr>
						<tr><td>My Smile</td></tr>
					</table></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
$(document).ready(function() {
	$(".mainContent").animate({"opacity":1});
});
</script>