<?php
/**
 * The template for displaying search forms in RA
 *
 * @package RA
 */
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/cmyk_search.css"/>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php _ex( 'Search for:', 'label', 'ra' ); ?></span>
		<input type="search" id="" class="search-field" placeholder="" value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="<?php _ex( 'Search for:', 'label', 'ra' ); ?>">
	</label>
</form>

