<?php

/**
 *
 * Template Name: Projetos
 *
 * @package understrap
 */
get_header();

function verifyIndex($index) {
	$result = $index % 2 == 1 ? 'no-revert' : 'revert';

	return $result;
}
?>
<div>
	Projetos
	<section class="container  page-projetos">
		<?php
		// Check rows exists.
		if (have_rows('projects')):
			echo '<ul>';
			// sum iterations
			$index = 0;
			// Loop through rows.
			while (have_rows('projects')):
				the_row();
				$index++;

				$class = verifyIndex($index);
				?>
		<li class="<?php echo $class ?>">
			<div class="container-content">
				<h2>
					<?php echo get_sub_field('project') ?>
				</h2>

				<p>
					<?php echo get_sub_field('project_text') ?>
				</p>

				<button class="btn-primary w-100 p-">
					Veja Mais
				</button>
			</div>

			<div class="container-image">
				<img src="<?php echo get_sub_field('project_image') ?>" alt="ilustração">
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

</div>

<?php get_footer(); ?>
