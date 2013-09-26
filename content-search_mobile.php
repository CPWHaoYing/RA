<?php
/**
 * @package RA
 */
?>
<?php

  $long_title = get_post_custom_values('longTitle');

?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php echo $long_title[0]; ?> </a></h1>

	</header><!-- .entry-header -->

	<?php if ( is_search() ) : // Only display Excerpts for Search ?>
	<div class="entry-summary">
		<a href="<?php the_permalink(); ?>" rel="bookmark">
		<?php
           // $excerpt = get_the_excerpt();
           // echo substr($excerpt,0,160);
		   echo the_excerpt();
        ?>
        </a>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content">
		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'ra' ) ); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'ra' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	<?php endif; ?>

</article><!-- #post-## -->
