<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>


<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/gallery2_mobile.css" />

<?php get_header('mobile');?>

<div class="main_m" >
    <div class="title_bg">
        <div class="title">BEFORE & AFTER</div>
        <div class="sub_categories">
            <div id="sub_touchArea"><div class='sub_category'>GALLERY 1</div></div>
            <div class='category_divide_line'></div>
            <div id="selected_touchArea"><div class='selected_category'>GALLERY 2</div></div>
        </div>
    </div>

    <!-- Zoom Image Area -->
    <div class="zoomImage" style="display:none;">
        <div class="zoomImage_wrapper">
            <div id="loadingBox"><div></div></div>

            <div id="beforeImage">
                <div id="before_text">BEFORE</div>
                <div id="after_text">AFTER</div>
                <img src="#" />
            </div>
            <div id="beforeText"></div>
            <div id="afterText"></div>
        </div>
        <div id="previous_touchArea"><div id="previous_button"></div></div>
        <div id="next_touchArea"><div id="next_button"></div></div>
    </div>
    <!-- Zoom Image Area -->   
    <div id="main_contents">
        <div class="text_m">
            It can be difficult to imagine the end result of the wide variety <br/>
            of cosmetic treatments offered at Rosenthal Apa Group. To <br/>
            see how these have transformed our clients’ smiles, browse <br/>
            our Before & After Galleries. <br/><br/>
            <div class="text_m_bold">
            	Click on any full-face image and drag the white bar <br/>
            	from left to right to see the transformation. Visit <br/>
            	Gallery 2 to view additional close-up images.<br/><br/>
        	</div>
        </div>
        

        <div class="content_select">
            <ul>
                <li id="g2_patient21"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient21_s.png" class="gallery_image"/></li>
                <li id="g2_patient22"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient22_s.png" class="gallery_image"/></li>
                <li id="g2_patient23"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient23_s.png" class="gallery_image"/></li>
                <li id="g2_patient24"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient24_s.png" class="gallery_image"/></li>
                <li id="g2_patient25"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient25_s.png" class="gallery_image"/></li>
                <li id="g2_patient26"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient26_s.png" class="gallery_image"/></li>
                <li id="g2_patient27"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient27_s.png" class="gallery_image"/></li>
                <li id="g2_patient28"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient28_s.png" class="gallery_image"/></li>
                <li id="g2_patient29"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient29_s.png" class="gallery_image"/></li>
                <li id="g2_patient30"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient30_s.png" class="gallery_image"/></li>
                <li id="g2_patient31"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient31_s.png" class="gallery_image"/></li>
                <li id="g2_patient32"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient32_s.png" class="gallery_image"/></li>
                <li id="g2_patient33"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient33_s.png" class="gallery_image"/></li>
                <li id="g2_patient34"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient34_s.png" class="gallery_image"/></li>
                <li id="g2_patient35"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient35_s.png" class="gallery_image"/></li>
                <li id="g2_patient36"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient36_s.png" class="gallery_image"/></li>
                <li id="g2_patient37"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient37_s.png" class="gallery_image"/></li>
                <li id="g2_patient38"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery2_m/g2_patient38_s.png" class="gallery_image"/></li>
            </ul>
        </div>
        <a id="link_contact" href="#">
            <div class="consulation"></div>
        </a>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/gallery2_mobile.js" /></script>