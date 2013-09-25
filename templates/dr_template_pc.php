
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/dr_template.css" />
<?php if (!$_GET['ajax']) get_header();?>
<?php
	$custom_fields = get_post_custom(get_the_id());

  	$field_backgroundUrl = $custom_fields['Background_Url'][0];
	$field_name = $custom_fields['Name'][0];
	$field_title_1 = $custom_fields['Title_1'][0];
	$field_title_2 = $custom_fields['Title_2'][0];
	$field_textLeft_1 = $custom_fields['Text_Left_1'][0];
	$field_textLeft_2 = $custom_fields['Text_Left_2'][0];
	$field_textRight = $custom_fields['Text_Right'][0];

	function funcInsertImage($string)
	{
		return  '<div class="doctor_photo"><img src="' . $string . '" /><div>';
	}
	
?>

<div class="wrapper">
<div class="main" style="opacity:0; <?php if($field_textLeft_2 == "") echo 'height:538; margin-bottom:180px;' ?> ";>
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

    <div class="content_wrapper" <?php if($field_textLeft_2 == "") echo 'style="width:252px;"' ?> >

    	<?php if ($field_textRight != ""){ ?>
    	<div class="text_right_wrapper">
    		<div class="text_right">
                <?php if ($field_textLeft_2 != ""){ ?>
        			<?php echo $field_textRight; ?>
                    <div id="link_contact">
        				<a href="#">
        	    			<img src="<?php bloginfo('stylesheet_directory'); ?>/img/button/consultation.jpg" class="schedule_button"/>
        	    		</a>
                    </div>
                <?php }
                else {?>
                    <?php echo $field_textRight; ?>
                    <div id="link_contact">
                        <a href="#">
                            <img src="<?php bloginfo('stylesheet_directory'); ?>/img/button/consultation.jpg" class="schedule_button_right_fixed"/>
                        </a>
                    </div>
                <?php }?>
    		</div>
    	</div>
    	<?php } 
    	else {?>
             <div id="link_contact">
        		<a href="#">
    	    			<img src="<?php bloginfo('stylesheet_directory'); ?>/img/button/consultation.jpg" class="schedule_button_fixed"/>
    	    	</a>
             </div>
    	<?php }?>

    	<?php if ($field_textLeft_1 != ""){ ?>
    	<div class="text_left_wrapper_1">
    		<?php echo $field_textLeft_1; ?>
    	</div>
    	<?php } ?>
    	<?php if ($field_textLeft_2 != ""){ ?>
    	<div class="text_left_wrapper_2">
    		<?php echo $field_textLeft_2; ?>
    	</div>
    	<?php } ?>
    </div>
</div>
</div>


<script type="text/javascript">
$(document).ready(function() {
    var background_image_url = $("#bg_url").html();

    $("#background_image").one("load", function() {
        $("#loadingBox_RA").fadeOut(100);
        $(".main").animate({opacity:1}, 1000);
        $(".main").css("background-image", 'url('+background_image_url+')');
    }).attr("src", background_image_url);
});
</script>