<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <main id="main">
 *
 * @package RA
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=1024px, maximum-scale=1, minimum-scale=0.75, user-scalable=yes">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<!-- Google Font Lato-->
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,900' rel='stylesheet' type='text/css'>
<!-- JQUERY -->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-ui.min.js"></script>

<!-- BA -->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery.ui.touch-punch.min.js"></script>
<!-- LANDING PAGE -->


<!-- PRESS PAGE -->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory') ?>/js/fancybox.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery.isotope.js"></script>

<!-- Ajax -->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/modernizr.custom.cmyk.js"></script>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/cmyk_ajax.css"/>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/cmyk_ajax.js"></script>

<!-- Landing Page -->
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/landingPage/jquery.sequence.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/landingPage/ra_sequencejs.js"></script>

<!-- Search Page -->
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/cmyk_search.js"></script>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/cmyk_search.css"/>

<!-- Tablet Header -->
<?php if ( is_tablet() ) {?>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/header_tablet.js"></script>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style-tablet.css"/>
<?php }?> 
	

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php if (function_exists('AWM_generate_linking_code'))AWM_generate_linking_code(); ?>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">
		<div class="site-branding" id="menu" style="opacity:0;">
			<div class="RALogo"><!--LOGO-->
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>#" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/RALogo.jpg"></a>
			</div>
			<!-- <h2 class="site-description"></?php bloginfo( 'description' ); ?></h2> -->

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<h1 class="menu-toggle"><?php _e( 'Menu', 'ra' ); ?></h1>
				<div class="screen-reader-text skip-link"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'ra' ); ?>"><?php _e( 'Skip to content', 'ra' ); ?></a></div>

				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
						
			</nav><!-- #site-navigation -->
		
		<!-- Search Form -->
		<div id="searchBtn">
			<div id="search_wrapper" style="display:none;"><?php get_search_form(); ?></div>
		</div>

		</div><!-- site-branding -->
	
	</header><!-- #masthead -->
	<!--loadingBox-->
	<div id="loadingBox_RA"><div></div></div>
	<!--#loadingBox-->
	<div id="content" class="site-content" style="opacity:0;">
