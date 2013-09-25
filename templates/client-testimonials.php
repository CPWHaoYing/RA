<?php
/*
Template Name: Client Testimonials
*/
if ( wp_is_mobile_not_tablet() ) 
	{
		require_once( 'client-testimonials_mobile.php');
	} 
else
	{
		require_once( 'client-testimonials_pc.php');
	}
?>