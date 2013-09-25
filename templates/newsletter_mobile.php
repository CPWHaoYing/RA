<?php
/*
Template Name: Facial Aesthetic Design Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/newsletter_mobile.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<?php get_header('mobile');?>

<div class="msg_lbox_bg">
   <div class="msg_close_wrap"><div class="msg_close"></div></div>
</div>

<div class="wrapper">
    <div class="main">
        <div class="title_box" style="opacity:0;">
            <img id="background_image" src="#" style="display:none;"/>
            <div class="title">WORKING<br/>ON OUR<br/>NEWSLETTER</div>
        </div>
        <div class="form_box">
            <div class="text_area">
                Sign up to receive Rosenthal Apa Group’s monthly newsletter</br>
                for updates on the practice of aesthetic dentistry and for new</br>
                information regarding your dental health.
            </div>
            <div class="input_area">
                <?php echo do_shortcode('[contact-form-7 id="262" title="Newsletter"]'); ?>
            </div>
        </div>
           
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">
$(window).load(function(){
    
    $('head meta[name=viewport]').remove();
    $('head').prepend('<meta name="viewport" content="width=640px, minimum-scale=0.5, maximum-scale=1, user-scalable=0.5" />');

    var dH=$(document).height();
    //console.log(dH);
    $(".msg_lbox_bg").css({"height": dH});
    
    $('.wpcf7-form')[0].reset();

    var background_image_url = templateUrl + '/img/a_closer_look/newsletter/newsletter_bg_mobile.jpg';

    $("#background_image").one("load", function() {
        $(".title_box").animate({opacity:1}, 1000);
        $(".title_box").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);
});

</script>