<?php
/**
 *
 * Template Name: Entrevistas
 *
 * @package understrap
 */

get_header();

?>

<section class="container  page-entrevistas">
	<?php
		// Check rows exists.
		if (have_rows('entrevistas')) :
			echo '<ul class="list-entrevistas">';
			// Loop through rows.
			while (have_rows('entrevistas')) :
				the_row();
		?>
	<li class=" bg-secondary border-secondary ">
		<a href="<?php echo get_sub_field('interview_video') ?>" class="container-article" target="_blank">
			<article>
				<h2>
					<?php echo get_sub_field('interview') ?>
				</h2>

				<p>
					<?php echo get_sub_field('interview_text') ?>
				</p>

				<div class="container-image">
					<img src="<?php echo get_sub_field('interview_thumb') ?>" class="w-100" />
				</div>

			</article>
		</a>

	</li>
	<?php
			// End loop.
			endwhile;
			echo '</ul>';
			?>
	<?php
		// No value.
		else :
		// No rows found
		endif;
		?>
</section>

<?php get_footer(); ?>
