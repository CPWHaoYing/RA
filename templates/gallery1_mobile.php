<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>


<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/gallery1_mobile.css" />

<?php get_header('mobile');?>

<div class="main_m" >
    <div class="title_bg">
        <div class="title">BEFORE & AFTER</div>
        <div class="sub_categories">
            <div id="selected_touchArea"><div class='selected_category'>GALLERY 1</div></div>
            <div class='category_divide_line'></div>
            <div id="sub_touchArea"><div class='sub_category'>GALLERY 2</div></div>
        </div>
    </div>

    <!-- Before & After Drag Bar -->
    <div class="beforeAfter" style="display:none;">
        <div class="beforeAfter_wrapper">
            <div id="loadingBox"><div></div></div>
            <div id="beforeAfterDrag">
                <div id="dragBar"></div> 
                <div id="leftArrow"></div>
                <div id="rightArrow"></div>
            </div>
            <div id="beforeDiv">
                <img id="beforeImage" src="#" />
            </div>
            <div id="afterDiv"><img id="afterImage" src="#" /></div>
        </div>
        <div id="previous_touchArea"><div id="previous_button"></div></div>
        <div id="next_touchArea"><div id="next_button"></div></div>
    </div>
    <!-- Before & After Drag Bar End -->   
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
                <li id="g1_patient1"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient1s.png" class="gallery_image"/></li>
                <li id="g1_patient2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient2s.png" class="gallery_image"/></li>
                <li id="g1_patient3"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient3s.png" class="gallery_image"/></li>
                <li id="g1_patient4"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient4s.png" class="gallery_image"/></li>
                <li id="g1_patient5"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient5s.png" class="gallery_image"/></li>
                <li id="g1_patient6"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient6s.png" class="gallery_image"/></li>
                <li id="g1_patient7"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient7s.png" class="gallery_image"/></li>
                <li id="g1_patient8"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient8s.png" class="gallery_image"/></li>
                <li id="g1_patient9"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient9s.png" class="gallery_image"/></li>
                <li id="g1_patient10"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient10s.png" class="gallery_image"/></li>
                <li id="g1_patient11"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient11s.png" class="gallery_image"/></li>
                <li id="g1_patient12"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient12s.png" class="gallery_image"/></li>
                <li id="g1_patient13"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient13s.png" class="gallery_image"/></li>
                <li id="g1_patient14"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient14s.png" class="gallery_image"/></li>
                <li id="g1_patient15"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient15s.png" class="gallery_image"/></li>
                <li id="g1_patient16"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient16s.png" class="gallery_image"/></li>
                <li id="g1_patient17"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient17s.png" class="gallery_image"/></li>
                <li id="g1_patient18"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient18s.png" class="gallery_image"/></li>
                <li id="g1_patient19"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient19s.png" class="gallery_image"/></li>
                <li id="g1_patient20"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/gallery1_m/g1_patient20s.png" class="gallery_image"/></li>
            </ul>
        </div>
        <a id="link_contact" href="#">
           <div class="consulation"></div>
        </a>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/gallery1_mobile.js" /></script>