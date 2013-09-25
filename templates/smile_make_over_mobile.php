<?php
/*
Template Name: Smile Make Over Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/smile_make_over_mobile.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<?php get_header('mobile');?>

<div class="main cf" >
    <div class="title_bg" >
        <img id="background_image" src="#" style="display:none;"/>
        <div class="title">ROSENTHAL APA</br>SMILE MAKEOVER</div>
    </div>
    <div class="text_area">
        <div class="text_01">
        Refresh your entire look with a Rosenthal Apa Group</br>
        Cosmetic Smile Makeover, which is an easy and painless</br>
        process. Dr. Larry Rosenthal and Dr. Michael Apa can</br>
        create a natural-looking, youthful smile in just one week.</br></br> 

        You are an excellent candidate for a Cosmetic Smile Makeover</br> 
        if you feel self-conscious for any of the following reasons:</br></br>
        </div>
        <div class="text_02 cf">
        <div class="text_left">
        – Crooked Teeth</br>
        – Discoloration</br>
        – Worn Teeth</br></br>
        </div>
        <div class="text_right">
        – Chipped Teeth</br>
        – Spaced Teeth</br></br>
        </div>
        </div>
        <div class="middle_image" style="opacity:0;"></div>
        <div class="text_01">
        Dr. Rosenthal and Dr. Apa collaborate with the patient to</br>
        model the perfect smile, since every smile and face are</br>
        distinctive. The Rosenthal Apa Group team of specialists</br>
        then do a direct bonding mockup to show the patient what</br>
        their smile will look like after the makeover.</br></br>

        The Cosmetic Smile Makeover begins with a private</br>
        consultation with the preferred doctor. The Rosenthal</br>
        Apa Group team of specialists then uses patented smile</br>
        imaging technology to show the patient how the new</br>
        smile will appear, working with them to factor in several</br>
        elements, including face shape, tooth color, tooth size,</br>
        light refraction, age, and skin tone. This is the essence of</br>
        true smile design.</br></br>

        To learn more about the additional benefits of the</br>
        Cosmetic Smile Makeover, please read our philosophy</br>
        on <span class="link_FAD">Facial Aesthetic Design</span>.
        </div>

        <a id="link_contact" href="#"><div class="consulation"></div></a>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">
$(function() {
    
    var background_image_url = templateUrl + '/img/treatments/smile_make_over/smile_make_over_mobile.jpg';

    $("#background_image").one("load", function() {
        $(".middle_image").animate({opacity:1}, 1000);
        $(".middle_image").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

    $('.consulation').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
    });

    $('.link_FAD').click(function(){
            document.location.href = $("a:contains('FACIAL AESTHETIC DESIGN')").attr('href');
    });

});
</script>