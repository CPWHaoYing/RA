<?php
/**
 * The template for displaying Search Results pages PC
 *
 * @package RA
 */
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/search.css" />
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/nonAjax_handler.js"></script>
<?php if (!$_GET['ajax']) get_header(); ?>

<script src="<?php bloginfo('stylesheet_directory'); ?>/js/search.js"></script>

<script>

$(function(){
  $("#searchBtn").css('backgroundPosition', 'top right');

  $("#searchBtn").mouseover(function() {
            $(this).css("background-position", "right top");
        }).mouseout(function(){
            $(this).css("background-position", "right top");
    });
});

</script>
<?php
global $query_string;

$query_args = explode("&", $query_string);
$search_query = array();

foreach($query_args as $key => $string) {
	$query_split = explode("=", $string);
	$search_query[$query_split[0]] = urldecode($query_split[1]);
} // foreach

$search = new WP_Query($search_query);
?>
<!-- total result -->
<?php
global $wp_query;
$total_results = $wp_query->found_posts;
?>
<!-- list of post -->
	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<div id="main_bg"></div>
		<div class="title">SEARCH RESULTS</div>

		<div id="result_wrap">
				<div class="top_wrap cf">
                <?php if ( have_posts() ) : ?>
                    <?php 
                    $current_page = max(1, get_query_var('paged')); 
                    $start_num;
                    $end_num; 
                    $posts_per_page=count($posts);
                    if(1==$current_page){
                        $start_num = 1;
                        $end_num = $posts_per_page;
                    }else if(2==$current_page){
                    	$start_num = 11;
                    	$end_num = $posts_per_page + 10;
                    }else if(3==$current_page){
                    	$start_num = 21;
                    	$end_num = $posts_per_page + 20;
                    }else{

                    }

                    ?>

					<div class="showing_num">Showing <?php echo $start_num ?>-<?php echo $end_num ?> of <?php echo $total_results ?></div>
                    <?php else : ?>
                    <div class="showing_num">Showing <?php echo $total_results ?></div>
                    <?php endif; ?>

            <?php ra_content_nav( 'nav-below' ); ?>
            </div>
	        <div class="bottom_wrap">

			<?php if ( have_posts() ) : ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'search' ); ?>

				<?php endwhile; ?>

			<?php else : ?>

				<div class="no_result">Sorry, but nothing matched your search terms. Please try again with some different keywords.</div>

			<?php endif; ?>
           </div>
        </div>
        <div id="contact_wrap">
        	<div id="divide_line"></div>
        	<div id="text_area">
            MORE QUESTIONS?</br>
            PLEASE COMPLETE THE</br>
            SHORT FORM ON OUR</br>
            CONTACT PAGE TO GET</br>
            MORE INFORMATION.
            <div id="link_contact">
                <a href="#"><div class="contact_btn"></div></a>
            </div>
        	</div>
        </div>
		</main><!-- #main -->
	</section><!-- #primary -->

<?php if (!$_GET['ajax']) get_footer(); ?>