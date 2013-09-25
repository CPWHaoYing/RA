<?php
/*
Template Name: Frequently Asked Questions
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'faq_mobile.php');
    } 
else
    {
        require_once( 'faq_pc.php');
    }
?>