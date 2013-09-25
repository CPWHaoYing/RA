<?php
/*
Template Name: Rosenthal Institute NYU
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'rosenthal_institute_nyu_mobile.php');
    } 
else
    {
        require_once( 'rosenthal_institute_nyu_pc.php');
    }
?>