<?php
/*
Template Name: In The Press
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'press_mobile.php');
    } 
else
    {
        require_once( 'press_pc.php');
    }
?>