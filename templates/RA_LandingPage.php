<?php
/*
Template Name: RA_LandingPage
*/
if ( wp_is_mobile_not_tablet() ) 
	{
		require_once( 'RA_LandingPage_mobile.php');
	} 
else
	{
		require_once( 'RA_LandingPage_pc.php');
	}
?>
