
<?php
/*
Template Name: In The Press Mobile
*/
?>
<link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/fancybox/fancybox_mobile.css" type="text/css">
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/press_mobile.css" />

<?php get_header('mobile');?>

<div class="main cf" >
    <div class="title_bg">
        <div class="title">IN THE PRESS</div>
    </div>
    <div class="image_area cf">
      <div class="left_wrap">
        <div class="left_top">
          <?php
          query_posts('cat=11&order=DESC'); 
          if(have_posts()) : while(have_posts()) : the_post(); 
          ?>
          <div class="image_wap">
              <a href="<?php the_permalink() ;?>" class="fancybox no-ajaxy">
                  <img src="<?php the_field('display_image_mobile') ;?>">
              </a>
          </div>

          <?php endwhile; ?>

          <?php else : ?>

            <h2>No posts found</h2>

          <?php endif; ?>
        </div>
        <div class="left_right">
          <?php
          query_posts('cat=8&order=DESC'); 
          if(have_posts()) : while(have_posts()) : the_post(); 
          ?>
          <div class="image_wap">
              <a href="<?php the_permalink() ;?>" class="fancybox no-ajaxy">
                  <img src="<?php the_field('display_image_mobile') ;?>">
              </a>
          </div>

          <?php endwhile; ?>

          <?php else : ?>

            <h2>No posts found</h2>

          <?php endif; ?>
        </div>
      </div>
      <div class="right_wrap">
        <?php
        query_posts('cat=9&order=DESC'); 
        if(have_posts()) : while(have_posts()) : the_post(); 
        ?>
        <div class="image_wap">
          <a href="<?php the_permalink() ;?>" class="fancybox no-ajaxy">
              <img src="<?php the_field('display_image_mobile') ;?>">
          </a>
        </div>
        <?php endwhile; ?>

        <?php else : ?>

          <h2>No posts found</h2>

        <?php endif; ?>
      </div>
    </div>
</div>

<?php get_footer('mobile');?>

<script type="text/javascript">

$(document).ready(function(){
  jQuery.noConflict();

  
  function removeScrollbars(){
          // $("html").css("overflow", "hidden");
      }
      
  function bringBackScrollbars(){
          // $("html").css("overflow", "scroll");
          // $("html").css("overflow-x", "hidden");

      }

  $('.fancybox').fancybox({
       width:640,
       // height:2000,
       type:'iframe',
       autoScale:'false',
       scrolling:'no',
       onStart   : removeScrollbars,
       onClosed : bringBackScrollbars,
       onComplete : function() {
        $('#fancybox-frame').load(function() { // wait for frame to load and then gets it's height
          var height = $(this).contents().find('li').height()+253;
          var overlay_height = height + 146;
          if (overlay_height < parseInt($(document).height()))
            overlay_height = parseInt($(document).height() + 130);

          var check_height = height + 73 + parseInt($("#fancybox-wrap").css("top"));
          if (overlay_height < check_height) overlay_height = check_height;

            $('#fancybox-content').height(height);
            $('#fancybox-content').css({'margin-top':'0'});
            $('#fancybox-overlay').height(overlay_height);
            $('#fancybox-content, #fancybox-outer').css({'min-width':640});
            // $('#fancybox-overlay').css({'min-width':1024});
            $("#fancybox-loading").hide();
            $("#fancybox-close").animate({"opacity":"1"}, 200);       

        });
        }
  });
});

</script>