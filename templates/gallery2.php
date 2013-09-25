<?php
/*
Template Name: Gallery2
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'gallery2_mobile.php');
    } 
else
    {
        require_once( 'gallery2_pc.php');
    }
?>