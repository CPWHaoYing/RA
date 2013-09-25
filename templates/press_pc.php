
<link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/fancybox/fancybox.css" type="text/css">
<link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/press.css" type="text/css">

<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/nonAjax_handler.js"></script>

<?php 

/*

	Template Name: In The Press PC

*/

if (!$_GET['ajax']) get_header();?>

<?php

	$args = array(
		'post_type' => 'press'
	);

	$the_query = new WP_Query( $args );

?>

<div id="wrapper" style="opacity:0;">
	<ul id="container" >
	<?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

	    <li class="containerBox" style="max-width:150px; ">
	    	<a href="<?php the_permalink() ;?>" class="fancybox no-ajaxy">
	    		<img src="<?php the_field('display_image') ;?>">
	    	</a>
	    </li>

	<?php endwhile; else: ?>
		
		<p>There are no posts or pages here</p>

	<?php endif; ?>

	</ul>
</div>

<?php if (!$_GET['ajax']) get_footer();?>

<script type="text/javascript">

$(document).ready(function(){
  jQuery.noConflict();

  
  function removeScrollbars(){
          // $("html").css("overflow", "hidden");
      }
      
  function bringBackScrollbars(){
          // $("html").css("overflow", "scroll");
          // $("html").css("overflow-x", "hidden");

      }

  $('.fancybox').fancybox({
       width:924,
       // height:2000,
       type:'iframe',
       autoScale:'false',
       scrolling:'no',
       onStart   : removeScrollbars,
       onClosed : bringBackScrollbars,
       onComplete : function() {
        $('#fancybox-frame').load(function() { // wait for frame to load and then gets it's height
          var height = $(this).contents().find('li').height()+38;
          var overlay_height = height + 146;
          if (overlay_height < parseInt($(document).height()))
            overlay_height = parseInt($(document).height() + 130);

          var check_height = height + 73 + parseInt($("#fancybox-wrap").css("top"));
          if (overlay_height < check_height) overlay_height = check_height;

            $('#fancybox-content').height(height);
            $('#fancybox-content').css({'margin-top':'0'});
            $('#fancybox-overlay').height(overlay_height);
            $('#fancybox-content, #fancybox-outer').css({'min-width':924});
            $('#fancybox-overlay').css({'min-width':1024});
            $("#fancybox-loading").hide();
            $("#fancybox-close").animate({"opacity":"1"}, 200);

                // var $facybox_rolling   = $("#fancybox-wrap"),
                //     $window    = $(window),
                //     offset     = $facybox_rolling.offset(),
                //     topPadding = 73;

                //     alert("scrollTop:"+ $window.scrollTop() + " / offsetTop:" +offset.top + " / height : "+ $facybox_rolling.height());
                // $window.scroll(function() {
                //     if ($window.scrollTop() < $window + )
                //     {
                //     if ($window.scrollTop() > offset.top + $facybox_rolling.height())
                //     {
                //     /*
                //     if ($window.scrollTop() > offset.top) { */
                //         $facybox_rolling.stop().animate({
                //             marginTop: $window.scrollTop() - offset.top + topPadding
                //         });
                //     /*}
                //     else {
                //         $facybox_rolling.stop().animate({
                //             marginTop: 0
                //         });
                //     }*/
                //     }
                //     }
                // });            

        });
        }
  });
});

$(window).load(function(){
  $("#loadingBox_RA").fadeIn();


  var $container = $('#container');
  $container.isotope({
      filter: '*',
      itemSelector: 'li.containerBox',
      layoutMode : 'masonry',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });
   $container.imagesLoaded(function(){
                $container.isotope('reLayout');
                $("#wrapper").css({opacity:1});
                $("#loadingBox_RA").fadeOut();
   });
  
  //$("#loadingBox_RA").fadeOut(100);

});

var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
var click_event = isMobile ? "touchstart" : "click";

// $(".containerBox").bind(click_event, function(){
  
// });


</script>