<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package RA
 */
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/404.css" />
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/nonAjax_handler.js"></script>
<?php if (!$_GET['ajax']) get_header(); ?>

<section id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
	<div id="main_bg"></div>
	<div class="title">THE PAGE CAN'T BE FOUND</div>

	<div id="result_wrap_404">

        <div class="bottom_wrap">
			<div class="no_result">It looks like nothing was found at this location. Try another page or a search?</div>
       </div>
    </div>
    <div id="contact_wrap">
    	<div id="divide_line"></div>
    	<div id="text_area">
        MORE QUESTIONS?</br>
        PLEASE COMPLETE THE</br>
        SHORT FORM ON OUR</br>
        CONTACT PAGE TO GET</br>
        MORE INFORMATION.
        <div id="link_contact">
            <a href="#"><div class="contact_btn"></div></a>
        </div>
    	</div>
    </div>
	</main><!-- #main -->
	</main><!-- #main -->
</section><!-- #primary -->

<?php if (!$_GET['ajax']) get_footer(); ?>

<script>

</script>