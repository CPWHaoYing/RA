
<!--<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/gallery1.css" />-->
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/gallery1.js" /></script>

<?php if (!$_GET['ajax']) get_header();?>

<style type="text/css" media="screen">
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {
 margin:0;
 padding:0;
}
fieldset,img {
 border:0;
}
address,caption,cite,code,dfn,em,strong,th,var {
 font-style:normal;
 font-weight:normal;
}
ol,ul {
 list-style:none;
}
caption,th {
 text-align:left;
}
h1,h2,h3,h4,h5,h6 {
 font-size:100%;
 font-weight:normal;
}
q:before,q:after {
 content:'';
}
abbr,acronym { border:0;
}
table {
 border-collapse:collapse;
 border-spacing:0;
}
#lbox{
	bottom: 0em;
	margin: 0 auto;
	width:100%;
}
#content{
	position:relative;
	width: 1024px;/* CENTER THE CONTENT */
	margin: 0 auto; /* CENTER THE CONTENT */
}
.mainContent{
	background-color: #e9e9ea;
	width:1024px;
	height:523px;
	position:center;
	font-size:16px;
	line-height: 0;
	margin-bottom: 26px;
}

.beforeAfterTitle{
	width: 194px;
	height: 89px;
	position: absolute;
	left:47px;
	top:25px;
	font-family: 'Conduit', sans-serif;
	color: #3cedd0;
	float: left;
	text-transform:uppercase;
	line-height: 48px;
	font-size: 58px;
	letter-spacing: -1px;
}

.beforeAfter{
	margin-left:290px;
	margin-top:29px;
	width:370px;
	height:464px;
	background-repeat: none;
	overflow: hidden;
	position: relative;
	padding: 0;
}
.mainContentLeft { float:left; width:690px; }
.mainContentRight { float:left; width:274px; height:100%; }
.mainContentRight ul{ padding: 0px; }
.mainContentRight ul li{
	float: left;
	list-style-type: none;
	cursor: pointer;
	margin: 3px 5px 22px 5px;

}

#BA_face_select{ margin: 25px 0 0 0;}

.pagingArrow{
	width:47px;
	height:42px;
	left:0px;
	top: 230px;
	padding-top: 20px;
	float:left;
	position: relative;
	cursor: pointer;
}
.pagingArrow img{
	width:22px;
	height:22px;
}

.inactiveFace, .activeFace {
	width:58px;

}
.inactiveFace{
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; /* IE 8 */
   	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50); /* IE 7 and olders */
	opacity: 0.5;
}
.activeFace{
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; /* IE 8 */
   	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100); /* IE 7 and olders */		
	opacity: 1.0;
}

/* Before & After */

#beforeAfterDrag{
	position: absolute;
	padding: 0;
	left: 0px;
	z-index: 20;
	width:30px;
	height:464px;
	cursor: pointer;
}

#dragBar {
	background-color: #FFF;
	position: absolute;
	left:13px;
	width:2px;
	height:464px;
	
}
#beforeDiv{
	width:0px;
	height:464px;
	position: absolute;
	overflow: hidden;
	left: 0px;
	z-index: 10;
}
#afterDiv{
	width:370px;
	height:464px;
	position: absolute;
	overflow: hidden;
	right:0px;
	z-index: 9;
}
#beforeImage{
	position: absolute;
	top: 0px;
	left: 0px;
	width: 370px;
	height: 464px;
	min-width: 370px;
	max-width: none;
}
#afterImage{
	position: absolute;
	top: 0px;
	right: 0px;
	width: 370px;
	height: 464px;
	z-index: 10;
}
#leftArrow, #rightArrow{
	color: #FFF;
	font-size: 11px;
	opacity: 0.8;
	cursor:pointer;
}
#leftArrow{
	background-image: url(<?php bloginfo('stylesheet_directory'); ?>/img/BA_slideButton.png);
	background-position: 0px 0px;
	position: absolute;
	left:-39px;
	width:47px;
	height:464px;
	
	z-index: 20;
}
#rightArrow{
	background-image: url(<?php bloginfo('stylesheet_directory'); ?>/img/BA_slideButton.png);
	background-position: -48px 0px;
	position: absolute;
	left:20px;
	width:42px;
	height:464px;
}

