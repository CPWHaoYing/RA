<?php
/*
Template Name: Smile Make Over
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'smile_make_over_mobile.php');
    } 
else
    {
        require_once( 'smile_make_over_pc.php');
    }
?>