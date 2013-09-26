<?php
/**
 * The template for displaying Search Results pages Mobile
 *
 * @package RA
 */
?>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/search_mobile.css" />

<?php get_header('mobile');?>


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
<!-- 		<div id="main_bg"></div> -->
        <div class="title_bg">
		   <div class="title">SEARCH RESULTS</div>
        </div>

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
                    	$start_num = 5;
                    	$end_num = $posts_per_page + 5;
                    }else if(3==$current_page){
                    	$start_num = 11;
                    	$end_num = $posts_per_page + 10;
                    }elseif(4==$current_page){
                        $start_num = 16;
                        $end_num = $posts_per_page + 15;
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

					<?php get_template_part( 'content', 'search_mobile' ); ?>

				<?php endwhile; ?>

			<?php else : ?>

				<div class="no_result">Sorry, but nothing matched your search terms. Please try again with some different keywords.</div>

			<?php endif; ?>
           </div>
        </div>
		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_footer('mobile');?>

<script>

$(function(){
    $("#searchBtn_m").css('backgroundPosition', 'top right');
    $('#pre_btn').attr('src', 'http://cmykpluswhite.biz/RA-NewSite/wp-content/plugins/wp-pagenavi/img/pre_mobile.jpg');
    $('#next_btn').attr('src', 'http://cmykpluswhite.biz/RA-NewSite/wp-content/plugins/wp-pagenavi/img/next_mobile.jpg');

    // Smooth Click Event
    // $("article").each(function(){
    //     $(this).click(function() {
    //         document.location.href = $(this).find("a").attr("href");
    //     });
    // });
    $(".align_middle_table td").each(function(){
        $(this).click(function() {
            document.location.href = $(this).attr("href");
        });

        // Delete 'a' element for style
        // <td><a class="something">1</a></td> -> <td class="something">1</td>
        $(this).find("a, span").each(function(){
            $(this).parent().attr("class", $(this).attr("class"));
            $(this).parent().attr("href", $(this).attr("href"));
            $(this).parent().html($(this).html());
            $(this).remove();
        });


    });
    // #Smooth Click Event

    $('.previouspostslink, .nextpostslink').click(function(){
        document.location.href = $(this).attr('href');
    });

});

</script>
