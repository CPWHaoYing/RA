<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style-mobile.css"/>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/dr_template_mobile.css" />

<?php get_header('mobile');?>
<?php
    $custom_fields = get_post_custom(get_the_id());

    $field_backgroundUrl = $custom_fields['Background_Url_Mobile'][0];
    $field_name = $custom_fields['Name'][0];
    $field_title_1 = $custom_fields['Title_1'][0];
    $field_title_2 = $custom_fields['Title_2'][0];
    $field_textLeft_1 = $custom_fields['Text_Mobile_1'][0];
    $field_textLeft_2 = $custom_fields['Text_Mobile_2'][0];
?>

<div class="main" >
    <div class="title_image" style="opacity:0;">
        <img id="background_image" src="#" style="display:none;"/>
        <div id="bg_url" style="display:none;"><?php echo $field_backgroundUrl; ?></div>
        <div class="dr_title_box">
            <div class="dr_name">
                <?php echo $field_name; ?>
            </div>
            <div class="dr_title">
                <?php echo $field_title_1; ?><br/>
                <?php echo $field_title_2; ?>
            </div>
        </div>
    </div>

    <div class="content_wrapper">
        <div class="text_left_wrapper_1">
            <?php echo $field_textLeft_1; ?>
        </div>
        <div class="text_left_wrapper_2">
            <?php echo $field_textLeft_2; ?>
        </div>
    </div>
    <div class="button_wrapper">
    <a id="link_contact" href="#">
        <div class="consulation"></div>
    </a>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">

$(function() {
    var background_image_url = $("#bg_url").html();

    $("#background_image").one("load", function() {
        $(".title_image").animate({opacity:1}, 1000);
        $(".title_image").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);

    // for Android Devices - Height Fixed
    if ($(".dr_name").html().trim() == "Dr.Michael Apa, DDS" ) {   
        $(".text_left_wrapper_1").height("999");
        $(".text_left_wrapper_2").height("813");
    }
    else {
        $(".text_left_wrapper_1").height("713");
        $(".text_left_wrapper_2").height("364");
    }

    $('.consulation').click(function(){
            var contact_url = $("a:contains('CONTACT')").attr('href');
            $("#link_contact").attr('href',contact_url);
      });
});

</script>