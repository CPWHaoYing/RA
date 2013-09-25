<?php
/*
Template Name: Gallery1
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'gallery1_mobile.php');
    } 
else
    {
        require_once( 'gallery1_pc.php');
    }
?>