<?php
/*
Template Name: DR. Page Template
*/

if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'dr_template_mobile.php');
    } 
else
    {
        require_once( 'dr_template_pc.php');
    }

?>