<?php
/**
 *
 * Template Name: Sobre Nós
 *
 * @package understrap
 */

get_header();

?>

<section class="pp-page-sobre-nos container">
	<div class="pp-container-1">
		<div class="pp-container-image pp-c-container-image-effect-primary">
			<img src="<?php echo get_field('our_history_image') ?>" />
		</div>

		<div class="pp-container-text pp-c-container-bg-secondary">
			<h3>
				<?php echo get_field('our_history_title') ?>
			</h3>
			<p>
				<?php echo get_field('our_history_text') ?>
			</p>
		</div>
	</div>

	<div class="pp-container-2">
		<?php
		// Check rows exists.
		if (have_rows('our_cards')) :
			echo '<ul class="pp-list-cards">';
			// Loop through rows.
			while (have_rows('our_cards')) :
				the_row();
		?>
		<li class="pp-c-container-bg-secondary">
			<img src="<?php echo get_sub_field('our_card_image') ?>" alt="card" />
			<h3>
				<?php echo get_sub_field('our_card_title') ?>
				das
			</h3>
			<p>
				<?php echo get_sub_field('our_card_text') ?>
			</p>
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
	</div>
</section>

<?php get_footer(); ?>
