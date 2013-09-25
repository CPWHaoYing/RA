<?php
/*
Template Name: Contactcontact
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'contact_mobile.php');
    } 
else
    {
        require_once( 'contact_pc.php');
    }
?>