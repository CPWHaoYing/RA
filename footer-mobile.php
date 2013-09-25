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

	<footer id="colophon_m" class="site-footer" role="contentinfo">
		<div class="site-info_m">
			<?php do_action( 'ra_credits' ); ?>
			<p style="float:left">Copyright © 2013 Rosenthal Apa Group. All rights reserved.</p>

			<div id="shareBtnFooter">
				<?php
					$social_sharing_toolkit = new MR_Social_Sharing_Toolkit();
					echo $social_sharing_toolkit->create_bookmarks();
				?>
			</div>

		</div><!-- .site-info -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>