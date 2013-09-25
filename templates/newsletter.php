<?php
/*
Template Name: Newsletter
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'newsletter_mobile.php');
    } 
else
    {
        require_once( 'newsletter_pc.php');
    }
?>