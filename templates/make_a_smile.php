<?php
/*
Template Name: Dubai
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'make_a_smile_mobile.php');
    } 
else
    {
        require_once( 'make_a_smile_pc.php');
    }
?>