<?php
/**
 *
 * Template Name: Eventos
 *
 * @package understrap
 */

get_header();

function verifyIndex($index) {
  $result = $index % 2 == 1 ? 'no-revert' : 'revert';
  return $result;
}

?>

<section class="container  page-eventos">
	<?php
    // Check rows exists.
    if (have_rows('eventos')):
      echo '<ul>';
      // sum iterations
      $index = 0;
      // Loop through rows.
      while (have_rows('eventos')):
        the_row();
        $index++;
        $class = verifyIndex($index);
        ?>
	<li class="<?php echo $class ?>">
		<div class="container-content">
			<h2>
				<?php echo get_sub_field('event') ?>
			</h2>
			<p>
				<?php echo get_sub_field('event_text') ?>
			</p>
		</div>
		<div class="container-image">
			<img src="<?php echo get_sub_field('event_img') ?>" alt="ilustração">
		</div>
	</li>
	<?php
        // End loop.
      endwhile;
      echo '</ul>';
      ?>
	<?php
    // No value.
    else:
      // No rows found
    endif;
    ?>
</section>

<?php get_footer(); ?>
