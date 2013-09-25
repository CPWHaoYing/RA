<?php
/*
Template Name: Facial Aesthetic Design Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/facial_aesthetic_design_mobile.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<?php get_header('mobile');?>

<div class="main cf" >
    <div class="title_bg" style="opacity:0;">
        <img id="background_image" src="#" style="display:none;"/>
        <div class="title">FACIAL</br>AESTHETIC</br>DESIGN</div>
    </div>
    <div class="text_area">
        <div class="text_01">
        Rosenthal Apa Group’s world renowned Facial Aesthetic</br>
        Design treatment results in more than just a perfect smile.</br>
        While having a beautiful, rejuvenated smile is reason enough</br>
        to seek treatment, most of Rosenthal Apa Group’s clients have</br>
        noticed these additional benefits affecting the aesthetics of</br>
        the entire face:</br></br>
        </div>
        <div class="text_02">
        – Less Visible Smile Lines</br>
        – Slight Lift to the Upper Lip (when needed)</br>
        – Overall Support in the Lower Third of the Face</br></br>
        </div>
        <div class="text_01">
        All of these positive side-effects help Rosenthal Apa Group</br>
        patients look refreshed, younger and more vibrant—and this</br>
        is only the beginning.</br></br> 
        The natural law of beauty is the Golden Proportion, an</br>
        essential component in creating the perfect smile. Dr.</br>
        Rosenthal and Dr. Apa don’t just fix teeth—they develop a</br>
        smile that will bring balance and symmetry to the entire face.</br>
        To learn more about the <span class="link_SMO">Smile Makeover</span> process, visit our</br>
        Treatments section.</br></br>
        </div>
        <div class="text_02">
        An enhanced smile also has psychological benefits:</br>
        </div>
        <div class="text_01 last_text">
        INCREASED SELF-CONFIDENCE</br>
        IMPROVED SELF-ESTEEM</br>
        GENERAL BETTERMENT</br>
        </div>
        <a id="link_contact" href="#"><div class="consulation"></div></a>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">
$(document).ready(function() {
    
    var background_image_url = templateUrl + '/img/treatments/facial_aesthetic_design/faical_aesthetic_design_bg_mobile.jpg';

    $("#background_image").one("load", function() {
        $(".title_bg").animate({opacity:1}, 1000);
        $(".title_bg").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

    $('.consulation').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
    });

    $('.link_SMO').click(function(){
            document.location.href = $("a:contains('SMILE MAKEOVER')").attr('href');
    });

});
</script>