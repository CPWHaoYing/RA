<link href='http://fonts.googleapis.com/css?family=Lato:400,400italic,700,900' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/press.css" type="text/css">
<link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/flexslider.css" type="text/css">
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script src="<?php bloginfo('template_url') ?>/js/flexslider.js"></script>
<script>
	$(window).load(function(){
	  $('.flexslider').flexslider({
	     animation:"fade",
	     controlNav: false, 
	     animationLoop: false, 
	     slideshow: false,
	  });
	});
</script>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<div class="light_box_wrap">

    <div class="left">
    	<?php if(get_field( 'press_type' )== "print"): ?>
		     <div class="title_image"><img src="<?php the_field( 'title_image' ); ?>"></div>
		<?php endif; ?>
        
		<?php if(get_field( 'press_type' )== "print"): ?>
		    <div id="top_wrap" class="cf">
			    <div id="lbShare">SHARE&nbsp;&nbsp;&nbsp;ARTICLE</div>
				<?php
					$social_sharing_toolkit = new MR_Social_Sharing_Toolkit();
					echo $social_sharing_toolkit->create_bookmarks();
				?>
		    </div>
			<div class="break_line_01"></div>
			<div class="p_source"><?php the_field( 'press_source' ); ?></div>
		    <div class="p_date"><?php the_field( 'press_date' ); ?></div>

		<?php else: ?>
            <div id="top_wrap_video" class="cf">
			    <div id="lbShare">SHARE&nbsp;&nbsp;&nbsp;VIDEO</div>
			    <?php
					$social_sharing_toolkit = new MR_Social_Sharing_Toolkit();
					echo $social_sharing_toolkit->create_bookmarks();
				?>
			</div>
			<div class="break_line_01"></div>
			<div class="p_top"><?php the_field( 'press_top' ); ?></div>
		    <div class="p_mid"><?php the_field( 'press_mid' ); ?></div>
		    <div class="p_bottom"><?php the_field( 'press_bottom' ); ?></div>

        <?php endif; ?>
 
        <div class="break_line_02"></div>
    </div>

	<div class="right">
		<?php if(get_field( 'press_type' )== "print"): ?>
				<?php

				$images = get_field('image_gallery');
				 
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
	      <iframe id="video_content" width="625" height="390" src="<?php the_field( 'content_url' ); ?>" frameborder="0" allowfullscreen></iframe>
	    </li>
	    <?php endif; ?>
    </div>

</div>
<?php endwhile; else: ?>
	
	<p>There are no posts or pages here</p>

<?php endif; ?>