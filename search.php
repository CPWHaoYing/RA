<?php
/*
 * The template for displaying Search Results pages.
*/
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( 'search_mobile.php');
    } 
else
    {
        require_once( 'search_pc.php');
    }
?>