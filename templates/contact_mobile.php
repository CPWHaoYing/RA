<?php
/*
Template Name: Contact Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/contact_mobile.css" />

<?php get_header('mobile');?>

<div class="msg_lbox_bg">
   <div class="msg_close_wrap"><div class="msg_close"></div></div>
</div>

<div class="main cf">

    <div class="top_area">

		<div class="title">CONTACT US</div>
		<div class="text_01">
            Please complete the short form below to request more</br>
            information about Facial Aesthetic Design, Smile Makeover</br>
            services or to schedule an appointment. We are happy to</br>
            set up a consultation or answer any questions you have. 
		</div>

        <div class="address_area">
            <div class="address_01">
                <div class="text_right_01">new york</div>
                <div class="text_right_02">
                    30 EAST 76TH STREET,</br>
                    SUITE 5B</br>
                    NEW YORK, NY 10021</br>
                    T 212.794.9600
                </div>
                <a href="http://maps.google.com/?q=30 East 76th Street, Suite 5B New York, NY 10021" target="_blank"><div class="view_map"></div></a>
            </div>

            <div class="address_02">
                <div class="text_right_01">dubai</div>
                <div class="text_right_02">
                    VILLA NO. 1016,</br>
                    AL WASL ROAD,</br>
                    UMM SUQEIM 1, DUBAI</br>
                    (P.O.BOX 213 720 DUBAI) UAE</br>
                    T 971.4.394.9433
                </div>
                <a href="http://maps.google.com/?q=UMM SUQEIM 1, DUBAI" target="_blank"><div class="view_map"></div></a>
            </div>
        </div>

    </div>

    <div class="bottom_area">
       <?php echo do_shortcode('[contact-form-7 id="199" title="Contact form 1"]'); ?>
    </div>	

</div>

<?php get_footer('mobile');?>


<script type="text/javascript">
$(function(){
    var dH=$(document).height();
    $(".msg_lbox_bg").css({"height": dH});
    
    $('.wpcf7-form')[0].reset();
  
    
    $('head meta[name=viewport]').remove();
    $('head').prepend('<meta name="viewport" content="width=640px, minimum-scale=0.5, maximum-scale=1, user-scalable=no" />');
    // var screenWidth = (screen.width);
    // var innerWidth = window.innerWidth;

    // var viewportScale = screenWidth / innerWidth;
    // alert(viewportScale);

    //alert(viewportWidth);

    $("input").click(function(){
        //alert(window.innerWidth);
        // zoom : 384, zoomout : 639

        // var width_size = $(window).width();
        // //var width_size = $(window).width();
        // // Device Width Size - Web Size(320) % + Maximum-scale(0.5)
        // var maxScale = ((width_size - 320) / 320 / 2 + 0.5).toFixed(2);

        // alert(width_size + " " + maxScale);
    
        // $('head meta[name=viewport]').remove();
        // $('head').prepend('<meta name="viewport" content="width=640px, minimum-scale=0.5, maximum-scale='+maxScale+', user-scalable=no" />');

    });

});
</script>