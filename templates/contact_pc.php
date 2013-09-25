<?php
/*
Template Name: Contact PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/contact.css" />
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/nonAjax_handler.js"></script>
<?php if (!$_GET['ajax']) get_header();?>

<div class="msg_lbox_bg">
   <div class="msg_close_wrap"><div class="msg_close"></div></div>
</div>

<div class="main cf" style="opacity:0;">
  <div class="main_bg">
    <div class="left_area">
    	<div class="text_area">
    		<div class="title">CONTACT US</div>
    		<div class="text_01">
                Please complete the short form below to request more information</br>
                about Facial Aesthetic Design, Smile Makeover services or to schedule</br>
                an appointment. We are happy to set up a consultation or answer any</br>
                questions you have. 
    		</div>
        </div>
        <div class="form_wrap cf"><?php echo do_shortcode('[contact-form-7 id="199" title="Contact form 1"]'); ?></div>
    </div>
    <div class="right_area">
        <div class="address_01">
            <div class="text_right_01">new york</div>
            <div class="text_right_02">
                30 EAST 76TH STREET, SUITE 5B</br>
                NEW YORK, NY 10021</br>
                T 212.794.9600
            </div>
            <a href="http://maps.google.com/?q=30 East 76th Street, Suite 5B New York, NY 10021" target="_blank"><div class="view_map"></div></a>
        </div>
        <div class="address_02">
            <div class="text_right_01">dubai</div>
            <div class="text_right_02">
                VILLA NO. 1016, AL WASL ROAD,</br>
                UMM SUQEIM 1, DUBAI</br>
                (P.O.BOX 213 720 DUBAI) UAE</br>
                T 971.4.394.9433
            </div>
            <a href="http://maps.google.com/?q=UMM SUQEIM 1, DUBAI" target="_blank"><div class="view_map"></div></a>
        </div>
    </div>
  </div>	
</div>

<?php if (!$_GET['ajax']) get_footer();?>

<script type="text/javascript">
$(window).load(function(){
    $(".main").animate({"opacity": "1"}, 400);

    var dH=$(document).height();
    $(".msg_lbox_bg").css({"height": dH});
    
    $('.wpcf7-form')[0].reset();
});

$(document).ready(function() {
    $("#loadingBox_RA").fadeOut(100);
    $(".main").animate({opacity:1}, 1000);
});
</script>