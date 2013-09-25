<?php
/*
Template Name: Newsletter
*/
?>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/newsletter.css" />
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/nonAjax_handler.js"></script>
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="msg_lbox_bg">
   <div class="msg_close_wrap"><div class="msg_close"></div></div>
</div>

<div class="wrapper">
    <div class="main" style="opacity:0;">
        <img id="background_image" src="#" style="display:none;"/>
        <div class="form_box">
            <div class="text_area">
                Sign up to receive Rosenthal Apa<br/>
                Group’s monthly newsletter for<br/>
                updates on the practice of aesthetic<br/>
                dentistry and for new information<br/>
                regarding your dental health.<br/>
            </div>
            <div class="input_area">
                <?php echo do_shortcode('[contact-form-7 id="262" title="Newsletter"]'); ?>
            </div>
        </div>
        <div class="title_box">
            <div class="title">WORKING<br/>ON OUR<br/>NEWSLETTER</div>
        </div>
           
    </div>
</div>

<?php if (!$_GET['ajax']) get_footer();?>

<script type="text/javascript">
$(window).load(function(){
    var dH=$(document).height();
    $(".msg_lbox_bg").css({"height": dH});
    
    $('.wpcf7-form')[0].reset();
});

$(document).ready(function() {

    var background_image_url = templateUrl + '/img/a_closer_look/newsletter/newsletter_bg.jpg';

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 500);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);
    
});
</script>