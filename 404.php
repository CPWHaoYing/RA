<?php
/**
 * The template for displaying 404 pages (Not Found).
 * cal function "wp_is_mobile_not_table" in the vars.php
 * ..
 * @package RA
 */
if ( wp_is_mobile_not_tablet() ) 
    {
        require_once( '404_mobile.php');
    } 
else
    {
        require_once( '404_pc.php');
    }
?>