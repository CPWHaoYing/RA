<?php
/*
Template Name: Dubai
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'dubai_mobile.php');
    } 
else
    {
        require_once( 'dubai_pc.php');
    }
?>