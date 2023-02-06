<?php
/**
 *
 * Template Name: Câncer de Pulmão
 *
 * @package understrap
 */

get_header();

?>

<div class="container page-cancer-de-pulmao">

	<section class="session-1">
		<div>
			<h2>
				<?php echo get_field('cancer_title_1') ?>
			</h2>

			<p>
				<?php echo get_field('cancer_text_1') ?>
			</p>
		</div>

		<img src="<?php echo get_field('cancer_image_1') ?>" />
	</section>

	<section class="session-2 ">
		<div>
			<h2>
				<?php echo get_field('cancer_title_2') ?>
			</h2>

			<p>
				<?php echo get_field('cancer_text_2') ?>
			</p>
		</div>

		<img src="<?php echo get_field('cancer_image_2') ?>" />
	</section>


	<section class="session-3 d-flex justify-content-center">
		<img src="<?php echo get_field('imagem_do_video_') ?>" />
	</section>
</div>

<?php get_footer(); ?>
