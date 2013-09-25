<?php
/*
Template Name: Dubai Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/dubai_mobile.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<?php get_header('mobile');?>

<div class="main cf" >
    <div class="title_bg" style="opacity:0;">
        <img id="background_image" src="#" style="display:none;"/>
    </div>
    <div class="title_wrap">
        <div class="title">OUR DUBAI</br>PRACTICE</div>
    </div>
    <div class="text_area">
        <div class="text_01">
        Dr. Apa launched Apa Aesthetic, the Dubai branch of the</br>
        Rosenthal Apa Group, in 2008, just before the economic</br>
        downturn. Despite the challenges of opening a business</br>
        in a foreign country and during ongoing market turmoil,</br>
        the branch has grown and flourished into one of the most</br>
        successful and highly regarded providers of aesthetic</br>
        dentistry in the area.</br></br>
        </div>
        <div class="text_02">
        HOW IT WORKS</br>
        </div>
        <div class="text_01">
        Dr. Apa oversees the Dubai branch and travels back and</br>
        forth three times a year to consult with clients and perform</br>
        procedures.</br></br>

        The team aims to take quick, efficient trips servicing 10 to 11</br>
        patients each time. The schedule is exhilarating and begins</br>
        with an 11pm flight to Dubai on a Thursday. They arrive Friday,</br>
        begin work Saturday and work through Monday. On Tuesday,</br>
        clients’ cases are flown back to New York for crafting by an</br>
        expert ceramist. The final products reach Dubai Friday and are</br>
        inserted  over the weekend. The team returns to New York at</br>
        7am on Monday, ready to serve its New York clientele.</br></br>
        </div>
        <div class="text_02">
        WHAT’S NEXT?</br>
        </div>
        <div class="text_01 last_text">
        The Dubai branch is the first of many clinics Dr. Apa hopes to</br>
        open around the world. It is his mission to educate and elevate</br>
        the level of dental healthcare worldwide.</br>
        </div>
        <div class="divide_line"></div>
        <div class="text_02">
        Apa Aesthetic</br>
        </div>
        <div class="text_01 last_text">
        VILLA NO. 1016, AL WASL ROAD,</br> 
        UMM SUQEIM 1</br>
        DUBAI (P.O.BOX 213 720 DUBAI) UAE</br>
        T 971.4.394.9433
        </div>
        <a id="link_contact" href="#"><div class="consulation"></div></a>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">
$(function() {
    
    var background_image_url = templateUrl + '/img/dubai/dubai_bg_mobile.jpg';

    $("#background_image").one("load", function() {
        $(".title_bg").css({opacity:1});
        $(".title_bg").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

    $('.consulation').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
    });

});
</script>