/* Before & After End */

.textWrapper{
	background-color:#FFF;
	left:36px;
	top:140px;
	width:253px;
	height:353px;
	position: absolute;
}
.beforeAfterText{
	left:15px;
	top:12px;
	width: 231px;
	height: 347px;
	position: relative;
	font-family: 'Lato', sans-serif;
	font-size: 14px;
	line-height: 19px;
	color: rgb(148, 148, 153);
}
.beforeAfterText p{
	color: rgb(38, 235, 201);
}
#link_contact{
	left:0px;
	top:7px;
	width: 68px;
	height: 15px;
	position: relative;
	cursor: pointer;
}

#loadingBox {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40px;
	height: 40px;
	margin-top: -20px;
	margin-left: -20px;
	cursor: pointer;
	overflow: hidden;
	z-index: 1000;
	display: none;
	box-sizing: content-box;
}

#loadingBox div {
	position: absolute;
	top: 0;
	left: 0;
	width: 40px;
	height: 480px;
	background-image: url(<?php bloginfo('stylesheet_directory'); ?>/css/fancybox/fancybox.png);
	box-sizing: content-box;
}

.loading_bg {
	position: absolute;
	top: 0;
	height: 0;
	width: 370px;
	height: 464px;
	/*background-color: #e9e9ea;*/
	background-color: #e9e9ea;
	opacity: 1;
	z-index: 11;
}
</style>

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
			<div id="beforeAfterDrag">
				<div id="dragBar"></div> 
				<div id="leftArrow"></div>
				<div id="rightArrow"></div>
			</div>
			<div class='loading_bg'></div>
			<div id="beforeDiv">
				<img id="beforeImage" src="#" />
			</div>
			<div id="afterDiv"><img id="afterImage" src="#" /></div>

		</div>
		<!-- Before & After Drag Bar End -->	
	</div>
	<div class="mainContentRight">
		<ul id="BA_face_select">
			<li id="g1_patient1"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient1s.png" class="inactiveFace"/></li>
			<li id="g1_patient2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient2s.png" class="inactiveFace"/></li>
			<li id="g1_patient3"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient3s.png" class="inactiveFace"/></li>
			<li id="g1_patient4"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient4s.png" class="inactiveFace"/></li>
			<li id="g1_patient5"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient5s.png" class="inactiveFace"/></li>
			<li id="g1_patient6"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient6s.png" class="inactiveFace"/></li>
			<li id="g1_patient7"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient7s.png" class="inactiveFace"/></li>
			<li id="g1_patient8"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient8s.png" class="inactiveFace"/></li>
			<li id="g1_patient9"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient9s.png" class="inactiveFace"/></li>
			<li id="g1_patient10"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient10s.png" class="inactiveFace"/></li>
			<li id="g1_patient11"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient11s.png" class="inactiveFace"/></li>
			<li id="g1_patient12"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient12s.png" class="inactiveFace"/></li>
			<li id="g1_patient13"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient13s.png" class="inactiveFace"/></li>
			<li id="g1_patient14"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient14s.png" class="inactiveFace"/></li>
			<li id="g1_patient15"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient15s.png" class="inactiveFace"/></li>
			<li id="g1_patient16"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient16s.png" class="inactiveFace"/></li>
			<li id="g1_patient17"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient17s.png" class="inactiveFace"/></li>
			<li id="g1_patient18"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient18s.png" class="inactiveFace"/></li>
			<li id="g1_patient19"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient19s.png" class="inactiveFace"/></li>
			<li id="g1_patient20"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1/g1_patient20s.png" class="inactiveFace"/></li>
		</ul>
	</div>

	<div class="pagingArrow" id="nextArrow">
		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/BA_rightButton.png" />
	</div>
</div>

<script type="text/javascript">
$(document).ready(function() {
    $(".mainContent").css({"opacity":1});
    $("#loadingBox_RA").fadeOut(100);
});

</script>
