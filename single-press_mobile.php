<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/press_mobile.css" />
<link href='http://fonts.googleapis.com/css?family=Lato:400,400italic,700,900' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/flexslider_mobile.css" type="text/css">

<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script src="<?php bloginfo('template_url') ?>/js/flexslider_mobile.js"></script>
<script>
	$(window).load(function(){
	  $('.flexslider').flexslider({
	  	 directionNav : false,
	     animation:"fade",
	     controlNav: true, 
	     animationLoop: false, 
	     slideshow: false,  
	     controlsContainer: ".flex-container",
         start: function(slider) {
         $('.slides li img').click(function(event){
         event.preventDefault();
         slider.flexAnimate(slider.getTarget("next"));
         });
         }
	  });
	  $(".mr_social_sharing:eq(0) img").attr("src", templateUrl + "/img/button/sns_01_mobile.png");
	  $(".mr_social_sharing:eq(1) img").attr("src", templateUrl + "/img/button/sns_02_mobile.png");
	});
</script>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<div class="light_box_wrap">
<div class="single_main cf" >
    <div class="top_wrap cf">
	      <?php if(get_field( 'press_type' )== "print"): ?>
	        <div class="title_image">
	        	<img src="<?php the_field( 'title_image_mobile' ); ?>">
	        </div>
	      <?php endif; ?>

         <div class="info_wrap">

	        <?php if(get_field( 'press_type' )== "print"): ?>
			    <div id="top_part" class="cf">
				    <div id="lbShare_press">SHARE&nbsp;&nbsp;&nbsp;ARTICLE</div>
				    <div id="social_icon_wrap">
						<?php
							$social_sharing_toolkit = new MR_Social_Sharing_Toolkit();
							echo $social_sharing_toolkit->create_bookmarks();
						?>
				    </div>
			    </div>
				<div class="break_line_01"></div>
				<div class="p_source"><?php the_field( 'press_source' ); ?></div>
			    <div class="p_date"><?php the_field( 'press_date' ); ?></div>

			<?php else: ?>
	            <div id="top_part_video" class="cf">
				    <div id="lbShare_video">SHARE&nbsp;&nbsp;&nbsp;VIDEO</div>
				    <div id="social_icon_wrap">
						    <?php
								$social_sharing_toolkit = new MR_Social_Sharing_Toolkit();
								echo $social_sharing_toolkit->create_bookmarks();
							?>
					</div>
				</div>
				<div class="break_line_01"></div>
				<div class="p_top"><?php the_field( 'press_top' ); ?></div>
			    <div class="p_mid"><?php the_field( 'press_mid' ); ?></div>
			    <div class="p_bottom"><?php the_field( 'press_bottom' ); ?></div>

	        <?php endif; ?>

         </div>
    </div>
    
    <div class="bottom_wrap">
    	<?php if(get_field( 'press_type' )== "print"): ?>
				<?php

				$images = get_field('image_gallery_mobile');
				 
				if( $images ): ?>
				    <div class="flexslider">
				        <ul class="slides">
				            <?php foreach( $images as $image ): ?>
				                <li>
				                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				                </li>
				            <?php endforeach; ?>
				        </ul>
				    </div>
			    <?php endif;  ?>
	    <?php else: ?>
		<li id="video">
	      <iframe id="video_content" width="568" height="350" src="<?php the_field( 'content_url' ); ?>" frameborder="0" allowfullscreen></iframe>
	    </li>
	    <?php endif; ?>
    </div>

</div>
</div>
<?php endwhile; else: ?>
	
	<p>There are no posts or pages here</p>

<?php endif; ?>