<?php
/**
 * The Header for our mobile theme.
 *
 * Displays all of the <head> section and everything up till <main id="main">
 *
 * @package RA
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=640px, minimum-scale=0.5, maximum-scale=1, user-scalable=0.5">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<!-- Google Font Lato-->
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,900' rel='stylesheet' type='text/css'>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style-mobile.css"/>

<!-- JQUERY -->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery.ui.touch-punch.min.js"></script>

<script type="text/javascript" src="<?php bloginfo('stylesheet_directory') ?>/js/fancybox_mobile.js"></script>
<!--<script src="<?php bloginfo('stylesheet_directory'); ?>/js/landingPage/jquery.sequence.js"></script>-->

<!--<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/fastclick.js"></script>-->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/header-mobile.js"></script>

<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/cmyk_search_mobile.css"/>

<?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
<?php if (function_exists('AWM_generate_linking_code'))AWM_generate_linking_code(); ?>

<div id="page_m" class="hfeed site">
	<?php do_action( 'before' ); ?>

	<header id="masthead" class="site-header" role="banner">
		<div class="site-branding_m" id="menu">
			<div class="RALogo_m"><!--LOGO-->
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/RALogo.jpg"></a>
			</div>
			<!-- Search Form -->
			<div id="header_buttons">
				
				<div id="menuBtn_touchArea"><div id="menuBtn_m"></div></div>
				<div id="searchBtn_touchArea"><div id="searchBtn_m" class="searchBtn_m_icon"></div></div>
				<div id="search_wrapper" style="display:none;"><?php get_search_form(); ?></div>
			</div>
		</div><!-- site-branding -->
	</header><!-- #masthead -->
	<!--#loadingBox-->

	<div id="navi_m" style="display:none;">
	<!-- site-navigation -->
		<nav id="site-navigation" class="main-navigation" role="navigation">
			<?php wp_nav_menu( array( 'menu' => 'Mobile' ) ); ?>
		</nav>
	<!-- #site-navigation -->
	</div>


	<div id="content_m" class="site-content">

