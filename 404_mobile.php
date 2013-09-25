<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package RA
 */
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/404_mobile.css" />
<?php get_header('mobile');?>

<section id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
    <div class="title_bg">
	   <div class="title">THE PAGE CAN'T BE FOUND</div>
    </div>

	<div id="result_wrap">
        <div class="bottom_wrap">
			<div class="no_result">It looks like nothing was found at this location.<br/>Try another page or a search?</div>
       </div>
    </div>
	</main><!-- #main -->
</section><!-- #primary -->


<?php get_footer('mobile');?>

<script>

</script>