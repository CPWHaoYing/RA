<?php
/*
Template Name: Frequently Asked Questions Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/faq_mobile.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<?php get_header('mobile');?>

<div class="main cf" >
    <div class="title_bg" style="opacity:0;">
        <img id="background_image" src="#" style="display:none;"/>
        <div class="title">FREQUENTLY</br>ASKED</br>QUESTIONS</div>
    </div>
    <div class="text_area">
        <div class="text_02">
        What is a veneer?</br>
        </div>
        <div class="text_01">
        A veneer is a thin porcelain shell bonded on top of the natural</br>
        tooth. It is approximately  a half millimeter thick, roughly the</br>
        same as a baby’s fingernail. The natural tooth requires minimal</br>
        preparation–sometimes none at all. With a veneer there’s no</br>
        dark line above the tooth, which is often the case with a crown.</br>
        A crown—or cap—covers the entire tooth and reduces it to</br>
        a peg. Preparation for veneers is more conservative than for</br>
        crowns and requires a less invasive procedure. For all of these</br>
        reasons, veneers are the treatment of choice at Rosenthal Apa</br>
        Group.</br></br>
        </div>
        <div class="text_02">
        How long do porcelain veneers last—and will they</br>
        stain like natural teeth?</br>
        </div>
        <div class="text_01">
        Veneers should last from 10 to 15 years, sometimes longer.</br>
        They’re significantly more resistant to stain and discoloration</br>
        and, unlike your natural teeth, maintain their brightness and</br>
        luster for many years.</br></br>
        </div>
        <div class="text_02">
        What is a Smile Makeover?</br>
        </div>
        <div class="text_01">
        A Smile Makeover is a change in the lower third of a patient’s</br>
        face. By widening the smile and building out the teeth</br>
        (perhaps by lengthening them, adding more anatomy and</br>
        translucency) using veneers, we can create a more dynamic</br>
        smile that in some cases slightly fills out the lips and provides</br>
        the patient with a fuller, more youthful appearance. It is similar</br>
        to a facelift from the nose down—without the scalpel.</br></br>
        </div>
        <div class="text_02">
        What is the time commitment for a Smile Makeover?</br>
        </div>
        <div class="text_01">
        Generally, it takes two visits, 7–10 days apart, with a short</br>
        20-minute follow-up to apply finishing touches like contouring</br>
        and polishing.</br></br>
        </div>
        <div class="text_02">
        Does the Smile Makeover look natural?</br>
        </div>
        <div class="text_01">
        Yes, a Smile Makeover will look totally natural and be</br>
        undetectable—friends will simply think you returned from</br>
        a vacation looking refreshed. Often, lips begin to sag over</br> 
        time and lose their elasticity. Because their primary support</br>
        comes from the teeth, by widening and lengthening those</br>
        teeth, lips appear more youthful.  Based on the patient’s age,</br>
        skin tone, and gender, teeth color and shape are selected</br> 
        to enhance the appearance from the nose down. The</br>
        procedure is non-invasive and the result looks natural.</br>
        </div>
        <div class="bottom_wrap cf">
            <div class="text_03">MORE QUESTIONS? PLEASE</div>
            <a id="link_contact" href="#"><div class="contact"></div></a>
        </div>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">
$(function() {
    
    var background_image_url = templateUrl + '/img/treatments/faq/faq_bg_mobile.jpg';

    $("#background_image").one("load", function() {
        $(".title_bg").animate({opacity:1}, 1000);
        $(".title_bg").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

    $('.contact').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
    });

});
</script>