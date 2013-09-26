<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package RA
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo" style="opacity:0;">
		<div class="site-info">
			<?php do_action( 'ra_credits' ); ?>
			<p style="float:left">Copyright © 2013 Rosenthal Apa Group. All rights reserved.</p>

			<div id="shareBtnFooter" style="float:right;">
				<a href="https://www.facebook.com/pages/Rosenthal-Apa-Group/151158578238008?v=wall" style="margin-right:8px;" target="_blank">
					<img src="<?php bloginfo('stylesheet_directory'); ?>/img/fbButton.png">
				</a>

				<a href="https://twitter.com/RosenthalApa" target="_blank">
					<img src="<?php bloginfo('stylesheet_directory'); ?>/img/twitterButton.png" style="margin-right:4px;">
				</a>

			</div>


		</div><!-- .site-info -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>