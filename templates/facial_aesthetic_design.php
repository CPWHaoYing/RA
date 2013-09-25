<?php
/*
Template Name: Facial Aesthetic Design
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'facial_aesthetic_design_mobile.php');
    } 
else
    {
        require_once( 'facial_aesthetic_design_pc.php');
    }
?>